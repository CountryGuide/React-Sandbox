const mongoose     = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const Purchase = mongoose.model('purchases');

module.exports = app => {
    app.get(
        '/api/purchases',
        requireLogin,
        async (req, res) => {
            const purchases = await Purchase.find({ _user: req.user.id });

            res.send(purchases);
        }
    );

    app.get(
        '/api/purchases/:id',
        requireLogin,
        async (req, res) => {
            const purchase = await Purchase.findById(req.params.id);

            if (!purchase) {
                res.sendStatus(404);
                return;
            }

            res.send(purchase);
        }
    );

    app.delete(
        '/api/purchases/:id',
        requireLogin,
        async (req, res) => {
            const purchase = await Purchase.findById(req.params.id);

            await purchase.remove();

            res.sendStatus(204);
        }
    );

    app.patch(
        '/api/purchases/:id',
        requireLogin,
        async (req, res) => {
            const purchase = await Purchase.findById(req.params.id);
            let changed;

            const {
                      title,
                      price,
                      priority
                  } = req.body;

            if (title && title !== purchase.title) {
                changed = true;
                purchase.set({ title });
            }

            if (price && price !== purchase.price) {
                changed = true;
                purchase.set({ price });
            }

            if (priority && priority !== purchase.priority) {
                changed = true;
                purchase.set({ priority });
            }

            if (changed) {
                await purchase.save();
            }

            res.sendStatus(204);
        }
    );

    app.post(
        '/api/purchases',
        requireLogin,
        async (req, res) => {
            const { title, price, priority, currency } = req.body;

            const purchase = new Purchase({
                title,
                price,
                priority,
                currency,
                _user: req.user.id
            });

            try {
                await purchase.save();
                const purchases = await Purchase.find({ _user: req.user.id });

                res.send(purchases);
            } catch (err) {
                res.status(400).send(err.message);
            }
        }
    );
};

