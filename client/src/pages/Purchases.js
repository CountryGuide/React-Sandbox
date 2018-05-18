import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import requireAuth from "../HOCs/requireAuth";
import { fetchPurchases } from "../actions/purchases";


class PurchasesPage extends Component {
    componentDidMount() {
        this.props.fetchPurchases();
    }

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


function mapStateToProps({ purchases }) {
    return purchases;
}

export const Purchases = connect(
    mapStateToProps,
    {
        fetchPurchases
    }
)(requireAuth(PurchasesPage));
