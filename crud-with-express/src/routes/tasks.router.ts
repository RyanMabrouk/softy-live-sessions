import { Router } from "express";
import {
  handleCreateTask,
  handleDeleteTask,
  handleGetTaskById,
  handleGetTasks,
  handleUpdateTask,
} from "../controllers/tasks.controller";

const router = Router();

router
  .get("/", handleGetTasks)
  .get("/:id", handleGetTaskById)
  .post("/", handleCreateTask)
  .put("/:id", handleUpdateTask)
  .delete("/:id", handleDeleteTask);

export default router;
