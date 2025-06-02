require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

// Database connection
(async () => {
    try {
        await connection();
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit the process if the database connection fails
    }
})();

// Middleware
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000', // Adjust the origin as needed
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials if needed
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));