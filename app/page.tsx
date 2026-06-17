import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

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
import Link from "next/link";

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

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList className="text-md font-semibold">
                Welcome to To-Do Dashboard
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <section className="flex flex-1 flex-col gap-4 p-4 min-h-screen mx-10">
          <div className="flex justify-between items-center m-5">
            <h1 className="text-3xl font-bold">Task Overview</h1>
            <Button size="lg" className="p-5 text-base cursor-pointer">
              <Link href="/addtask">Add-Task</Link>
            </Button>
          </div>

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
                <TableHead className="text-center text-lg font-bold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody >
              {Tasks.map((task) => (
                <TableRow key={task.taskId} className="space-y-5 items-center">
                  <TableCell className="font-medium">{task.taskId}</TableCell>

                  <TableCell >{task.date}</TableCell>

                  <TableCell>{task.title}</TableCell>

                  <TableCell>
                    {task.description}
                  </TableCell>

                  <TableCell>{task.priority}</TableCell>

                  <TableCell>{task.category}</TableCell>

                  <TableCell>{task.status}</TableCell>

                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      Edit
                    </Button>

                    <Button
                      variant="destructive"
                      size="sm"
                      className="cursor-pointer"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>
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
      </SidebarInset>
    </SidebarProvider>
  );
}
