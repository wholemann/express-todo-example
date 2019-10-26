const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const store = {
  tasks: [],
};

app.get('/tasks', (req, res) => {
  const { tasks } = store;
  res.send({ tasks });
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const maxId = store.tasks.length;
  store.tasks = [
    ...store.tasks,
    { id: maxId + 1, title, completed: false },
  ];
  const { tasks } = store;
  res.send({ tasks });
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  store.tasks.forEach(task => {
    if (task.id == id) {
      task.completed = !task.completed;
    }
  });
  const { tasks } = store;
  res.send({ tasks });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  store.tasks = store.tasks.filter(task => task.id != id);
  const { tasks } = store;
  res.send({ tasks });
});

app.listen(3000, () => {
  console.log(`Listening on port ${port}...`);
});