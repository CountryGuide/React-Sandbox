import React, { Component } from 'react';
import { TaskFormReview } from "./TaskFormReview";
import { TaskForm } from "./TaskForm";
import { reduxForm } from "redux-form";
import { logRender } from "../../utils/logger";


class NewTaskComponent extends Component {
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <TaskFormReview onCancel={() => this.setState({ showReview: false })}></TaskFormReview>
        }

        return <TaskForm onTaskSubmit={() => this.setState({ showReview: true })}></TaskForm>
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
    form: 'taskForm'
})(NewTaskComponent);

