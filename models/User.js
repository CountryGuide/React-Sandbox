const mongoose   = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    displayName: String
}, {
    timestamps: true
});

mongoose.model('users', userSchema);
