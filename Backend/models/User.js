const e = require("express");

const mongoose = recquire('mongoose');

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    created_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('User', UserSchema);