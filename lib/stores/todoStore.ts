import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Task = {
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

type ToDoStore = {
  tasks: Task[];

  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;

  deleteTask: (id: string) => void;

  updateTask: (id: string, updatedTask: Partial<Task>) => void;

  changeStatus: (id: string, status: Task["status"]) => void;

  clearTasks: () => void;
};

const store = (set: any, get: any): ToDoStore => ({
  tasks: [],

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

  deleteTask: (id) => {
    set((state: ToDoStore) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

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
