// reducers.js (Redux reducer to handle the state)
const initialState = {
  tasks: [], 
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload], 
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ), 
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.newDescription } : task
        ), 
      };
    default:
      return state;
  }
};

export default tasksReducer;
