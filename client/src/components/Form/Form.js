import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { FormField } from "./FormField";
import { logRender } from "../../utils/logger";


function validate(values, { fields }) {
    const errors = {};

    fields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `${name} is required`;
        }
    });

    return errors;
}


class FormComponent extends Component {
    renderFields() {
        return this.props.fields.map(({ label, name, type = 'text', options = [] }, i) => {
            return (
                <Field component={FormField} type={type} label={label} name={name} key={i} options={options}/>
            )
        });
    }

    render() {
        logRender(this);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
                      className="uk-form-stacked form">
                    <legend className="uk-legend">
                        {this.props.legend}
                    </legend>
                    {this.renderFields()}
                    <div className="uk-padding-small uk-padding-remove-horizontal uk-flex uk-flex-between">
                        <Link to={this.props.returnLink} className="uk-button uk-button-default uk-button-small">
                            Cancel
                        </Link>
                        <button type={'submit'} className="uk-button uk-button-primary uk-button-small">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export const Form = reduxForm({
    form:             'submitForm',
    validate,
    destroyOnUnmount: false
})(FormComponent);
