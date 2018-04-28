import React from 'react';
import requireAuth from "../HOCs/requireAuth";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class TODOPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>IVY: Checklist</title>
                </Helmet>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Checklist</span>
                </h1>
            </div>
        );
    }
}

export const TODO = connect(null, null)(requireAuth(TODOPage));
