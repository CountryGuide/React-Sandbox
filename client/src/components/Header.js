import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/auth";

import '../style/Header.css';


const mapStateToProps = ({ auth }) => {
    return auth;
};


class HeaderComponent extends React.Component {
    renderAuthSection() {
        const className = "uk-padding-small uk-padding-remove-vertical";

        if (this.props.authState) {
            return (
                <a href={"/api/logout"} className={className} onClick={() => localStorage.removeItem('user')}>
                    <div className="uk-flex uk-flex-middle">
                        <span data-uk-icon="sign-out" className="uk-margin-small-right uk-margin-small-left"></span>
                        Logout
                    </div>
                </a>
            );
        }

        return (
            <a className={className} href={"/auth/google"}>
                <div className="uk-flex uk-flex-middle">
                    <span data-uk-icon="google" className="uk-margin-small-right uk-margin-small-left"></span>
                    Login
                </div>
            </a>
        );
    }

    render() {
        return (
            <header className="header">
                <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar="mode:click">
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to="#">
                                    <span data-uk-icon="settings" className="uk-margin-small-right"></span>
                                    <span>settings</span>
                                </Link>
                                <div className="uk-navbar-dropdown uk-background-secondary uk-padding-remove">
                                    <ul className="uk-nav uk-navbar-dropdown-nav uk-padding-small uk-padding-remove-horizontal">
                                        <li>
                                            {this.renderAuthSection()}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}


export const Header = connect(mapStateToProps, { fetchUser })(HeaderComponent);
