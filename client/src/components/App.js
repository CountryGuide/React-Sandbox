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
                    <main className="main uk-container uk-margin-top uk-width-2-3@l uk-width-4-5@m">
                        <Switch>
                            <Route exact path="/" render={() => <Landing {...this.props}/>}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </main>
                    <aside className="side-menu">
                        <div className="uk-flex uk-flex-center uk-flex-middle">
                            <span data-uk-icon="user"></span>
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
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default connect(mapStateToProps, { fetchUser })(App);
