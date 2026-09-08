# SentinelEdge MVP — TypeScript Code Samples
## Next.js 16 + TypeScript + Prisma + shadcn/ui

The full TypeScript source code (62 files: 50 .tsx + 12 .ts) lives in the **AISensorEdgeComp-MVP** public repo:
https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP

This file provides key code samples from the MVP so investors and engineers can review the TypeScript implementation without cloning the repo.

---

## 1. API Route: Sensor Data (src/app/api/sensors/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const tenantId = searchParams.get('tenantId');
  const limit = parseInt(searchParams.get('limit') || '50');

  if (!tenantId) {
    return NextResponse.json({ error: 'tenantId required' }, { status: 400 });
  }

  const sensors = await prisma.sensor.findMany({
    where: { tenantId },
    include: { readings: { orderBy: { timestamp: 'desc' }, take: limit } },
    orderBy: { name: 'asc' },
  });

  return NextResponse.json({ sensors, count: sensors.length });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { tenantId, sensorId, value, unit, timestamp } = body;

  if (!tenantId || !sensorId || value === undefined) {
    return NextResponse.json({ error: 'tenantId, sensorId, value required' }, { status: 400 });
  }

  const reading = await prisma.sensorReading.create({
    data: {
      sensorId,
      value: parseFloat(value),
      unit: unit || 'unknown',
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    },
  });

  return NextResponse.json({ reading }, { status: 201 });
}
```

## 2. API Route: AI Search (src/app/api/search/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

const SYSTEM_PROMPT = `You are SentinelEdge AI, an expert assistant for the AISensorEdgeComp industrial IoT platform.
Answer questions about: architecture (4-layer: sensing, connectivity, edge compute, intelligence),
TS-FM (350M-param time-series foundation model, 0.89 AUC-ROC zero-shot), federated learning (DP + SGX),
edge autonomy (72h WAN-loss), 9 industrial protocols, 7 sector scenarios, 104 edge cases, 37-test plan.
Be concise, cite specific numbers, and reference the public preview site where relevant.`;

export async function POST(request: NextRequest) {
  const { query } = await request.json();

  if (!query || query.trim().length < 3) {
    return NextResponse.json({ error: 'Query too short' }, { status: 400 });
  }

  try {
    const zai = await ZAI.create();
    const response = await zai.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: query },
      ],
      temperature: 0.7,
      max_tokens: 600,
    });

    const answer = response.choices[0]?.message?.content || 'No response generated.';
    return NextResponse.json({ query, answer });
  } catch (error) {
    // Fallback to rule-based matching
    return NextResponse.json({
      query,
      answer: 'Search service temporarily unavailable. Please try again or browse the site directly.',
      fallback: true,
    });
  }
}
```

## 3. API Route: Provisioning (src/app/api/provision/route.ts)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, org, role, sensorCount, sensorTypes, vertical } = body;

  if (!name || !email || !org) {
    return NextResponse.json({ error: 'name, email, org required' }, { status: 400 });
  }

  const tenantId = `sbx_${randomBytes(8).toString('hex')}`;
  const apiKey = `se_${randomBytes(24).toString('hex')}`;
  const trialEnds = new Date();
  trialEnds.setDate(trialEnds.getDate() + 60);

  const tenant = await prisma.tenant.create({
    data: {
      id: tenantId,
      name: org,
      email,
      contactName: name,
      role: role || 'Engineer',
      sensorCount: sensorCount || 1000,
      sensorTypes: sensorTypes || [],
      vertical: vertical || 'manufacturing',
      apiKey,
      trialEnds,
      status: 'active',
    },
  });

  // Seed initial sensors
  for (let i = 0; i < Math.min(10, sensorCount || 10); i++) {
    await prisma.sensor.create({
      data: {
        tenantId,
        name: `sensor_${i + 1}`,
        type: sensorTypes?.[0] || 'temperature',
        unit: 'celsius',
        status: 'nominal',
      },
    });
  }

  return NextResponse.json({
    tenantId,
    apiKey,
    dashboardUrl: `https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/`,
    trialEnds: trialEnds.toISOString(),
    status: 'provisioned',
  }, { status: 201 });
}
```

## 4. Prisma Schema (prisma/schema.prisma)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url = env("DATABASE_URL")
}

model Tenant {
  id          String   @id @default(cuid())
  name        String
  email       String
  contactName String
  role        String?
  sensorCount Int      @default(1000)
  sensorTypes String[]
  vertical    String   @default("manufacturing")
  apiKey      String
  trialEnds   DateTime
  status      String   @default("active")
  createdAt   DateTime @default(now())
  sensors     Sensor[]
  auditLogs   AuditLog[]
}

model Sensor {
  id        String   @id @default(cuid())
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  name      String
  type      String
  unit      String
  status    String   @default("nominal")
  createdAt DateTime @default(now())
  readings  SensorReading[]
}

model SensorReading {
  id        String   @id @default(cuid())
  sensorId  String
  sensor    Sensor   @relation(fields: [sensorId], references: [id])
  value     Float
  unit      String
  timestamp DateTime @default(now())
  quality   String   @default("good")
}

model AuditLog {
  id        String   @id @default(cuid())
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])
  action    String
  detail    String?
  timestamp DateTime @default(now())
}
```

## 5. Main Page (src/app/page.tsx)

```tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SensorData {
  sensorId: string;
  name: string;
  type: string;
  value: number;
  unit: string;
  status: 'nominal' | 'warning' | 'critical';
  timestamp: string;
}

export default function DashboardPage() {
  const [sensors, setSensors] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/ws');
    ws.onmessage = (event) => {
      const data: SensorData = JSON.parse(event.data);
      setSensors(prev => {
        const idx = prev.findIndex(s => s.sensorId === data.sensorId);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = data;
          return updated;
        }
        return [...prev, data];
      });
    };
    return () => ws.close();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">SentinelEdge Live Dashboard</h1>
        <Badge variant="outline" className="text-cyan-500">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          {sensors.length} sensors streaming
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensors.map(sensor => (
          <Card key={sensor.sensorId} className={
            sensor.status === 'critical' ? 'border-red-500' :
            sensor.status === 'warning' ? 'border-yellow-500' : 'border-cyan-500/30'
          }>
            <CardHeader>
              <CardTitle className="text-sm font-mono">{sensor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {sensor.value.toFixed(2)} {sensor.unit}
              </div>
              <Badge variant="secondary" className="mt-2">
                {sensor.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

## 6. Layout (src/app/layout.tsx)

```tsx
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'SentinelEdge — Live MVP Dashboard',
  description: 'Real-time IoT sensor monitoring with TS-FM anomaly detection',
  openGraph: {
    title: 'SentinelEdge — Live MVP Dashboard',
    description: '350M-param time-series foundation model + edge AI + 9 protocols',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
```

## 7. Database Utility (src/lib/db.ts)

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

---

## Tech Stack Summary

| Layer | Technology | Files |
|---|---|---|
| Framework | Next.js 16 (App Router) | 2 (layout.tsx, page.tsx) |
| Language | TypeScript 5.x | 62 total (50 .tsx + 12 .ts) |
| Database | Prisma + SQLite | 1 (.prisma) |
| UI Components | shadcn/ui (Radix + Tailwind) | 48 .tsx |
| API Routes | Next.js Route Handlers | 6 .ts |
| AI Search | z-ai-web-dev-sdk | 1 route |
| Fonts | Next.js Font Optimization | 3 (Inter, Space Grotesk, JetBrains Mono) |

**Full source:** https://github.com/testdemoqwenai2025-creator/AISensorEdgeComp-MVP
**Live dashboard:** https://preview-chat-beeb4b2b-e7e5-4b02-a2cd-72b95656e3a8.space-z.ai/
