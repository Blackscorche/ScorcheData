"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", instantDataAirtime: 15000, airtimeSwap: 5000, cableTV: 7000, electricity: 9000 },
  { month: "February", instantDataAirtime: 18000, airtimeSwap: 7000, cableTV: 9000, electricity: 11000 },
  { month: "March", instantDataAirtime: 22000, airtimeSwap: 8000, cableTV: 11000, electricity: 13000 },
  { month: "April", instantDataAirtime: 20000, airtimeSwap: 7500, cableTV: 10500, electricity: 12500 },
  { month: "May", instantDataAirtime: 26000, airtimeSwap: 9000, cableTV: 13000, electricity: 15000 },
  { month: "June", instantDataAirtime: 30000, airtimeSwap: 10000, cableTV: 15000, electricity: 18000 },
]

const chartConfig = {
  instantDataAirtime: { label: "Instant Data & Airtime", color: "#FF8800" }, // Orange
  airtimeSwap: { label: "Airtime Swap", color: "#FFC107" }, // Yellow
  cableTV: { label: "Cable TV Subscriptions", color: "#E63946" }, // Red
  electricity: { label: "Electricity Bills", color: "#B71C1C" }, // Dark Red
}

export function VtuSalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>VTU Sales Performance</CardTitle>
        <CardDescription>Revenue Breakdown (Jan - June 2024)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="instantDataAirtime" fill="#FF8800" radius={4} />
            <Bar dataKey="airtimeSwap" fill="#FFC107" radius={4} />
            <Bar dataKey="cableTV" fill="#E63946" radius={4} />
            <Bar dataKey="electricity" fill="#B71C1C" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 9.3% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total VTU sales for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
