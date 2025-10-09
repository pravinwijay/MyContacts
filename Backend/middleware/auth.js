const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        console.log('header :', authHeader);
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: 'No token provided' });
        }

        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decodedToken.userId;

        req.auth = { userId: userId };
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};