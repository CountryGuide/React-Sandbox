import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import requireAuth from "../HOCs/requireAuth";
import { deletePurchase, fetchPurchases } from "../actions/purchases";
import { logRender } from "../utils/logger";
import { Currency } from "../components/Currency";


class PurchasesPage extends Component {
    componentDidMount() {
        this.props.fetchPurchases();
    }

    renderPurchase() {
        return this.props.purchases.map(purchase => {
            return (
                <li key={purchase._id} className="uk-position-relative">
                    <Currency {...purchase}/>
                    <span className="uk-text-capitalize uk-margin-small-left">
                        {purchase.title}
                    </span>
                    <button type="button"
                            data-uk-icon="trash"
                            onClick={() => {
                                this.props.deletePurchase(purchase._id)
                            }}
                            title="Delete purchase"
                            className="uk-position-top-right">
                    </button>
                </li>
            );
        })
    }

    render() {
        logRender(this);
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


function mapStateToProps({ purchases, rootReducer }) {
    return { ...purchases, ...rootReducer };
}

export const Purchases = connect(
    mapStateToProps,
    {
        fetchPurchases,
        deletePurchase
    }
)(requireAuth(PurchasesPage));
