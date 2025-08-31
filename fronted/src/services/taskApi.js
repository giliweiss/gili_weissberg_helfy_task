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
    // TODO: Make GET request to /tasks endpoint
    // TODO: Return response data
    // TODO: Handle errors appropriately
  },

  // Create a new task
  createTask: async (taskData) => {
    // TODO: Make POST request to /tasks endpoint with taskData
    // TODO: Return created task data
    // TODO: Handle errors appropriately
  },

  // Update a task
  updateTask: async (id, updates) => {
    // TODO: Make PUT request to /tasks/:id endpoint with updates
    // TODO: Return updated task data
    // TODO: Handle errors appropriately
  },

  // Delete a task
  deleteTask: async (id) => {
    // TODO: Make DELETE request to /tasks/:id endpoint
    // TODO: Handle errors appropriately
  },

  // Toggle task completion
  toggleTask: async (id) => {
    // TODO: Make PATCH request to /tasks/:id/toggle endpoint
    // TODO: Return updated task data
    // TODO: Handle errors appropriately
  },
};

export default taskApi;
