import React from 'react';
import requireAuth from "../HOCs/requireAuth";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createTodo, fetchTodos } from "../actions/todos";
import { logRender } from "../utils/logger";
import { Link, Route } from "react-router-dom";
import { NewTodo } from "../components/TODO/NewTodo";


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
            <span data-uk-icon="trash" className="uk-position-top-right"></span>
        </li>
    );
}


class TODOPage extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        let update = false;

        update = update || JSON.stringify(this.props.todosList) !== JSON.stringify(nextProps.todosList);
        update = update || this.props.location.pathname !== nextProps.location.pathname;

        return update;
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
                    <ul className="uk-list">
                        {this.props.todosList.map(renderTODO)}
                    </ul>
                }
                <Link className="uk-button uk-button-default uk-button-small" to="/todos/new">
                    Add
                </Link>
                <Route path="/todos/new" component={NewTodo}/>
            </div>
        );
    }
}


export const TODO = connect(mapStateToProps, { fetchTodos, createTodo })(requireAuth(TODOPage));
