const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const contactController = require('../controllers/contact');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/contact/all:
 *   get:
 *     summary: Retrieve a list of contacts for the authenticated user
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The contact ID.
 *                   firstName:
 *                     type: string
 *                     description: The contact's first name.
 *                   lastName:
 *                     type: string
 *                     description: The contact's last name.
 *                   phone:
 *                     type: string
 *                     description: The contact's phone number.
 *                   user:
 *                     type: string
 *                     description: The ID of the user who owns the contact.
 *                   createdAt:
 *                     type: string
 * tags:
 *   name: Contact
 *   description: Contact management and retrieval
 */
router.get('/all', auth, contactController.getAllContacts);

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The contact's first name.
 *               lastName:
 *                 type: string
 *                 description: The contact's last name.
 *               phone:
 *                 type: string
 *                 description: The contact's phone number.
 *     responses:
 *       201:
 *         description: Contact created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The contact ID.
 *                 firstName:
 *                   type: string
 *                   description: The contact's first name.
 *                 lastName:
 *                   type: string
 *                   description: The contact's last name.
 *                 phone:
 *                   type: string
 *                   description: The contact's phone number.
 *                 user:
 *                   type: string
 *                   description: The ID of the user who owns the contact.
 *                 createdAt:
 *                   type: string
 *                   description: The creation date of the contact. 
 */
router.post('/', auth, contactController.createContact);

/**
 * @swagger
 * /api/contact/{id}:
 *   put:
 *     summary: Update a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The contact's first name.
 *               lastName:
 *                 type: string
 *                 description: The contact's last name.
 *               phone:
 *                 type: string
 *                 description: The contact's phone number.
 */
router.put('/:id', auth, contactController.updateContact);

/**
 * @swagger
 * /api/contact/{id}:
 *   delete:
 *     summary: Delete a contact by ID
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID.
 *     responses:
 *       200:
 *         description: Contact deleted successfully.
 *       404:
 *         description: Contact not found.
 */
router.delete('/:id', auth, contactController.deleteContact);

module.exports = router;