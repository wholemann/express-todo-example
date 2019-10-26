import axios from 'axios';

const TASKS_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  const { data } = await axios.get(TASKS_URL);
  return data;
};

export const addTask = async (title) => {
  const { data } = await axios.post(TASKS_URL, { title });
  return data;
};

export const removeTask = async (id) => {
  const { data } = await axios.delete(TASKS_URL + `/${id}`);
  return data;
};

export const toggleTask = async (id) => {
  const { data } = await axios.patch(TASKS_URL + `/${id}`);
  return data;
}