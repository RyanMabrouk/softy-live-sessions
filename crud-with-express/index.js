import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 3000;
const DATABASE_PATH = "./database/db.json";

const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
};

app.use(bodyParser.json());

const readDatabase = () => {
  const data = fs.readFileSync(DATABASE_PATH);
  return JSON.parse(data);
};

const writeDatabase = (data) => {
  fs.writeFileSync(DATABASE_PATH, JSON.stringify(data));
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/tasks", (req, res) => {
  const data = readDatabase();
  res.json(data);
});

app.get("/tasks/:id", (req, res) => {
  const tasks = readDatabase();
  const task_id = parseInt(req.params.id, 10);
  const task = tasks.find((task) => task.id === task_id);
  if (task) {
    res.json(task);
  } else {
    res.status(STATUS_CODES.NOT_FOUND).send("Task not found");
  }
});

app.post("/tasks", (req, res) => {
  const tasks = readDatabase();
  const new_task = { ...req.body, id: new Date().getTime() };
  writeDatabase([...tasks, new_task]);
  res.status(STATUS_CODES.CREATED).send("Task created");
});

app.patch("/tasks/:id", (req, res) => {
  const task_id = parseInt(req.params.id, 10);
  const tasks = readDatabase();
  const new_tasks = tasks.map((task) => {
    if (task.id === task_id) {
      return { ...task, ...req.body };
    }
    return task;
  });
  writeDatabase(new_tasks);
  res.status(STATUS_CODES.OK).send("Task updated");
});

app.delete("/tasks/:id", (req, res) => {
  const task_id = parseInt(req.params.id, 10);
  const tasks = readDatabase();
  const new_tasks = tasks.filter((task) => task.id !== task_id);
  writeDatabase(new_tasks);
  res.status(STATUS_CODES.OK).send("Task deleted");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
