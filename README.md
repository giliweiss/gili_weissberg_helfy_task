# Task Manager App

A simple Task Manager application built with React frontend and Express.js backend.

## Features

- **CRUD Operations**: Create, read, update, and delete tasks
- **Task Status**: Toggle task completion status
- **Priority Levels**: Set task priority (Low, Medium, High)
- **Filtering**: Filter tasks by completion status (All, Completed, Pending)
- **Endless Carousel**: Display tasks in a smooth infinite scrolling carousel
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Instant updates across the application

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **In-memory storage** - Simple array-based data storage

### Frontend
- **React** - Frontend framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS Modules** - Scoped styling
- **Vite** - Build tool and development server


## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion status
- `GET /api/health` - Health check endpoint

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd beckend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on port 4000 by default.

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on port 3000.

### Configuration
The backend uses sensible defaults:
- Server runs on port 4000 (can be overridden with `PORT` environment variable)
- CORS allows frontend connection from localhost:3000

## Task Model

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

## Features Implementation

### Endless Carousel
- Smooth infinite scrolling of tasks
- Auto-scroll functionality
- Navigation arrows and indicators
- Responsive design with touch support

### Task Management
- Create tasks with title, description, and priority
- Edit existing tasks inline or in modal
- Delete tasks with confirmation dialog
- Toggle completion status with visual feedback

### Filtering and Search
- Filter by completion status
- Visual indication of priority levels
- Real-time filtering updates

## Scripts

### Backend (server/)
- `npm start` - Start the server with linting
- `npm run dev` - Start with nodemon for development
- `npm run lint` - Run ESLint

### Frontend (client/)
- `npm run dev` - Start development server with linting
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is licensed under the ISC License.backend