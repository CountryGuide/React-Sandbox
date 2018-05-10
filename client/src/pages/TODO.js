import React from 'react';
import requireAuth from "../HOCs/requireAuth";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { deleteTodo, fetchTodos, todoChecked } from "../actions/todos";
import { logRender } from "../utils/logger";
import { Link, Route } from "react-router-dom";
import { NewTodo } from "../components/TODO/NewTodo";


function mapStateToProps({ todos }) {
    return todos;
}


class TODOPage extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.todoDeleted) {
            this.props.fetchTodos();
            return true;
        }

        if (nextProps.todoChecked) {
            return true;
        }

        let update = false;

        console.log(JSON.stringify(this.props.todosList));
        console.log(JSON.stringify(nextProps.todosList));

        update = update || JSON.stringify(this.props.todosList) !== JSON.stringify(nextProps.todosList);
        update = update || this.props.location.pathname !== nextProps.location.pathname;

        return update;
    }

    renderTODO() {
        return this.props.todosList.map(todo => {
            return (
                <li key={todo._id} className="uk-position-relative">
                    <label className="uk-form-label">
                        <input type="checkbox"
                               className="uk-checkbox"
                               checked={todo.done}
                               onChange={() => {
                                   this.props.todoChecked(todo._id, !todo.done)
                               }}
                        />
                        <span className="uk-text-uppercase uk-margin-small-left">{todo.title}</span>
                    </label>
                    <p>{todo.content}</p>
                    <button type="button"
                            data-uk-icon="trash"
                            onClick={() => {
                                this.props.deleteTodo(todo._id)
                            }}
                            className="uk-position-top-right">
                    </button>
                </li>
            );
        });
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
                        {this.renderTODO()}
                    </ul>
                }
                <Route exact path="/todos" render={() => {
                    return <Link className="uk-button uk-button-default uk-button-small" to="/todos/new">Add</Link>
                }}/>
                <Route path="/todos/new" component={NewTodo}/>
            </div>
        );
    }
}


export const TODO = connect(mapStateToProps, { fetchTodos, deleteTodo, todoChecked })(requireAuth(TODOPage));
