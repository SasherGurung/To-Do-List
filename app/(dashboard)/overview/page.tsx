"use client";

import * as React from "react";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const taskStatusData = [
  {
    status: "Completed",
    tasks: 12,
    fill: "var(--chart-1)",
  },
  {
    status: "In Progress",
    tasks: 5,
    fill: "var(--chart-2)",
  },
  {
    status: "Pending",
    tasks: 3,
    fill: "var(--chart-3)",
  },
];

const taskStatusConfig = {
  tasks: {
    label: "Tasks",
  },
  Completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  "In Progress": {
    label: "In Progress",
    color: "var(--chart-2)",
  },
  Pending: {
    label: "Pending",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const taskPriorityData = [
  {
    priority: "High",
    tasks: 8,
    fill: "var(--chart-1)",
  },
  {
    priority: "Medium",
    tasks: 7,
    fill: "var(--chart-2)",
  },
  {
    priority: "Low",
    tasks: 5,
    fill: "var(--chart-3)",
  },
];

const taskPriorityConfig = {
  tasks: {
    label: "Tasks",
  },
  High: {
    label: "High",
    color: "var(--chart-1)",
  },
  Medium: {
    label: "Medium",
    color: "var(--chart-2)",
  },
  Low: {
    label: "Low",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const taskActivityData = [
  { day: "Sunday", created: 8, completed: 5 },
  { day: "Monday", created: 12, completed: 9 },
  { day: "Tuesday", created: 10, completed: 7 },
  { day: "Wednesday", created: 15, completed: 11 },
  { day: "Thursday", created: 7, completed: 6 },
  { day: "Friday", created: 13, completed: 10 },
  { day: "Saturday", created: 5, completed: 4 },
];

const taskActivityConfig = {
  created: {
    label: "Tasks Created",
    color: "var(--chart-1)",
  },
  completed: {
    label: "Tasks Completed",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

function OverviewPage() {
  return (
    <section className="min-h-screen m-15">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-xl text-muted-foreground">Total Tasks</p>
          <h2 className="mt-2 text-3xl font-bold">20</h2>
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-xl text-muted-foreground">Completed Tasks</p>
          <h2 className="mt-2 text-3xl font-bold">10</h2>
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-xl text-muted-foreground">In Progress</p>
          <h2 className="mt-2 text-3xl font-bold">5</h2>
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <p className="text-xl text-muted-foreground">Pending Tasks</p>
          <h2 className="mt-2 text-3xl font-bold">5</h2>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-xl">
            Weekly Task Activity
          </CardTitle>
          <CardDescription className="text-base">
            Tasks created and completed this week
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ChartContainer
            config={taskActivityConfig}
            className="h-[250px] w-full"
          >
            <BarChart accessibilityLayer data={taskActivityData}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip content={<ChartTooltipContent />} />

              <ChartLegend content={<ChartLegendContent />} />

              <Bar
                dataKey="created"
                fill="var(--color-created)"
                radius={[4, 4, 0, 0]}
              />

              <Bar
                dataKey="completed"
                fill="var(--color-completed)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="text-base text-muted-foreground flex justify-center">
          Showing productivity from Sunday to Saturday
        </CardFooter>
      </Card>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-bold text-xl">
                Task Status Overview
              </CardTitle>
              <CardDescription className="text-base">
                Distribution of tasks by status
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ChartContainer
                config={taskStatusConfig}
                className="mx-auto aspect-square max-h-[300px]"
              >
                <PieChart>
                  <Pie data={taskStatusData} dataKey="tasks" nameKey="status" />

                  <ChartLegend
                    content={<ChartLegendContent nameKey="status" />}
                    className="-translate-y-2 flex-wrap gap-2 *:basis-1/3 *:justify-center"
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-bold text-xl">
                Task Priority Overview
              </CardTitle>
              <CardDescription className="text-base">
                Distribution of tasks by priority
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ChartContainer
                config={taskPriorityConfig}
                className="mx-auto aspect-square max-h-[300px]"
              >
                <PieChart>
                  <Pie
                    data={taskPriorityData}
                    dataKey="tasks"
                    nameKey="priority"
                  />

                  <ChartLegend
                    content={<ChartLegendContent nameKey="priority" />}
                    className="-translate-y-2 flex-wrap gap-2 *:basis-1/3 *:justify-center"
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default OverviewPage;
