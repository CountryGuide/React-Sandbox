const express       = require('express');
const sslRedirect   = require('heroku-ssl-redirect');
const path          = require('path');
const logger        = require('morgan');
const compression   = require('compression');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const keys          = require('./config/keys');


require('./models/User');
require('./models/Task');
require('./models/Purchase');
require('./services/passport');
require('./services/cache');

mongoose.connect(keys.mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.log(err);
        mongoose.connect('mongodb://127.0.0.1:27017')
            .then(() => console.log('Connected to local MongoDB'))
            .catch(err => console.log(err))
    });

const app = express();

app.use(sslRedirect());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    cookieSession({
        maxAge: 24 * 3600 * 1000,
        keys:   [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app);
require('./routes/auth')(app);
require('./routes/users')(app);
require('./routes/tasks')(app);
require('./routes/purchases')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err  = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
