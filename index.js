const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.json());

let students = [
  { id: 1, name: "Arjun" },
  { id: 2, name: "Prachi" },
  { id: 3, name: "Aradhy" }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  let newStudent = {
    id: students.length + 1,
    name: req.body.name
  };
  students.push(newStudent);
  res.json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/students`);
});
