const { log } = require('console');
const { specs, swaggerUi } = require('./swagger');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
require('dotenv').config();
console.log('JWT Secret:', process.env.JWT_SECRET);

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// BD
mongoose.connect('mongodb+srv://pravinwijay:aUqGTZyHbNt3wvIw@mycontacts.t6bckyt.mongodb.net/mycontacts?retryWrites=true&w=majority&appName=MyContacts')
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(() => console.log('Connexion à MongoDB échouée'));

app.use(express.json());

// CORS
app.use((req, res, next) => {
  // res.setHeader('x-auth-token', token);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api/auth', userRoutes);   
app.use('/api/user', userRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;