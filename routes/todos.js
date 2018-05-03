const mongoose     = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const TODO = mongoose.model('todos');

module.exports = app => {
    app.get(
        '/api/todos',
        requireLogin,
        async (req, res) => {
            const todos = await TODO.find({ _user: req.user.id });

            res.send(todos);
        }
    );

    app.get(
        '/api/todos/:id',
        requireLogin,
        async (req, res) => {
            const todo = await TODO.findById(req.params.id);

            if (!todo) {
                res.sendStatus(404);
                return;
            }

            res.send(todo);
        }
    );

    app.delete(
        '/api/todos/:id',
        requireLogin,
        async (req, res) => {
            const todo = await TODO.findById(req.params.id);

            await todo.remove();

            res.sendStatus(204);
        }
    );

    app.patch(
        '/api/todos/:id',
        requireLogin,
        async (req, res) => {
            const todo = await TODO.findById(req.params.id);
            let changed;

            const {
                      title,
                      content,
                      done = false
                  } = req.body;

            if (title && title !== todo.title) {
                changed = true;
                todo.set({ title });
            }

            if (content && content !== todo.content) {
                changed = true;
                todo.set({ content });
            }

            if (done !== todo.done) {
                changed = true;
                todo.set({ done });
            }

            if (changed) {
                await todo.save();
            }

            res.sendStatus(204);
        }
    );

    app.post(
        '/api/todos',
        requireLogin,
        async (req, res) => {
            const { title, content, done = false } = req.body;

            const todo = new TODO({
                title,
                content,
                done,
                _user: req.user.id
            });

            try {
                await todo.save();
                const todos = await TODO.find({ _user: req.user.id });

                res.send(todos);
            } catch (err) {
                res.status(400).send(err);
            }
        }
    );
};
