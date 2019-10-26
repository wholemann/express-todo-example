import { addTask, removeTask, toggleTask } from './services';

export const bindEvents = (state, methods) => {
  bindAddTask(state, methods);
  bindRemoveTask(state, methods);
  bindCheckbox(state, methods);
};

const bindAddTask = (_, { bind, getValue, update }) => {
  bind('button-add-task', 'click', async () => {
    const title = getValue('input-task-title');
    await addTask(title);
    update();
  });
};

const bindRemoveTask = (state, { bind, _, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`button-remove-task-${id}`, 'click', async () => {
      await removeTask(id);
      update();
    });
  });
};

const bindCheckbox = (state, { bind, _, update }) => {
  const { tasks } = state;

  tasks.forEach(task => {
    const { id } = task;
    bind(`checkbox-task-${id}`, 'click', async () => {
      await toggleTask(id);
      update();
    });
  });
};
