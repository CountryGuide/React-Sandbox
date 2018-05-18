import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import requireAuth from "../HOCs/requireAuth";


class PurchasesPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>IVY: Purchases</title>
                </Helmet>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Purchases</span>
                </h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export const Purchases = connect(
    mapStateToProps,
)(requireAuth(PurchasesPage));
