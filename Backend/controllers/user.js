const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const token = require('../middleware/auth');

// ça marche
exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => {
        res.status(500).json({ error })
    });   
}

// ça marche 
exports.login = (req, res) => {
    User.findOne({ email : req.body.email })
    .then(user => {
        if(!user) {
            return res.status(400).json({ error: 'Nom ou mot de passe incorrect'});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(!valid) {
                return res.status(401).json({ error: 'Nom ou mot de passe incorrect'});
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                )
            });
            res.token = token;
            console.log('Generated token:', res.token);
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}