import React from 'react';

import { Link } from "react-router-dom";

import '../style/Aside.css';


export class SideMenu extends React.Component {
    render() {
        return (
            <aside className="side-menu">
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <Link to="/" className="uk-logo uk-navbar-item">
                        <span data-uk-icon="home"></span>
                    </Link>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <Link to="/profile" className="uk-logo uk-navbar-item">
                        <span data-uk-icon="user"></span>
                    </Link>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="cloud-upload"></span>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="github-alt"></span>
                </div>
                <div className="uk-flex uk-flex-center uk-flex-middle">
                    <span data-uk-icon="database"></span>
                </div>
            </aside>
        );
    }
}
