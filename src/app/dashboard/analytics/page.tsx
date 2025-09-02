"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarIcon, Users, HandCoins, Eye } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Sector } from "recharts"
import { useState } from "react"
import { addDays, format } from "date-fns"
import type { DateRange } from "react-day-picker"

const chartDataViews = [
  { date: "2024-07-01", desktop: 250, mobile: 150 },
  { date: "2024-07-02", desktop: 300, mobile: 200 },
  { date: "2024-07-03", desktop: 200, mobile: 120 },
  { date: "2024-07-04", desktop: 450, mobile: 300 },
  { date: "2024-07-05", desktop: 350, mobile: 250 },
  { date: "2024-07-06", desktop: 500, mobile: 320 },
  { date: "2024-07-07", desktop: 400, mobile: 280 },
]

const chartConfigViews = {
  desktop: { label: "Desktop", color: "hsl(var(--primary))" },
  mobile: { label: "Mobile", color: "hsl(var(--secondary))" },
}

const leadSourceData = [
    { source: 'Organic Search', leads: 40, fill: 'hsl(var(--chart-1))' },
    { source: 'Direct', leads: 30, fill: 'hsl(var(--chart-2))' },
    { source: 'Referral', leads: 20, fill: 'hsl(var(--chart-3))' },
    { source: 'Social Media', leads: 10, fill: 'hsl(var(--chart-4))' },
  ]
  

export default function AnalyticsPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 6, 1),
    to: addDays(new Date(2024, 6, 1), 6),
  })

  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            In-depth metrics and insights for your listings.
          </p>
        </div>
        <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-[280px] justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250,345</div>
            <p className="text-xs text-muted-foreground">+12% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,432</div>
            <p className="text-xs text-muted-foreground">+8.2% from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <HandCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.11%</div>
            <p className="text-xs text-muted-foreground">-0.5% from last period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Page Views Over Time</CardTitle>
            <CardDescription>Desktop vs. Mobile views for the selected period.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfigViews} className="h-[300px] w-full">
              <LineChart
                accessibilityLayer
                data={chartDataViews}
                margin={{ left: 12, right: 12, top: 5, bottom: 5 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { day: 'numeric', month: 'short'})}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  dataKey="desktop"
                  type="monotone"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mobile"
                  type="monotone"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Breakdown of where your leads are coming from.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-[300px] w-full">
                    <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={leadSourceData} dataKey="leads" nameKey="source" innerRadius={60} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
