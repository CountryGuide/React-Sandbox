import React, { Component } from 'react';
import { FormReview } from "./Form/FormReview";
import { Form } from "./Form/Form";
import { reduxForm } from "redux-form";
import { logRender } from "../utils/logger";
import { createTask } from '../actions/tasks';


const FIELDS = [
    {
        label: 'Task title',
        name:  'title'
    },
    {
        label: 'Task content',
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

export const formName = 'taskForm';

class NewTaskComponent extends Component {
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <FormReview onCancel={() => this.setState({ showReview: false })}
                               submitFunction={createTask}
                               addBtnText={'Add task'}
                               fields={FIELDS}/>
        }

        return <Form onTaskSubmit={() => this.setState({ showReview: true })}
                     legend={'New Task'}
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

export const NewTask = reduxForm({
    form: formName
})(NewTaskComponent);

