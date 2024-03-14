const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth = (req, res, next) => {
    const { token } = req.cookies;
    console.log(res.headers)
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const tokenDetail = jwt.verify(token, process.env.JWT_SECRET);
        req.user = tokenDetail;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Forbidden' }); 
    }
};

module.exports = auth;
