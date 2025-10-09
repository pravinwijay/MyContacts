const express = require("express");
const mongoose = require('mongoose');
const Contact = require("./Contact.model");

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now()},
})

module.exports = mongoose.model('User', UserSchema);