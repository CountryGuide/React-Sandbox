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
        name:  'content'
    }
];

export function validate(values) {
    const errors = {};

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `${name} is required`;
        }
    });

    return errors;
}

export const formName = 'purchaseForm';

class NewTaskComponent extends Component {
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <FormReview onCancel={() => this.setState({ showReview: false })}
                               addBtnText={'Add purchase'}
                               fields={FIELDS}/>
        }

        return <Form onTaskSubmit={() => this.setState({ showReview: true })}
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
    form: formName
})(NewTaskComponent);


