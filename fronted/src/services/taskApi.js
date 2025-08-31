import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Task API functions
export const taskApi = {
  // Get all tasks
  getTasks: async () => {
    try {
      const response = await api.get('/tasks');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch tasks');
    }
  },

  // Create a new task
  createTask: async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create task');
    }
  },

  // Update a task
  updateTask: async (id, updates) => {
    try {
      const response = await api.put(`/tasks/${id}`, updates);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  },

  // Delete a task
  deleteTask: async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
    } catch (error) {
      throw new Error('Failed to delete task');
    }
  },

  // Toggle task completion
  toggleTask: async (id) => {
    try {
      const response = await api.patch(`/tasks/${id}/toggle`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to toggle task');
    }
  },
};

export default taskApi;
