import express from 'express';

const router = express.Router();

// In-memory storage for tasks (moved from data layer)
let tasks = [];
let nextId = 1;

// Data access functions (moved from data layer)
const getTasks = () => {
  // TODO: Return all tasks
};

const getTaskById = (id) => {
  // TODO: Find and return task by id
};

const createTask = (taskData) => {
  // TODO: Create new task with auto-generated id and timestamp
  // TODO: Add to tasks array and return created task
};

const updateTask = (id, updates) => {
  // TODO: Find task by id and update with provided data
  // TODO: Return updated task or null if not found
};

const deleteTask = (id) => {
  // TODO: Remove task from array by id
  // TODO: Return true if deleted, false if not found
};

const toggleTaskCompletion = (id) => {
  // TODO: Toggle the completed status of task
  // TODO: Return updated task or null if not found
};

// Route handlers (moved from controllers)

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  // TODO: Get all tasks and return as JSON
  // TODO: Handle errors with appropriate status codes
});

// POST /api/tasks - Create a new task
router.post('/', (req, res) => {
  // TODO: Extract title, description, priority from request body
  // TODO: Validate required fields (title, description)
  // TODO: Validate priority is one of: 'low', 'medium', 'high'
  // TODO: Create new task and return with 201 status
  // TODO: Handle validation errors with 400 status
  // TODO: Handle server errors with 500 status
});

// PUT /api/tasks/:id - Update a task
router.put('/:id', (req, res) => {
  // TODO: Extract id from params and updates from body
  // TODO: Check if task exists, return 404 if not found
  // TODO: Validate priority if provided
  // TODO: Update task and return updated task
  // TODO: Handle errors appropriately
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', (req, res) => {
  // TODO: Extract id from params
  // TODO: Delete task, return 404 if not found
  // TODO: Return success message with 200 status
  // TODO: Handle errors with 500 status
});

// PATCH /api/tasks/:id/toggle - Toggle task completion status
router.patch('/:id/toggle', (req, res) => {
  // TODO: Extract id from params
  // TODO: Toggle task completion status
  // TODO: Return updated task or 404 if not found
  // TODO: Handle errors with 500 status
});

export default router;
