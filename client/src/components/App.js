import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

import '../style/App.css';
import { fetchUser } from "../actions/auth";
import { connect } from "react-redux";


const mapStateToProps = ({ auth }) => {
    return auth;
};

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-container uk-light">
                    <Header/>
                    <div className="main uk-margin-medium-left uk-margin-medium-right uk-margin-top">
                        <Route>
                            <div>
                                <div>
                                    <h1 className="uk-heading-line uk-text-center">
                                        <span>
                                            Welcome, {this.props.authState ? this.props.authState.displayName : 'User'}
                                        </span>
                                    </h1>
                                </div>
                                <p>
                                    To get started, edit <code>src/App.js</code> and save to reload.
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


export default connect(mapStateToProps, { fetchUser })(App);
