import React, { Component } from 'react';
import { TodoFormReview } from "./TodoFormReview";
import { TodoForm } from "./TodoForm";
import { reduxForm } from "redux-form";


class NewTodoComponent extends Component {
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <TodoFormReview onCancel={() => this.setState({ showReview: false })}></TodoFormReview>
        }

        return <TodoForm onTodoSubmit={() => this.setState({ showReview: true })}></TodoForm>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export const NewTodo = reduxForm({
    form: 'todoForm'
})(NewTodoComponent);

