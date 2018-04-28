import React from 'react';
import requireAuth from "../HOCs/requireAuth";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchTodos } from "../actions/todos";
import { logRender } from "../utils/logger";


function mapStateToProps({ todos }) {
    return todos;
}

function renderTODO(todo) {
    return (
        <li key={todo._id} className="uk-position-relative">
            <label className="uk-form-label">
                <input type="checkbox" className="uk-checkbox"/>
                <span className="uk-text-uppercase uk-margin-small-left">{todo.title}</span>
            </label>
            <p>{todo.content}</p>
            <span data-uk-icon="trash" className="uk-position-top-right uk-position-small"></span>
        </li>
    );
}


class TODOPage extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        logRender(this);
        return (
            <div>
                <Helmet>
                    <title>IVY: Checklist</title>
                </Helmet>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Checklist</span>
                </h1>
                {
                    this.props.todosList &&
                    <ul className="uk-list uk-list-divider">
                        {this.props.todosList.map(renderTODO)}
                        <li>
                            <button className="uk-button uk-button-default uk-button-small">Add</button>
                        </li>
                    </ul>
                }
            </div>
        );
    }
}


export const TODO = connect(mapStateToProps, { fetchTodos })(requireAuth(TODOPage));
