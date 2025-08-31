import express from 'express';
import { validateTask, validateTaskId } from '../middleware/validate.js';

const router = express.Router();

// in memory storage
let tasks = [];
let nextId = 1;

//----------------------------------------------------------------
// Data access functions

const createTask = ({title, description, priority}) => {
  return {
   id: nextId++,
   title: title,
   description: description,
   completed: false,
   createdAt: new Date(),
   priority: priority
   }
   
 };

const getTasks = () => tasks;

const getTaskById = (id) => {
  return tasks.find(t => t.id === id) ?? null;
};


const updateTask = (id, updates) => {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return null;

  tasks[idx] = {...tasks[idx], ...updates};
  return tasks[idx];
};

const deleteTask = (id) => {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
};

const toggleTaskCompletion = (id) => {
  const task = getTaskById(id);
  if (!task) return null;
  task.completed = !task.completed;
  return task;
};


//--------------------------------------------------------------
// Route handlers

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  try {
    const all = getTasks();
    res.json(all);
  } catch (err) {
    console.error("GET /api/tasks error:", err);
    res.status(500).json({ error: "Internal server error" });
  }

});


// POST /api/tasks - Create a new task
router.post('/', validateTask,(req, res) => {
  try{
  // Extract title, description, priority from request body
  const {title, description, priority} = req.body;

  //Create new task
  const newTask = createTask({title, description, priority});
  tasks.push(newTask);

  res.status(201).json(newTask);

  // Handle server errors 
  }catch (err) {
    console.error("POST /api/tasks error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// PUT /api/tasks/:id - Update a task
router.put('/:id', validateTaskId, validateTask, (req, res) => {
  try {
    // Extract id from params and updates from body
    const id = Number(req.params.id);
    const updated = updateTask(id, req.body);
    if (!updated) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updated);
    // Handle errors appropriately
  } catch (err) {
    console.error(`PUT /api/tasks/${req.params.id} error:`, err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', validateTaskId, (req, res) => {
  try {
    const id = Number(req.params.id);
    const ok = deleteTask(id);
    if (!ok) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(`DELETE /api/tasks/${req.params.id} error:`, err);
    res.status(500).json({ error: "Internal server error" });
  }

});

// PATCH /api/tasks/:id/toggle - Toggle task completion status
router.patch('/:id/toggle', validateTaskId, (req, res) => {
  try {
    const id = Number(req.params.id);
    const updated = toggleTaskCompletion(id);
    if (!updated) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error(`PATCH /api/tasks/${req.params.id}/toggle error:`, err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
