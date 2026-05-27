"use client"

import { Area, AreaChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", balance: 1200 },
  { month: "Feb", balance: 1450 },
  { month: "Mar", balance: 1380 },
  { month: "Apr", balance: 1700 },
  { month: "May", balance: 1550 },
  { month: "Jun", balance: 1900 },
  { month: "Jul", balance: 2100 },
]

const chartConfig = {
  balance: {
    label: "Solde",
    color: "#8b5cf6",
  },
} satisfies ChartConfig

export function ChartAreaLinear() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[90px] w-[170px]"
    >
      <AreaChart
        data={chartData}
        margin={{
          top: 8,
          right: 4,
          left: 4,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillBalance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
          </linearGradient>
        </defs>

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />

        <Area
          dataKey="balance"
          type="linear"
          fill="url(#fillBalance)"
          stroke="#8b5cf6"
          strokeWidth={3}
          dot={{
            r: 3,
            fill: "#8b5cf6",
            stroke: "#8b5cf6",
          }}
          activeDot={{
            r: 4,
            fill: "#8b5cf6",
            stroke: "#ffffff",
            strokeWidth: 2,
          }}
        />
      </AreaChart>
    </ChartContainer>
  )
}