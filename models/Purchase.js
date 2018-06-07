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
    currency: {
        type: String,
        enum: ['RUB', 'USD', 'EUR'],
        default: 'RUB'
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

mongoose.model('purchases', purchaseSchema);
