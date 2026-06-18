import { create } from "zustand";
import { persist } from "zustand/middleware";

// Task Type
type Task = {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  category: "Work" | "Personal" | "Study" | "Health" | "Shopping" | "Finance";
  status: "Completed" | "In Progress" | "Pending";
  dueDate: string;
  createdAt: string;
  updatedAt: string;
};

// Store Type
type ToDoStore = {
  tasks: Task[];
  // Add Task
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
  // Update Task
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  // Update Status
  changeStatus: (id: string, status: Task["status"]) => void;
  // Delete Task
  deleteTask: (id: string) => void;
  // Clear Task
  clearTasks: () => void;
};

const store = (set: any, get: any): ToDoStore => ({
  tasks: [],
  // Add Task
  addTask: (task) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state: ToDoStore) => ({
      tasks: [...state.tasks, newTask],
    }));
  },
  // Update Task
  updateTask: (id, updatedTask) => {
    set((state: ToDoStore) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    }));
  },
  // Change Status
  changeStatus: (id, status) => {
    set((state: ToDoStore) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    }));
  },
  // Delete Task
  deleteTask: (id) => {
    set((state: ToDoStore) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  // Clear Task
  clearTasks: () => {
    set({
      tasks: [],
    });
  },
});

const useToDoStore = create<ToDoStore>()(
  persist(store, {
    name: "to-do-store",
  }),
);

export default useToDoStore;
