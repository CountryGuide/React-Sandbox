import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import requireAuth from "../HOCs/requireAuth";
import { fetchPurchases, deletePurchase } from "../actions/purchases";


class PurchasesPage extends Component {
    componentDidMount() {
        this.props.fetchPurchases();
    }

    renderPurchase() {
        return this.props.purchases.map(purchase => {
            return (
                <li key={purchase._id} className="uk-position-relative">
                    <span>
                        {purchase.price}
                    </span>
                    <span className="uk-text-capitalize uk-margin-small-left">
                        {purchase.title}
                    </span>
                    <button type="button"
                            data-uk-icon="trash"
                            onClick={() => {
                                this.props.deletePurchase(purchase._id)
                            }}
                            title="Delete task"
                            className="uk-position-top-right">
                    </button>
                </li>
            );
        })
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
                {
                    this.props.purchases &&
                    <ul className="uk-list">
                        {this.renderPurchase()}
                    </ul>
                }
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
        fetchPurchases,
        deletePurchase
    }
)(requireAuth(PurchasesPage));
