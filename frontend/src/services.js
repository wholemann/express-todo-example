import { getTasks as apiGetTasks } from './apis/task';
import { addTask as apiAddTasks } from './apis/task';
import { removeTask as apiRemoveTasks } from './apis/task';
import { toggleTask as apiToggleTasks } from './apis/task';

const state = {
  tasks: [],
};

export const clearTasks = () => {
  state.tasks = [];
};

export const getTasks = () => {
  return state.tasks;
};

export const addTask = async (title) => {
  const { tasks } = await apiAddTasks(title);
  state.tasks = tasks;
  return state.tasks;
};

export const removeTask = async (taskId) => {
  const { tasks } = await apiRemoveTasks(taskId);
  state.tasks = tasks;
  return state.tasks;
};

export const toggleTask = async (taskId) => {
  const { tasks } = await apiToggleTasks(taskId);
  state.tasks = tasks;
  return state.tasks;
};

export const fetchTasks = async () => {
  const { tasks } = await apiGetTasks();
  state.tasks = tasks;
  return state.tasks;
};
