import React from 'react';

import { Link } from "react-router-dom";

import '../style/Aside.css';
import { connect } from "react-redux";


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
        <div className="uk-flex uk-flex-center uk-flex-middle">
            <Link to={props.path} className="uk-logo uk-navbar-item">
                <span data-uk-icon={props.icon}></span>
            </Link>
        </div>
    )
};

export class SideMenuComponent extends React.Component {
    render() {
        console.log('<SideMenu /> render', this.props);
        return (
            <aside className="side-menu">
                <MenuItem icon="home" path="/"/>
                <RenderAuth component={<MenuItem icon="user" path="/profile"/>} {...this.props}/>
                <MenuItem icon="cloud-upload" path="/"/>
                <MenuItem icon="github-alt" path="/"/>
                <MenuItem icon="database" path="/"/>
            </aside>
        );
    }
}

export const SideMenu = connect(mapStateToProps, null)(SideMenuComponent);
