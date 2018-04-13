import React from 'react';

import { months } from '../utils/datetime';


export const Landing = props => {
    const date = new Date();

    const greet = (name) => {
        const greeting = ['Welcome'];
        if (name) greeting.push(name);

        return greeting.join(', ');
    };

    return (
        <div>
            <div>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Welcome</span>
                </h1>
            </div>
            <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-header">
                    <h2 className="uk-card-title uk-margin-remove-bottom">
                        {greet(props.authState && props.authState.displayName)}
                    </h2>
                    <p className="uk-margin-remove-top">
                        <time dateTime={date.toISOString()}>
                            {
                                `${months.get(date.getMonth()).short} ${date.getDate()}, ${date.getFullYear()}`
                            }
                        </time>
                    </p>
                </div>
                <div className="uk-card-body"></div>
                <div className="uk-card-footer"></div>
            </div>
        </div>
    );
};
