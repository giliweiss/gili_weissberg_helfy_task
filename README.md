# Task Manager App

A full-stack Task Manager application built with React frontend and Express.js backend, featuring CRUD operations, task filtering, priority management, and an endless carousel display.

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

### Task Model
```javascript
{
  id: number,
  title: string,
  description: string,
  completed: boolean,
  createdAt: Date,
  priority: 'low' | 'medium' | 'high'
}
```

### Request Examples

#### Create Task
```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the task manager application",
  "priority": "high"
}
```

#### Update Task
```bash
PUT /api/tasks/1
Content-Type: application/json

{
  "title": "Updated task title",
  "completed": true
}
```

## Features

### Core Functionality
- ✅ **CRUD Operations**: Create, read, update, and delete tasks
- ✅ **Task Status**: Toggle task completion status
- ✅ **Priority Levels**: Set task priority (Low, Medium, High) with color coding
- ✅ **Filtering**: Filter tasks by completion status (All, Completed, Pending)
- ✅ **Form Validation**: Client-side validation for task creation/editing
- ✅ **Responsive Design**: Mobile-friendly interface

### UI/UX Features
- 🎨 **Modern Design**: Clean, gradient-based UI with smooth animations
- 🎠 **Task Display**: Grid-based layout with card design
- 🎯 **Priority Indicators**: Color-coded badges (Red=High, Orange=Medium, Green=Low)
- ⚡ **Smooth Transitions**: Hover effects and animations
- 📱 **Mobile Responsive**: Optimized for all screen sizes

### Technical Features
- 🔄 **Real-time Updates**: Instant updates across the application
- 🛡️ **Error Handling**: Comprehensive error handling and user feedback
- 🎯 **Loading States**: Visual feedback during operations
- 🔍 **Input Validation**: Both frontend and backend validation

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **ESLint** - Code linting
- **In-memory storage** - Array-based data storage

### Frontend
- **React 19** - Frontend framework with modern hooks
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS Modules** - Scoped component styling
- **Vite** - Build tool and development server
- **ESLint** - Code linting

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

### Backend Development (~90 minutes)
- **Project Setup**: 15 minutes
- **API Endpoints**: 30 minutes
- **Middleware Implementation**: 20 minutes
- **Error Handling & Validation**: 15 minutes
- **Testing & Debugging**: 10 minutes

### Frontend Development (~120 minutes)
- **Project Setup & Routing**: 20 minutes
- **Component Architecture**: 30 minutes
- **State Management (Context)**: 25 minutes
- **API Integration**: 20 minutes
- **Form Handling**: 15 minutes
- **Testing & Bug Fixes**: 10 minutes

### Styling & Polish (~30 minutes)
- **CSS Design System**: 15 minutes
- **Responsive Design**: 10 minutes
- **Animations & Transitions**: 5 minutes

### Total Time: ~4 hours

## Scripts

### Backend Commands
```bash
npm start          # Start server with linting
npm run lint       # Run ESLint only
```

### Frontend Commands
```bash
npm start          # Start development server with linting
npm run dev        # Alternative start command
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint only
```

## Development Notes

### Known Limitations
1. **Data Persistence**: Data is stored in memory and lost on server restart
2. **Single Instance**: No support for multiple server instances
3. **No Authentication**: No user management or security features
4. **Basic Validation**: Minimal input validation implementation

### Future Enhancements
1. **Database Integration**: Add PostgreSQL or MongoDB
2. **User Authentication**: Implement user accounts and sessions
3. **Real-time Updates**: Add WebSocket support
4. **Search Functionality**: Add task search capabilities
5. **Drag & Drop**: Implement task reordering

## License

This project is licensed under the ISC License.