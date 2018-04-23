import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Landing } from "../pages/Landing";
import { NoMatch } from "./NoMatch";
import { SideMenu } from "./SideMenu";

import { fetchUser } from "../actions/auth";

import '../style/App.css';
import { Profile } from "../pages/Profile";
import { logRender } from "../utils/logger";


// const mapStateToProps = ({ auth }) => {
//     return auth;
// };


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        logRender(this);
        return (
            <BrowserRouter>
                <div className="app-container uk-light">
                    <Header/>
                    <main className="main uk-container uk-margin-top uk-width-2-3@l uk-width-4-5@m">
                        <Switch>
                            <Route exact path="/" component={Landing}/>
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


export default connect(null, { fetchUser })(App);
