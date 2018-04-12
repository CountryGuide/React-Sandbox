import React from 'react';


export const Landing = props => {
    return (
        <div>
            <div>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Welcome, {props.authState ? props.authState.displayName : 'User'}</span>
                </h1>
            </div>
            <p>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
};
