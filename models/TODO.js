const mongoose = require('mongoose');
const { Schema } = mongoose;


const todoSchema = new Schema({
    title: String,
    content: String,
    done: {
        type: Boolean,
        default: false
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

mongoose.model('todos', todoSchema);
