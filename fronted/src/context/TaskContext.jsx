import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { taskApi } from '../services/taskApi';

// Create context
const TaskContext = createContext();

// Action types
const TASK_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  SET_FILTER: 'SET_FILTER',
};

// Initial state
const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filter: 'all', // 'all', 'completed', 'pending'
};

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case TASK_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case TASK_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case TASK_ACTIONS.SET_TASKS:
      return { ...state, tasks: action.payload, loading: false, error: null };
    case TASK_ACTIONS.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TASK_ACTIONS.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TASK_ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case TASK_ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Context provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Load tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    dispatch({ type: TASK_ACTIONS.SET_LOADING, payload: true });
    try {
      const tasks = await taskApi.getTasks();
      dispatch({ type: TASK_ACTIONS.SET_TASKS, payload: tasks });
    } catch (error) {
      dispatch({ type: TASK_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const createTask = async (taskData) => {
    try {
      const newTask = await taskApi.createTask(taskData);
      dispatch({ type: TASK_ACTIONS.ADD_TASK, payload: newTask });
      return newTask;
    } catch (error) {
      dispatch({ type: TASK_ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const updatedTask = await taskApi.updateTask(id, updates);
      dispatch({ type: TASK_ACTIONS.UPDATE_TASK, payload: updatedTask });
      return updatedTask;
    } catch (error) {
      dispatch({ type: TASK_ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskApi.deleteTask(id);
      dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: id });
    } catch (error) {
      dispatch({ type: TASK_ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const toggleTask = async (id) => {
    try {
      const updatedTask = await taskApi.toggleTask(id);
      dispatch({ type: TASK_ACTIONS.UPDATE_TASK, payload: updatedTask });
      return updatedTask;
    } catch (error) {
      dispatch({ type: TASK_ACTIONS.SET_ERROR, payload: error.message });
      throw error;
    }
  };

  const setFilter = (filter) => {
    dispatch({ type: TASK_ACTIONS.SET_FILTER, payload: filter });
  };

  const filteredTasks = state.tasks.filter(task => {
    switch (state.filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      default:
        return true;
    }
  });

  const value = {
    ...state,
    filteredTasks,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilter,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export default TaskContext;
