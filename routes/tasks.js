const mongoose     = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const Task = mongoose.model('tasks');

module.exports = app => {
    app.get(
        '/api/tasks',
        requireLogin,
        async (req, res) => {
            const tasks = await Task.find({ _user: req.user.id });

            res.send(tasks);
        }
    );

    app.get(
        '/api/tasks/:id',
        requireLogin,
        async (req, res) => {
            const task = await Task.findById(req.params.id);

            if (!task) {
                res.sendStatus(404);
                return;
            }

            res.send(task);
        }
    );

    app.delete(
        '/api/tasks/:id',
        requireLogin,
        async (req, res) => {
            const task = await Task.findById(req.params.id);

            await task.remove();

            res.sendStatus(204);
        }
    );

    app.patch(
        '/api/tasks/:id',
        requireLogin,
        async (req, res) => {
            const task = await Task.findById(req.params.id);
            let changed;

            const {
                      title,
                      content,
                      done = false
                  } = req.body;

            if (title && title !== task.title) {
                changed = true;
                task.set({ title });
            }

            if (content && content !== task.content) {
                changed = true;
                task.set({ content });
            }

            if (done !== task.done) {
                changed = true;
                task.set({ done });
            }

            if (changed) {
                await task.save();
            }

            res.sendStatus(204);
        }
    );

    app.post(
        '/api/tasks',
        requireLogin,
        async (req, res) => {
            const { title, content, done = false } = req.body;

            const task = new Task({
                title,
                content,
                done,
                _user: req.user.id
            });

            try {
                await task.save();
                const tasks = await Task.find({ _user: req.user.id });

                res.send(tasks);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
    );
};
