import { create } from "zustand";
import { persist } from "zustand/middleware";

// Task Type
type Task = {
    id: string,
    title: string,
    description: string,
    priority: "High" | "Medium" | "Low",
    category: "Work" | "Personal" | "Study" | "Health" | "Shopping" | "Finance",
    status: "Completed" | "In Progress" | "Pending",
    dueDate: string,
    createdAt: string,
    updatedAt: string,
}

// Store Type
type ToDoStore ={
    task: [],
    // Add Task
    addTask: (
        task: Omit<Task, "id" | "createdAt" | "updatedAt">
    ) => void,
    // Update Task
    updateTask: (
        id: number,
        updatedTask: Partial<Task>
    ) => void,
    // Update Status
    updateStatus: (
        id: number,
        status: Task["status"]
    ) => void,
    // Delete Task
    deleteTask: (
        id: number
    ) => void,
    // Clear Task
    clearTask: () => void,
}



const store = (): Task => ({

});

const useToDoStore = create<ToDoStore>() (
    persist(store, {
        name: "to-do-store",
    })
);

export default useToDoStore;