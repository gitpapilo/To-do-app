// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasksReducer from './redux/reducers'; // Importing the tasksReducer.
import AddTask from './components/Addtask'; // Importing the AddTask component.
import ListTask from './components/ListTask'; // Importing the ListTask component.

const store = createStore(tasksReducer); // Creating the Redux store with the tasksReducer.

const App = () => {
  return (
    <Provider store={store}> {/* Providing the Redux store to the entire application */}
      <div>
        <h1>ToDo List App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;