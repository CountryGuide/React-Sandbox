const mongoose = require('mongoose');
const { Schema } = mongoose;


const purchaseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    priority: {
        type: Number,
        required: true,
        min: 1,
        max: 4
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

mongoose.model('purchases', purchaseSchema);
