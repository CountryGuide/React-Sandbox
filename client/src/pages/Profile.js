import React from 'react';
import { connect } from "react-redux";
import requireAuth from "../HOCs/requireAuth";


const mapStateToProps = ({ auth }) => {
    return auth;
};


export class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.createdAt = new Date(this.props.authState.createdAt);
        this.updatedAt = new Date(this.props.authState.updatedAt);
    }

    render() {
        console.log(this.createdAt.toLocaleString('ru-RU'));
        return (
            <div>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Profile</span>
                </h1>
                <div className="uk-card uk-card-default uk-border-rounded">
                    <div className="uk-card-header">
                        <h2 className="uk-card-title uk-margin-remove-bottom">
                            {this.props.authState.displayName}
                        </h2>
                        <p className="uk-margin-remove-top">
                            <span className="uk-flex uk-flex-between uk-width-1-1 uk-width-3-5@s">
                                Created at:
                                <time dateTime={this.createdAt.toISOString()}>
                                    {this.createdAt.toLocaleString('ru-RU')}
                                </time>
                            </span>
                            <span className="uk-flex uk-flex-between uk-width-1-1 uk-width-3-5@s">
                                Updated at:
                                <time dateTime={this.updatedAt.toISOString()}>
                                    {this.updatedAt.toLocaleString('ru-RU')}
                                </time>
                            </span>
                        </p>
                    </div>
                    <div className="uk-card-body"></div>
                    <div className="uk-card-footer">
                        <button className="uk-button uk-background-primary uk-text-primary">Change</button>
                    </div>
                </div>
            </div>
        );
    }
}


export const Profile = connect(mapStateToProps, null)(requireAuth(ProfileComponent));
