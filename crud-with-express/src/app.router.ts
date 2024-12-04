import { Express } from "express";
import tasksRouter from "./routes/tasks.router";
export default function AppRouter(app: Express) {
  app.use("/tasks", tasksRouter);
}
