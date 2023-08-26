// AddTask.js (Component to add new tasks)
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; // Importing the addTask action.

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState(''); // State to manage the input field.
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store.

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription)); // Dispatches the addTask action with the task description as the payload.
      setTaskDescription(''); // Clears the input field after adding the task.
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;
