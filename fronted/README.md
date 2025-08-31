# Task Manager Frontend

React frontend application for the Task Manager.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- Endless carousel for task display
- CRUD operations for tasks
- Task filtering by status
- Priority level indicators
- Responsive design
- Form validation
- Error handling

## Components

- **TaskList** - Endless carousel component
- **TaskItem** - Individual task display with actions
- **TaskForm** - Create/edit task form
- **TaskFilter** - Filter tasks by status

## API Integration

The frontend communicates with the backend API running on port 4000.