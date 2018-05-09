const mongoose   = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String,
    username: String
}, {
    timestamps: true
});

mongoose.model('users', userSchema);
