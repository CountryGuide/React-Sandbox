module.exports = (app) => {
    app.get(
        '/api/current_user',
        (req, res) => {
            if (req.user) {
                const { displayName, _id, createdAt, updatedAt } = req.user;
                res.send({ displayName, _id, createdAt, updatedAt });
                return;
            }
            res.send(req.user);
        }
    )
};
