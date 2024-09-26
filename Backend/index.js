import { PORT, mongoDBURL } from './config.js';

import { Blog } from './models/blogModel.js';
import { User } from './models/userModel.js';
import blogRoutes from './routes/blogRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send('OA Sharing Platform is running!');
});

// Use blog routes
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('MongoDB connected...');

    app.listen(PORT, () => {  
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err.message);
  });
