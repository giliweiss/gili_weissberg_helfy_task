import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/logger.js';

dotenv.config();

const app = express();

// TODO: Set up middleware (express.json, cors)
// TODO: Add request logging middleware
// TODO: Set up CORS configuration (allow frontend origin)

// TODO: Set up routes for /api/tasks
// TODO: Use taskRoutes for /api/tasks endpoint

// TODO: Add health check endpoint at /api/health

// TODO: Add 404 handler for unknown routes
// TODO: Add global error handling middleware

// TODO: Start server on PORT (default 4000, can be overridden with PORT env variable)
// TODO: Log server start message with port number

const PORT = process.env.PORT || 4000;