import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import { Landing } from "./Landing";
import { NoMatch } from "./NoMatch";

import { fetchUser } from "../actions/auth";

import '../style/App.css';


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
                        <Switch>
                            <Route exact path="/" render={() => <Landing {...this.props}/>}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default connect(mapStateToProps, { fetchUser })(App);
