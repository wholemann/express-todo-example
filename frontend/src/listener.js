import { addTask, removeTask, toggleTask } from './taskService';

export const bindEvents = (state, methods) => {
  bindAddTask(state, methods);
  bindRemoveTask(state, methods);
  bindCheckbox(state, methods);
};

const bindAddTask = (_, { bind, getValue, update }) => {
  bind('button-add-task', 'click', async () => {
    const title = getValue('input-task-title');
    const newState = await addTask(title);
    update(newState);
  });
};

const bindRemoveTask = (state, { bind, _, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`button-remove-task-${id}`, 'click', async () => {
      const newState = await removeTask(id);
      update(newState);
    });
  });
};

const bindCheckbox = (state, { bind, _, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`checkbox-task-${id}`, 'click', async () => {
      const newState = await toggleTask(id);
      update(newState);
    });
  });
};
