"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FaTasks } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { GrAnalytics } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";


const data = {
  navMain: [
    {
      title: "Tasks",
      url: "/",
      icon: <FaTasks />,
      isActive: true,
      items: [
        {
          title: "My Tasks",
          url: "/",
          icon: <CiViewList />,
        },
        {
          title: "Add Task",
          url: "/addtask",
          icon: <IoMdAddCircleOutline />,
        },
        {
          title: "Filters & Sorts",
          url: "/filter",
          icon: <IoFilter />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 py-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
            T
          </div>

          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="truncate text-sm font-semibold">
              To-Do Dashboard
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Manage your tasks
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
