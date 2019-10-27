const store = {
  tasks: [],
};

const getTasks = () => {
  return store.tasks;
};

const addTask = (title) => {
  const maxId = store.tasks.length;
  store.tasks = [
    ...store.tasks,
    { id: maxId + 1, title, completed: false },
  ];
  return store.tasks;
};

const toggleTask = (id) => {
  store.tasks.forEach(task => {
    if (task.id == id) {
      task.completed = !task.completed;
    }
  });
  return store.tasks;
};

const removeTask = (id) => {
  store.tasks = store.tasks.filter(task => task.id != id);
  return store.tasks;
};

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  removeTask,
};