import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/logger.js';

dotenv.config();

const app = express();

// Set up middleware (express.json, cors)
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(requestLogger);

//routes
app.use("/api/tasks", taskRoutes);

//health check endpoint 
app.get("/api/health", (req, res) => {
    res.json({status: "OK"});
});

// error handling
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

//Start server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
