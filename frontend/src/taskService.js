import { getTasks as apiGetTasks } from './apis/task';
import { addTask as apiAddTasks } from './apis/task';
import { removeTask as apiRemoveTasks } from './apis/task';
import { toggleTask as apiToggleTasks } from './apis/task';

export const addTask = async (title) => {
  try {
    await apiAddTasks(title);
  } catch (e) {
    console.error(e);
  }
};

export const removeTask = async (taskId) => {
  try {
    await apiRemoveTasks(taskId);
  } catch (e) {
    console.error(e);
  }
};

export const toggleTask = async (taskId) => {
  try {
    await apiToggleTasks(taskId);
  } catch (e) {
    console.error(e);
  }
};

export const fetchTasks = async () => {
  try {
    await apiGetTasks();
  } catch (e) {
    console.error(e);
  }
};
