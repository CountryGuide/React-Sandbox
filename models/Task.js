const mongoose = require('mongoose');
const { Schema } = mongoose;


const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

mongoose.model('tasks', taskSchema);
