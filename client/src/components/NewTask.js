import React, { Component } from 'react';
import { FormReview } from "./Form/FormReview";
import { Form } from "./Form/Form";
import { reduxForm } from "redux-form";
import { logRender } from "../utils/logger";


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


class NewTaskComponent extends Component {
    state = { showReview: false };

    renderContent() {
        const submitFunction = this.props.createTask;
        if (this.state.showReview) {
            return <FormReview onCancel={() => this.setState({ showReview: false })}
                               addBtnText={'Add task'}
                               submitFunction={submitFunction}
                               fields={FIELDS}/>
        }

        return <Form onFormSubmit={() => this.setState({ showReview: true })}
                     returnLink={'/tasks'}
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
    form: 'submitForm'
})(NewTaskComponent);

