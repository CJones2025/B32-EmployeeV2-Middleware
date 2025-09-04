import express from "express";
import { getAll, add } from "../db/employees.js";
const router = express.Router();

// GET all employees
router.get("/", (req, res) => {
  res.json(getAll());
});

// POST a new employee
router.post("/", (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ error: "Request body is required." });
  }
  const { name } = req.body;
  if (!name || typeof name !== "string" || !name.trim()) {
    return res
      .status(400)
      .json({ error: "Name is required and must be a non-empty string." });
  }
  const newEmployee = add(name);
  res.status(201).json(newEmployee);
});

export default router;


