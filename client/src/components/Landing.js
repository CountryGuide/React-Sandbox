import React from 'react';


export const Landing = props => {
    return (
        <div>
            <div>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Welcome, {props.authState ? props.authState.displayName : 'User'}</span>
                </h1>
            </div>
            <div className="uk-card uk-card-default uk-border-rounded">
                <div className="uk-card-header">
                    <h2 className="uk-card-title uk-margin-remove-bottom">Ivan Yakovlev</h2>
                    <p className="uk-margin-remove-top">
                        <time dateTime="2016-04-01T19:00">April 01, 2016</time>
                    </p>
                </div>
                <div className="uk-card-body"></div>
                <div className="uk-card-footer"></div>
            </div>
        </div>
    );
};
