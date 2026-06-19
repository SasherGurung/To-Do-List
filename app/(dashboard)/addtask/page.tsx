"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useToDoStore from "@/lib/stores/todoStore";
import { toast } from "react-hot-toast";

function AddTaskPage() {
  const addTask = useToDoStore((state) => state.addTask);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState<"High" | "Medium" | "Low">(
    "High",
  );
  const [category, setCategory] = React.useState<
    "Work" | "Personal" | "Study" | "Health" | "Shopping" | "Finance"
  >("Personal");
  const [status, setStatus] = React.useState<
    "Completed" | "In Progress" | "Pending"
  >("Pending");

  const [date, setDate] = React.useState<Date>();

  const handleCreateTask = () => {
    if (
      !title.trim() ||
      !description.trim() ||
      !priority ||
      !category ||
      !status ||
      !date
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    addTask({
      title,
      description,
      priority,
      category,
      status,
      dueDate: date?.toISOString() || "",
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Work");
    setStatus("Pending");
    setDate(undefined);

    toast.success("Task created successfully!");
  };
  return (
    <section className="min-h-screen m-15">
      <h1 className="text-4xl font-bold text-center m-5">New Entry</h1>
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-2xl space-y-6 rounded-xl border p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-md font-medium">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-base"
              placeholder="Enter task title"
            />
          </div>

          <div className="space-y-2">
            <label className="text-md font-medium">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="h-32"
              placeholder="Enter task description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-md font-medium">Priority</label>
              <Select
                value={priority}
                onValueChange={(value) =>
                  setPriority(value as "High" | "Medium" | "Low")
                }
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>

                <SelectContent position="popper" side="bottom">
                  <SelectItem value="High">High</SelectItem>

                  <SelectItem value="Medium">Medium</SelectItem>

                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-md font-medium">Category</label>
              <Select
                value={category}
                onValueChange={(value) =>
                  setCategory(
                    value as
                      | "Personal"
                      | "Work"
                      | "Study"
                      | "Health"
                      | "Shopping"
                      | "Finance",
                  )
                }
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Personal">Personal</SelectItem>

                    <SelectItem value="Work">Work</SelectItem>

                    <SelectItem value="Study">Study</SelectItem>

                    <SelectItem value="Health">Health</SelectItem>

                    <SelectItem value="Shopping">Shopping</SelectItem>

                    <SelectItem value="Finance">Finance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select
                value={status}
                onValueChange={(value) =>
                  setStatus(value as "Pending" | "In Progress" | "Completed")
                }
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  <SelectGroup>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>

                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Due Date</label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal"
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button
            onClick={handleCreateTask}
            className="w-full cursor-pointer"
            size="lg"
          >
            Create Task
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AddTaskPage;
