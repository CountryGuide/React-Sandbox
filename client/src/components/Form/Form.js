import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { FormField } from "./FormField";
import { validate } from '../NewTask';
import { logRender } from "../../utils/logger";


class FormComponent extends Component {
    renderFields() {
        return this.props.fields.map(({ label, name }, i) => {
            return (
                <Field component={FormField} type="text" label={label} name={name} key={i}/>
            )
        });
    }

    render() {
        logRender(this);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onTaskSubmit)}
                      className="uk-form-stacked form">
                    TODO://
                    <legend className="uk-legend">
                        {this.props.legend}
                    </legend>
                    {this.renderFields()}
                    <div className="uk-padding-small uk-padding-remove-horizontal uk-flex uk-flex-between">
                        <Link to="/tasks" className="uk-button uk-button-default uk-button-small">
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
    form:             'taskForm',
    validate,
    destroyOnUnmount: false
})(FormComponent);
