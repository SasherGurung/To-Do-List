"use client";

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
import useToDoStore from "@/lib/stores/todoStore";
import { useRouter } from "next/navigation";
import { format, isToday, isTomorrow } from "date-fns";
import { toast } from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const tasks = useToDoStore((state) => state.tasks);
  const deleteTask = useToDoStore((state) => state.deleteTask);
  const [dialogTrigger, setDialogTrigger] = useState<Task | null>(null);

  const formatDueDate = (dateString: string) => {
    const date = new Date(dateString);

    if (isToday(date)) {
      return "Today";
    }
    if (isTomorrow(date)) {
      return "Tomorrow";
    }
    return format(date, "EEE, MMM dd");
  };

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
            <Button
              size="lg"
              className="p-5 text-base cursor-pointer"
              onClick={() => router.push("/addtask")}
            >
              Add-Task
            </Button>
          </div>

          <Table className="border-separate border-spacing-y-3">
            <TableHeader>
              <TableRow>
                <TableHead className="text-lg font-bold ">Created At</TableHead>
                <TableHead className="text-lg font-bold">Due Date</TableHead>
                <TableHead className="text-lg font-bold">Title</TableHead>
                <TableHead className="text-lg font-bold">Priority</TableHead>
                <TableHead className="text-lg font-bold">Category</TableHead>
                <TableHead className="text-lg font-bold">Status</TableHead>
                <TableHead className="text-center text-lg font-bold w-[100px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="items-center w-full">
                  <TableCell className="font-semibold">
                    {format(new Date(task.createdAt), "MMM dd Y")}
                  </TableCell>

                  <TableCell>{formatDueDate(task.dueDate)}</TableCell>

                  <TableCell>{task.title}</TableCell>

                  <TableCell>{task.priority}</TableCell>

                  <TableCell>{task.category}</TableCell>

                  <TableCell>{task.status}</TableCell>

                  <TableCell className="text-center space-x-2">
                    <Button
                      onClick={() => setDialogTrigger(task)}
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      Preview
                    </Button>
                    <Dialog
                      open={!!dialogTrigger}
                      onOpenChange={(open) => !open && setDialogTrigger(null)}
                    >
                      <DialogContent className="max-w-3xl rounded-2xl p-6">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-center">
                            Task Overview
                          </DialogTitle>
                        </DialogHeader>

                        <DialogDescription asChild>
                          <div className="space-y-6 mt-4">
                            {/* Title */}
                            <div className="space-y-1">
                              <p className="text-2xl font-bold text-muted-foreground">
                                Title
                              </p>
                              <h1 className="text-lg font-semibold text-foreground">
                                {task.title}
                              </h1>
                            </div>

                            {/* Main Content */}
                            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3">
                              {/* Description */}
                              <div className="rounded-xl bg-muted/40 p-4 space-y-2">
                                <h2 className="font-bold text-base">
                                  Description
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {task.description ||
                                    "No description provided"}
                                </p>
                              </div>

                              {/* Details */}
                              <div className="rounded-xl border p-4 space-y-3">
                                <div>
                                  <p className="text-base font-bold text-muted-foreground">
                                    Due Date
                                  </p>
                                  <p className="font-medium">{task.dueDate}</p>
                                </div>

                                <div>
                                  <p className="text-base font-bold text-muted-foreground">
                                    Category
                                  </p>
                                  <p className="font-medium">{task.category}</p>
                                </div>

                                <div>
                                  <p className="text-base font-bold text-muted-foreground">
                                    Priority
                                  </p>
                                  <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                                    {task.priority}
                                  </span>
                                </div>

                                <div>
                                  <p className="text-base font-bold text-muted-foreground">
                                    Status
                                  </p>
                                  <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                                    {task.status}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Metadata */}
                            <div className="flex justify-around rounded-xl bg-muted/40 p-4 text-sm">
                              <div>
                                <p className="text-md text-muted-foreground font-bold">
                                  Created At
                                </p>
                                <p className="font-medium">{format(new Date(task.createdAt), "MMM dd Y")}</p>
                              </div>

                              <div>
                                <p className="text-md text-muted-foreground font-bold">
                                  Updated At
                                </p>
                                <p className="font-medium">{format(new Date(task.updatedAt), "MMM dd Y")}</p>
                              </div>
                            </div>
                          </div>
                        </DialogDescription>

                        <DialogFooter className="mt-6">
                          <DialogClose asChild>
                            <Button variant="outline" className="rounded-lg p-4 cursor-pointer">
                              Back
                            </Button>
                          </DialogClose>

                          <Button variant="lime" className="rounded-lg p-4 cursor-pointer">Edit</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button variant="lime" size="sm" className="cursor-pointer">
                      Edit
                    </Button>

                    <Button
                      onClick={() => {
                        deleteTask(task.id);
                        toast.success("Task deleted successfully");
                      }}
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
