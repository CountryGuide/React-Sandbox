import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { FIELDS } from "./formFields";
import { Link } from "react-router-dom";
import { TodoField } from "./TodoField";


class TodoFormComponent extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }, i) => {
            return (
                <Field component={TodoField} type="text" label={label} name={name} key={i}/>
            )
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onTodoSubmit)}>
                    <legend>
                        New TODO
                    </legend>
                    {this.renderFields()}
                    <Link to="/todos" className="uk-button uk-button-default uk-button-small">
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


export const TodoForm = reduxForm({
    form:             'todoForm',
    destroyOnUnmount: false
})(TodoFormComponent);
