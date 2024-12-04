import { Router, Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../services/task.service";
import { Task } from "../model/task.model";

function handleGetTasks(req: Request, res: Response) {
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string);
  const sort = req.query.sort as "asc" | "desc";
  const sort_by = req.query.sort_by as keyof Omit<Task, "message">;

  const tasks = getTasks({ page, limit, sort, sort_by });
  res.json(tasks);
}

function handleGetTaskById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const task = getTaskById(id);
  res.json(task);
}

function handleCreateTask(req: Request, res: Response) {
  const new_task = req.body;
  createTask(new_task);
  res.json({ message: "Task created" });
}

function handleUpdateTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const updated_task = req.body;
  updateTask(id, updated_task);
  res.json({ message: "Task updated" });
}

function handleDeleteTask(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  deleteTask(id);
  res.json({ message: "Task deleted" });
}

export {
  handleGetTasks,
  handleGetTaskById,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
};
