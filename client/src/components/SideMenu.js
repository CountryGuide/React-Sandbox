import React from 'react';

import { Link } from "react-router-dom";

import '../style/Aside.css';


export class SideMenu extends React.Component {
    render () {
        return (
            <aside className="side-menu">
                <Link to="/"
                      className="uk-flex side-menu__item uk-flex-center uk-flex-middle">
                    <span data-uk-icon="home"></span>
                </Link>
                <Link to="/profile"
                      className="uk-flex side-menu__item uk-flex-center uk-flex-middle">
                    <span data-uk-icon="user"></span>
                </Link>
                <span data-uk-icon="cloud-upload"
                      className="uk-flex side-menu__item uk-flex-center uk-flex-middle">
                </span>
                <span data-uk-icon="github-alt"
                      className="uk-flex side-menu__item uk-flex-center uk-flex-middle">
                </span>
                <span data-uk-icon="database"
                      className="uk-flex side-menu__item uk-flex-center uk-flex-middle">
                </span>
            </aside>
        );
    }
}
