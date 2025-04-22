import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import dataroute from './routes/dataroute.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Security middleware
app.use(morgan('dev')); // Logging middleware

app.use('/api/data', dataroute);

app.listen (PORT, () => {
    console.log("Server is running on port -> " + PORT + "\n" + "http://localhost:" + PORT); 
});

