import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Landing } from "./Landing";
import { NoMatch } from "./NoMatch";
import { SideMenu } from "./SideMenu";

import { fetchUser } from "../actions/auth";

import '../style/App.css';
import { Profile } from "../pages/Profile";


const mapStateToProps = ({ auth }) => {
    return auth;
};


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    shouldComponentUpdate(nextProps) {
        return JSON.stringify(nextProps) !== JSON.stringify(this.props);
    }

    render() {
        console.log('<App /> render', this.props);
        return (
            <BrowserRouter>
                <div className="app-container uk-light">
                    <Header/>
                    <main className="main uk-container uk-margin-top uk-width-2-3@l uk-width-4-5@m">
                        <Switch>
                            <Route exact path="/" render={() => <Landing {...this.props}/>}/>
                            <Route path="/profile" component={Profile}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </main>
                    <SideMenu/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}


export default connect(mapStateToProps, { fetchUser })(App);
