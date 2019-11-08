import { getTasks as apiGetTasks } from './apis/task';
import { addTask as apiAddTasks } from './apis/task';
import { removeTask as apiRemoveTasks } from './apis/task';
import { toggleTask as apiToggleTasks } from './apis/task';

export const addTask = async (title) => {
  try {
    return await apiAddTasks(title);
  } catch (e) {
    console.error(e);
  }
};

export const removeTask = async (taskId) => {
  try {
    return await apiRemoveTasks(taskId);
  } catch (e) {
    console.error(e);
  }
};

export const toggleTask = async (taskId) => {
  try {
    return await apiToggleTasks(taskId);
  } catch (e) {
    console.error(e);
  }
};

export const fetchTasks = async () => {
  try {
    return await apiGetTasks();
  } catch (e) {
    console.error(e);
  }
};
