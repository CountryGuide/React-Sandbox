const mongoose     = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const Post = mongoose.model('Post');

module.exports = app => {
    app.get(
        '/api/posts',
        requireLogin,
        async (req, res) => {
            const posts = await Post.find({ _user: req.user.id });

            res.send(posts);
        }
    );

    app.get(
        '/api/posts/:id',
        requireLogin,
        async (req, res) => {
            const post = await Post.findById(req.params.id);

            res.send(post);
        }
    );

    app.post(
        '/api/posts',
        requireLogin,
        async (req, res) => {
            const { title, content } = req.body;

            const post = new Post({
                title,
                content,
                _user: req.user.id
            });

            try {
                await post.save();
                res.send(post);
            } catch (err) {
                res.send(400, err);
            }
        }
    );
};
