import React from 'react';

import { Link } from "react-router-dom";

import '../style/Aside.css';
import { connect } from "react-redux";
import { logRender } from "../utils/logger";


const mapStateToProps = ({ auth }) => {
    return auth;
};

const RenderAuth = props => {
    if (props.authState) {
        return props.component;
    }

    return false;
};

const MenuItem = props => {
    return (
        <li className="uk-padding-remove-top">
            <Link to={props.path} className="uk-text-center side-menu__item">
                <span data-uk-icon={props.icon}></span>
            </Link>
        </li>
    )
};

export class SideMenuComponent extends React.Component {
    render () {
        logRender(this);
        return (
            <aside className="side-menu">
                <ul className="uk-iconnav uk-iconnav-vertical uk-margin-remove-top">
                    <MenuItem icon="home" path="/"/>
                    <RenderAuth component={<MenuItem icon="user" path="/profile"/>} {...this.props}/>
                    <RenderAuth component={<MenuItem icon="cloud-upload" path="/purchases"/>} {...this.props}/>
                    <RenderAuth component={<MenuItem icon="database" path="/tasks"/>} {...this.props}/>
                </ul>
            </aside>
        );
    }
}

export const SideMenu = connect(mapStateToProps, null)(SideMenuComponent);
