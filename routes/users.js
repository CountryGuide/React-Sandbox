const requireLogin = require('../middlewares/requireLogin');
const mongoose     = require("mongoose");

const User = mongoose.model('users');

module.exports = (app) => {
    app.get(
        '/api/current_user',
        (req, res) => {
            if (req.user) {
                const { displayName, _id, createdAt, updatedAt, username } = req.user;
                res.send({ displayName, _id, createdAt, updatedAt, username });
                return;
            }
            res.send(req.user);
        }
    );
    app.patch(
        '/api/current_user',
        requireLogin,
        async (req, res) => {
            if (req.user) {
                const { _id } = req.user;
                const { username = undefined } = req.body;

                const user = await User.findById(_id);

                if (username) {
                    user.set({ username });

                    await user.save();
                }

                res.send(user);
            }
        }
    )
};
