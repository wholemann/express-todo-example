const express = require('express');
const cors = require('cors');

const {
  getTasks,
  addTask,
  removeTask,
  toggleTask,
} = require('./taskService');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/tasks', (req, res) => {
  const tasks = getTasks();
  res.send({ tasks });
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const tasks = addTask(title);
  res.send({ tasks });
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const tasks = toggleTask(id);
  res.send({ tasks });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const tasks = removeTask(id);
  res.send({ tasks });
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});