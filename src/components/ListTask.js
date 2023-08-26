// ListTask.js (Component to list and filter tasks)
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions'; // Importing the toggleTask and editTask actions.
import Task from './Task'; // Importing the Task component.

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks); // Getting the tasks from the Redux store state.
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store.
  const [filter, setFilter] = useState('all');

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id)); // Dispatches the toggleTask action with the task id as the payload.
  };

  const handleEditTask = (id, newDescription) => {
    dispatch(editTask(id, newDescription)); // Dispatches the editTask action with the task id and the new description as the payload.
  };

  // Filter tasks based on the selected filter ('all', 'done', or 'notDone')
  const filteredTasks = filter === 'all' ? tasks : tasks.filter((task) => task.isDone === (filter === 'done'));

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          onToggleTask={handleToggleTask}
          onEditTask={handleEditTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
