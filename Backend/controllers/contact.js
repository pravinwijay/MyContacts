const Contact = require('../models/Contact.model');

//TODO : Passer par un Service

// GET
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.auth.userId });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

// POST
exports.createContact = async (req, res) => {
    try {
        const contact = new Contact({
            ...req.body,
            user: req.auth.userId
        });
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE
exports.updateContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const contactToUpdate = await Contact.findById(contactId);
        const contact = await Contact.findByIdAndUpdate(contactId, {...req.body},{ new: true });
        if (!contact) {
            return res.status(404).json({ error: 'Contact non trouvé' });
        }
        res.status(200).json(contactToUpdate.firstName); 
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

// DELETE
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findOneAndDelete({ _id: req.params.id, user: req.auth.userId });
        if (!contact) {
            return res.status(404).json({ error: 'Contact non trouvé' });
        }
        res.status(200).json({ message: 'Contact supprimé' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}