const express = require("express");
const mongoose = require('mongoose');
const user = require("./user");

const ContactSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true, minlzength: 10, maxlength: 20},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
},
    {timestamps: true}
)

module.exports = mongoose.model('Contact', ContactSchema);