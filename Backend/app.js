const { log } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


// BD
mongoose.connect('mongodb+srv://pravinwijay:aUqGTZyHbNt3wvIw@mycontacts.t6bckyt.mongodb.net/?retryWrites=true&w=majority&appName=MyContacts')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Routes
app.use('/api/auth', userRoutes);   

module.exports = app;