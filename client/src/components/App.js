import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

import '../style/App.css';


class App extends Component {
    state = {};

    async componentDidMount() {
        const user = await axios.get('/api/current_user');
        this.setState({ user: user.data });
    }

    renderAuthSection() {
        const className = "uk-button uk-button-default uk-button-small uk-flex-inline uk-flex-middle";
        if (this.state.user) {
            return <a href="/api/logout" className={className}>Logout</a>
        }

        return <a className={className} href="/auth/google">
            <span data-uk-icon="google" className="uk-margin-small-right"></span>Login
        </a>
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-container uk-light">
                    <Header/>
                    <div className="main uk-container uk-margin-top">
                        <Route>
                            <div>
                                <div>
                                    <h1>Welcome, {this.state.user ? this.state.user.displayName : "User"}</h1>
                                </div>
                                <p>
                                    To get started, edit <code>src/App.js</code> and save to reload.
                                </p>
                                <p>
                                    {this.renderAuthSection()}
                                </p>
                            </div>
                        </Route>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
