const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Post', postSchema);
