const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controllers/user');

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: User registeration
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password.
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Bad request. Invalid input data.
 */
router.post('/register', userController.register);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password.
 *     responses:
 *       200:
 *         description: Login successful. Returns userId and token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: The user's ID.
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication.
 *       401:
 *         description: Unauthorized. Invalid email or password.
 */
router.post('/login', userController.login);

/**
 * @swagger
 * /api/user/all:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user ID.
 *                   firstname:
 *                     type: string
 *                     format: text
 *                     description: The user's firstname.
 *                   lastname:
 *                    type: string
 *                    format: text
 *                    description: The user's lastname.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: The user's email address.
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: The date and time when the user was created.
 *       400:
 *         description: Bad request. Unable to retrieve users.
 */
router.get('/all', (req, res) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;