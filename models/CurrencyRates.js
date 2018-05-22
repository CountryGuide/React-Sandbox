const mongoose = require('mongoose');
const { Schema } = mongoose;


const currencyRateSchema = new Schema({
    currency: String,
    rate: Number
});

const currencyRatesSchema = new Schema({
    currencies: [currencyRateSchema]
}, {
    timestamps: true
});

mongoose.model('currencyRates', currencyRatesSchema);
