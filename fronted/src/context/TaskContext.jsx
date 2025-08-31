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
  // TODO: Implement reducer logic for each action type
  // TODO: Handle SET_LOADING, SET_ERROR, SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK, SET_FILTER
  return state;
};

// Context provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Load tasks on component mount
  useEffect(() => {
    // TODO: Call loadTasks on component mount
  }, []);

  const loadTasks = async () => {
    // TODO: Set loading to true
    // TODO: Fetch tasks from API
    // TODO: Dispatch SET_TASKS action on success
    // TODO: Dispatch SET_ERROR action on failure
  };

  const createTask = async (taskData) => {
    // TODO: Call API to create task
    // TODO: Dispatch ADD_TASK action on success
    // TODO: Handle errors appropriately
  };

  const updateTask = async (id, updates) => {
    // TODO: Call API to update task
    // TODO: Dispatch UPDATE_TASK action on success
    // TODO: Handle errors appropriately
  };

  const deleteTask = async (id) => {
    // TODO: Call API to delete task
    // TODO: Dispatch DELETE_TASK action on success
    // TODO: Handle errors appropriately
  };

  const toggleTask = async (id) => {
    // TODO: Call API to toggle task completion
    // TODO: Dispatch UPDATE_TASK action on success
    // TODO: Handle errors appropriately
  };

  const setFilter = (filter) => {
    // TODO: Dispatch SET_FILTER action
  };

  const filteredTasks = []; // TODO: Filter tasks based on current filter

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
