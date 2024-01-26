import express, { Router } from "express";

import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone);
route.delete("/todos/:id", deleteTodo);

// update feature api
route.put("/todos/:id", updateTodo);

export default route;
