# Task Manager App

A fustack Task Manager application built with React frontend and Express.js backend, featuring CRUD operations, task filtering, priority management, and an endless carousel display.

## Project Structure

```
gili_weissberg_helfy_task/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── middleware/
│       ├── errorHandler.js
│       ├── logger.js
│       └── validate.js
├── fronted/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskFilter/
│   │   │   ├── TaskForm/
│   │   │   ├── TaskItem/
│   │   │   └── TaskList/
│   │   ├── context/
│   │   │   └── TaskContext.jsx
│   │   ├── pages/
│   │   │   └── HomePage/
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   ├── styles/
│   │   │   ├── App.module.css
│   │   │   └── global.css
│   │   ├── App.jsx
│   │   └── index.jsx
├── .gitignore
└── README.md
```

## Setup and Installation Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on **port 4000** and display: "Server is running on port 4000"

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd fronted
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on **port 3000** and automatically open in your browser.

## How to Run Both Frontend and Backend

### Option 1: Using Two Terminal Windows
1. **Terminal 1 (Backend):**
   ```bash
   cd backend
   npm start
   ```

2. **Terminal 2 (Frontend):**
   ```bash
   cd fronted
   npm start
   ```

### Option 2: Using Background Processes (Windows)
```bash
# Start backend in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm start"

# Start frontend
cd fronted
npm start
```

## API Documentation

### Base URL
```
http://localhost:4000/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/tasks` | Get all tasks | None |
| POST | `/tasks` | Create a new task | `{title, description, priority}` |
| PUT | `/tasks/:id` | Update a task | `{title?, description?, priority?, completed?}` |
| DELETE | `/tasks/:id` | Delete a task | None |
| PATCH | `/tasks/:id/toggle` | Toggle task completion | None |
| GET | `/health` | Health check | None |


## Design Decisions and Assumptions

### Architecture Decisions
1. **In-Memory Storage**: Used arrays instead of database for simplicity and quick setup
2. **Modular Components**: Separated components by functionality for maintainability
3. **Context API**: Used React Context for global state management instead of Redux
4. **CSS Modules**: Chosen for scoped styling without CSS-in-JS complexity
5. **RESTful API**: Implemented standard REST conventions for predictable endpoints

### UI/UX Decisions
1. **Grid Layout**: Replaced endless carousel with responsive grid for better usability
2. **Priority Color Coding**: Visual indicators for task priority levels
3. **Confirmation Modals**: Added delete confirmation for better UX
4. **Inline Editing**: Tasks can be edited directly in the list view
5. **Form Validation**: Real-time validation feedback for better user experience

### Technical Assumptions
1. **Single User**: Application designed for single-user usage
2. **Browser Support**: Modern browsers with ES6+ support
3. **Network**: Assumes reliable localhost connection
4. **Data Persistence**: Data is lost on server restart (in-memory storage)
5. **Security**: Basic validation only, no authentication implemented

## Time Spent on Each Part

### Backend Development (120 minutes)
### Frontend Development (90 minutes)
### Styling & Polish (30 minutes)


### Total Time: 4 hours

