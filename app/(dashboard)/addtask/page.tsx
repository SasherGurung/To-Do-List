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

function AddTaskPage() {
  const [date, setDate] = React.useState<Date>();
  return (
    <section className="min-h-screen m-15">
      <h1 className="text-4xl font-bold text-center m-5">New Entry</h1>
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-2xl space-y-6 rounded-xl border p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-md font-medium">Title</label>
            <Input className="text-base" placeholder="Enter task title" />
          </div>

          <div className="space-y-2">
            <label className="text-md font-medium">Description</label>
            <Textarea className="h-32" placeholder="Enter task description" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-md font-medium">Priority</label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-md font-medium">Category</label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="work">Work</SelectItem>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom">
                  <SelectGroup>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
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
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button className="w-full cursor-pointer" size="lg">
            Create Task
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AddTaskPage;
