import {
  createTaskFromDb,
  deleteTaskFromDb,
  getTaskByIdFromDb,
  getTasksFromDb,
  Task,
  updateTaskFromDb,
} from "../model/task.model";

export function getTasks({
  page,
  limit,
  sort,
  sort_by,
}: {
  page: number;
  limit: number;
  sort?: "asc" | "desc";
  sort_by?: keyof Omit<Task, "message">;
}) {
  return getTasksFromDb({ page, limit, sort, sort_by });
}

export function getTaskById(id: number) {
  return getTaskByIdFromDb(id);
}

export function createTask(task: Task) {
  return createTaskFromDb(task);
}

export function updateTask(id: number, task: Task) {
  return updateTaskFromDb(id, task);
}

export function deleteTask(id: number) {
  return deleteTaskFromDb(id);
}
