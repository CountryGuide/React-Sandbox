import React from 'react';
import { Link } from "react-router-dom";


class Header extends React.Component {
    render () {
        return (
            <header className="header">
                <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <Link to="/" className="uk-logo uk-navbar-item">React</Link>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li><Link to="/">Item</Link></li>
                            <li><Link to="/">Item</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;