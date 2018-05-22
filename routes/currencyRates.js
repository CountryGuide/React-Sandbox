const mongoose     = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const axios        = require('axios');


const CurrencyRates = mongoose.model('currencyRates');

async function fetchData() {
    console.log('Requesting currency rates from Fixer.io');
    const { data: currencyRatesFromFixer } = await axios.get(
        `http://data.fixer.io/api/latest?access_key=88ddd792dea5c7e07e28c193d6957914&symbols=USD,RUB`
    );

    /* Здесь так по-дурацки считается курс доллара потому что бесплатная подписка Fixer возвращает
    данные с базовой валютой EUR
     */
    return [
        {
            currency: 'EUR',
            rate:     currencyRatesFromFixer.rates['RUB']
        },
        {
            currency: 'USD',
            rate:     (currencyRatesFromFixer.rates['RUB'] / currencyRatesFromFixer.rates['USD'])
        }
    ];
}

module.exports = app => {
    app.get(
        '/api/currency/update',
        requireLogin,
        async (req, res) => {
            const [currencyRatesFromDb] = await CurrencyRates.find({});

            if (!currencyRatesFromDb) {
                console.log('Create new record');

                const currencies = await fetchData();

                const currencyRates = new CurrencyRates({ currencies });

                try {
                    await currencyRates.save();

                    res.send(currencyRates);
                } catch (err) {
                    res.status(500).send(err.message);
                }
            } else if (currencyRatesFromDb.updatedAt.toDateString() === (new Date).toDateString()) {
                console.log('Return value from DB');

                res.send(currencyRatesFromDb);
            } else {
                console.log('Update values in DB');

                let currencies = await fetchData();

                currencyRatesFromDb.set({ currencies });

                try {
                    currencies = await currencyRatesFromDb.save();

                    res.send(currencies);
                } catch (err) {
                    res.status(500).send(err.message);
                }
            }
        }
    )
};
