const authenticateAdmin = (req, res, next) => {
    const adminKey = req.headers['x-admin-key'];
    if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(403).send('Unauthorized');
    }
    next();
};

module.exports = { authenticateAdmin };
