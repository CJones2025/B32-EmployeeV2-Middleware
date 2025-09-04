import express from "express";
import employeesRouter from "./routes/employees.router.js";
import { getAll } from "./db/employees.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.get("/employees/random", (req, res) => {
  const all = getAll();
  const randomIndex = Math.floor(Math.random() * all.length);
  res.send(all[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const all = getAll();
  const employee = all.find((e) => e.id === +id);
  if (!employee) {
    return res.status(404).send("Employee not found");
  }
  res.send(employee);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
