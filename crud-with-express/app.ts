import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
// import AppRouter from "./app.router";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const elapsed = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${elapsed}ms`);
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // connect to the database
  // Initialize the router
  // AppRouter(app);
});
