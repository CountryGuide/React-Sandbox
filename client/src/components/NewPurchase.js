import React, { Component } from 'react';
import { FormReview } from "./Form/FormReview";
import { Form } from "./Form/Form";
import { reduxForm } from "redux-form";
import { logRender } from "../utils/logger";


const FIELDS = [
    {
        label: 'Title',
        name:  'title'
    },
    {
        label: 'Price',
        name:  'price'
    },
    {
        label: 'Priority',
        name: 'priority'
    }
];


class NewPurchaseComponent extends Component {
    state = { showReview: false };

    renderContent() {
        const submitFunction = this.props.createPurchase;
        if (this.state.showReview) {
            return <FormReview onCancel={() => this.setState({ showReview: false })}
                               addBtnText={'Add purchase'}
                               submitFunction={submitFunction}
                               fields={FIELDS}/>
        }

        return <Form onFormSubmit={() => this.setState({ showReview: true })}
                     returnLink={'/purchases'}
                     legend={'New purchase'}
                     fields={FIELDS}/>
    }

    render() {
        logRender(this);
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export const NewPurchase = reduxForm({
    form: 'submitForm'
})(NewPurchaseComponent);


