import { readDatabase, writeDatabase } from "../helpers/db.helpers";
import { paginateData, sortData } from "../helpers/query.helpers";

export type Task = {
  message: string;
  id: number;
  price: number;
};

export function getTasksFromDb({
  page = 1,
  limit = 10,
  sort,
  sort_by,
}: {
  page: number;
  limit: number;
  sort?: "asc" | "desc";
  sort_by?: keyof Omit<Task, "message">;
}) {
  let data = readDatabase();
  if (sort_by && sort) {
    data = sortData(data, sort, sort_by);
  }
  return paginateData(data, page, limit);
}

export function getTaskByIdFromDb(id: number) {
  const data = readDatabase();
  return data.find((task) => task.id === id);
}

export function createTaskFromDb(new_task: { message: string; price: number }) {
  const tasks = readDatabase();
  const task = { ...new_task, id: new Date().getTime() };
  writeDatabase([...tasks, task]);
}

export function updateTaskFromDb(
  id: number,
  updated_task: {
    message?: string;
    price?: number;
  }
) {
  const tasks = readDatabase();
  const new_tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, ...updated_task };
    }
    return task;
  });
  writeDatabase(new_tasks);
}

export function deleteTaskFromDb(id: number) {
  const tasks = readDatabase();
  const new_tasks = tasks.filter((task) => task.id !== id);
  writeDatabase(new_tasks);
}
