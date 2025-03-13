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
  { month: "January", newUsers: 120, returningUsers: 80 },
  { month: "February", newUsers: 200, returningUsers: 150 },
  { month: "March", newUsers: 170, returningUsers: 130 },
  { month: "April", newUsers: 90, returningUsers: 100 },
  { month: "May", newUsers: 250, returningUsers: 160 },
  { month: "June", newUsers: 300, returningUsers: 180 },
]

const chartConfig = {
  newUsers: {
    label: "New Users",
    color: "hsl(0, 80%, 50%)", // Red
  },
  returningUsers: {
    label: "Returning Users",
    color: "hsl(30, 90%, 50%)", // Orange
  },
}

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>New vs. Returning Users (Jan - June 2024)</CardDescription>
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
            <Bar dataKey="newUsers" fill="hsl(0, 80%, 50%)" radius={4} /> {/* Red */}
            <Bar dataKey="returningUsers" fill="hsl(30, 90%, 50%)" radius={4} /> {/* Orange */}
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Growing by 8.5% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Tracking user growth over the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
