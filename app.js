const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

app.use(express.json());

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/authsystem')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes
app.use(express.static('public'));
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));