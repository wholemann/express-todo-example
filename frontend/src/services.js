import { getTasks as apiGetTasks } from './apis/task';
import { addTask as apiAddTasks } from './apis/task';
import { removeTask as apiRemoveTasks } from './apis/task';
import { toggleTask as apiToggleTasks } from './apis/task';

export const addTask = async (title) => await apiAddTasks(title);

export const removeTask = async (taskId) => await apiRemoveTasks(taskId);

export const toggleTask = async (taskId) => await apiToggleTasks(taskId);

export const fetchTasks = async () => await apiGetTasks();
