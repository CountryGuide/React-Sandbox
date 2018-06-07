import React from 'react';
import { store } from '../index';


const calculateCurrency = (currency, value) => {
    const currencyRates = store.getState().rootReducer.currencyRates;
    if (!currencyRates) {
        return;
    }

    const _currency = currencyRates.find(rate => rate.currency === currency);
    const _value = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' }).format(_currency.rate * value);
    return `~${_value}`;
};

export const Currency = props => {
    return (
        <span data-uk-tooltip={`pos: top; title: ${calculateCurrency(props.currency, props.price)}`}>
            {new Intl.NumberFormat('ru', { style: 'currency', currency: props.currency }).format(props.price)}
        </span>
    )
};
