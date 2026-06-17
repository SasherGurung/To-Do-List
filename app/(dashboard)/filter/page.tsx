"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

const Tasks = [
  {
    taskId: "TASK001",
    date: "2026-06-17",
    title: "Complete Todo UI",
    description: "Build the dashboard table using Shadcn components",
    priority: "High",
    category: "Work",
    status: "In Progress",
  },
  {
    taskId: "TASK002",
    date: "2026-06-18",
    title: "Learn Zustand",
    description: "Create Zustand store for managing tasks",
    priority: "Medium",
    category: "Study",
    status: "Pending",
  },
  {
    taskId: "TASK003",
    date: "2026-06-19",
    title: "Gym Workout",
    description: "Complete chest and shoulder workout",
    priority: "Low",
    category: "Personal",
    status: "Completed",
  },
  {
    taskId: "TASK004",
    date: "2026-06-20",
    title: "Build Authentication",
    description: "Implement login and protected routes",
    priority: "High",
    category: "Work",
    status: "Pending",
  },
  {
    taskId: "TASK005",
    date: "2026-06-21",
    title: "Read Documentation",
    description: "Study Next.js and React documentation",
    priority: "Medium",
    category: "Study",
    status: "In Progress",
  },
];

function FilterPage() {
  return (
    <section className="min-h-screen p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Filters & Sorts</h1>

      <div className="mb-8 rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-5">
          <h2 className="text-xl font-bold">Filter Tasks</h2>
          <p className="text-sm text-muted-foreground">
            Narrow down tasks by priority, category, and status
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Priority</label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>

              <SelectContent position="popper">
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="study">Study</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end gap-3">
            <Button className="flex-1">Apply</Button>
            <Button variant="outline" className="flex-1">
              Reset
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <Table className="border-separate border-spacing-y-3">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-lg font-bold">
                Task Id
              </TableHead>
              <TableHead className="text-lg font-bold">Date</TableHead>
              <TableHead className="text-lg font-bold">Title</TableHead>
              <TableHead className="text-lg font-bold">Description</TableHead>
              <TableHead className="text-lg font-bold">Priority</TableHead>
              <TableHead className="text-lg font-bold">Category</TableHead>
              <TableHead className="text-lg font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Tasks.map((task) => (
              <TableRow key={task.taskId} className="space-y-5 items-center">
                <TableCell className="font-medium">{task.taskId}</TableCell>

                <TableCell>{task.date}</TableCell>

                <TableCell>{task.title}</TableCell>

                <TableCell>{task.description}</TableCell>

                <TableCell>{task.priority}</TableCell>

                <TableCell>{task.category}</TableCell>

                <TableCell>{task.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export default FilterPage;
