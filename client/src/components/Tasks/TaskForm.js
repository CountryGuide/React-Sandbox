import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { FIELDS } from "./formFields";
import { Link } from "react-router-dom";
import { TaskField } from "./TaskField";
import { logRender } from "../../utils/logger";


class TaskFormComponent extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }, i) => {
            return (
                <Field component={TaskField} type="text" label={label} name={name} key={i}/>
            )
        });
    }

    render() {
        logRender(this);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onTaskSubmit)}
                      className="uk-form-stacked new-task-form">
                    <legend className="uk-legend">
                        New Task
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


function validate(values) {
    const errors = {};

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `${name} is required`;
        }
    });

    return errors;
}


export const TaskForm = reduxForm({
    form:             'taskForm',
    validate,
    destroyOnUnmount: false
})(TaskFormComponent);
