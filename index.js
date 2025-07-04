const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();




app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
