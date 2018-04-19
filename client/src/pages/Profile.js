import React from 'react';
import { connect } from "react-redux";
import requireAuth from "../HOCs/requireAuth";


const mapStateToProps = ({ auth }) => {
    return auth;
};

export class ProfileComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Profile</span>
                </h1>
            </div>
        );
    }
}

export const Profile = connect(mapStateToProps, null)(requireAuth(ProfileComponent));
