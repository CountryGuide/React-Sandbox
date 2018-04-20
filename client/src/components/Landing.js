import React from 'react';

import { months } from '../utils/datetime';
import { connect } from "react-redux";


const mapStateToProps = ({ auth }) => {
    return auth;
};

class LandingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.date  = new Date();
        this.greet = (name) => {
            const greeting = ['Welcome'];
            if (name) greeting.push(name);

            return greeting.join(', ');
        }
    }


    render() {
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
                            {this.greet(this.props.authState && this.props.authState.displayName)}
                        </h2>
                        <p className="uk-margin-remove-top">
                            <time dateTime={this.date.toISOString()}>
                                {
                                    `
                                    ${months.get(this.date.getMonth()).short}
                                    ${this.date.getDate()},
                                    ${this.date.getFullYear()}
                                    `
                                }
                            </time>
                        </p>
                    </div>
                    <div className="uk-card-body"></div>
                    <div className="uk-card-footer"></div>
                </div>
            </div>
        );
    }
}

export const Landing =  connect(mapStateToProps, null)(LandingComponent);
