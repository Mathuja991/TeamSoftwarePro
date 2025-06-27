import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import ChildRoutes from './routes/ChildRoutes.js';
import CarsformRoutes from './routes/CarsformRoutes.js';
import MflowchartRoutes from './routes/MflowchartRoutes.js';
import BcRoutes from './routes/BcRoutes.js';
dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // <-- Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/child', ChildRoutes);
app.use('/api/carsform',CarsformRoutes);
app.use('/api/mflow',MflowchartRoutes);
app.use('/api/bc', BcRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
