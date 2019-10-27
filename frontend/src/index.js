import { render } from './view';
import { bindEvents } from './listener';
import { getTasks, fetchTasks } from './services';

const bind = (id, eventType, callback) => {
  const el = document.getElementById(id);
  el.addEventListener(eventType, callback);
};

const getValue = id => {
  const el = document.getElementById(id);
  return el.value;
};

const update = (state) => {
  const el = document.getElementById('app');
  el.innerHTML = render(state);

  bindEvents(state, { bind, getValue, update });
}

(async () => {
  const state = await fetchTasks();
  update(state);
})();
