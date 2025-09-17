const { log } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// BD
mongoose.connect('mongodb+srv://pravinwijay:<QqPkekDjl1b51V4y>@mycontacts.t6bckyt.mongodb.net/?retryWrites=true&w=majority&appName=MyContacts')
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

app.use((req, res, next) => {
    console.log('Request received');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) =>{
    res.json({message: "Hello from the other side!"})
    next();
})

app.use((req, res, next) => {
    console.log('Response sent successfully');
    next();
})

module.exports = app;