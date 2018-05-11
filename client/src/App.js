import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import { Landing } from "./pages/Landing";
import { Profile } from "./pages/Profile";
import { Tasks } from "./pages/Tasks";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NoMatch } from "./components/NoMatch";
import { SideMenu } from "./components/SideMenu";

import { fetchUser } from "./actions/auth";
import { logRender } from "./utils/logger";

import './style/App.css';


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
                            <Route path="/tasks" component={Tasks}/>
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
