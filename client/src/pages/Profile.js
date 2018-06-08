import React from 'react';
import { connect } from "react-redux";
import requireAuth from "../HOCs/requireAuth";
import { fetchUser } from "../actions/auth";
import { logRender } from "../utils/logger";
import { Helmet } from "react-helmet";


const mapStateToProps = ({ auth }) => {
    return auth;
};


export class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.createdAt = new Date(this.props.authState.createdAt);
        this.updatedAt = new Date(this.props.authState.updatedAt);
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        logRender(this);
        return (
            <div>
                <Helmet>
                    <title>IVY: {this.props.authState.displayName}</title>
                </Helmet>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Profile</span>
                </h1>
                <div className="uk-card uk-card-default uk-card-small uk-border-rounded">
                    <div className="uk-card-header">
                        <h2 className="uk-card-title uk-margin-remove-bottom">
                            {this.props.authState.displayName}
                        </h2>
                        {
                            this.props.authState.username &&
                            <span>
                                {this.props.authState.username}
                            </span>
                        }
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
                        <button className="uk-button uk-button-small uk-background-primary uk-text-primary">Change
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export const Profile = connect(mapStateToProps, { fetchUser })(requireAuth(ProfilePage));
