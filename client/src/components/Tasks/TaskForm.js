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
                      className="uk-form-stacked">
                    <legend className="uk-legend">
                        New Task
                    </legend>
                    {this.renderFields()}
                    <Link to="/tasks" className="uk-button uk-button-default uk-button-small">
                        Cancel
                    </Link>
                    <button type={'submit'} className="uk-button uk-button-primary uk-button-small">
                        Next
                    </button>
                </form>
            </div>
        );
    }
}


export const TaskForm = reduxForm({
    form:             'taskForm',
    destroyOnUnmount: false
})(TaskFormComponent);
