import fs from "fs";
import { Task } from "../model/task.model";

const DATABASE_PATH = "./database/db.json";

export const readDatabase = (): Task[] => {
  const data = fs.readFileSync(DATABASE_PATH);
  return JSON.parse(JSON.stringify(data));
};

export const writeDatabase = (data: Task[]) => {
  fs.writeFileSync(DATABASE_PATH, JSON.stringify(data));
};
