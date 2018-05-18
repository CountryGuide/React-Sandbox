import React from 'react';
import requireAuth from "../HOCs/requireAuth";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { deleteTask, fetchTasks, taskChecked } from "../actions/tasks";
import { logRender } from "../utils/logger";
import { Link, Route } from "react-router-dom";
import { NewTask } from "../components/Tasks/NewTask";

import '../style/Tasks.css';


function mapStateToProps({ tasks }) {
    return tasks;
}


class TasksPage extends React.Component {
    componentDidMount() {
        this.props.fetchTasks();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.taskDeleted) {
            this.props.fetchTasks();
            return true;
        }

        if (nextProps.taskChecked) {
            return true;
        }

        let update = false;

        update = update || JSON.stringify(this.props.taskList) !== JSON.stringify(nextProps.taskList);
        update = update || this.props.location.pathname !== nextProps.location.pathname;

        return update;
    }

    renderTask() {
        return this.props.taskList.map(task => {
            return (
                <li key={task._id} className="uk-position-relative">
                    <label className="uk-form-label">
                        <input type="checkbox"
                               className="uk-checkbox"
                               checked={task.done}
                               onChange={() => {
                                   this.props.taskChecked(task._id, !task.done)
                               }}
                        />
                        <span className="uk-text-uppercase uk-margin-small-left">
                            {task.done ? <s>{task.title}</s> : task.title}
                        </span>
                    </label>
                    <p className="uk-margin-small">{task.content}</p>
                    <button type="button"
                            data-uk-icon="trash"
                            onClick={() => {
                                this.props.deleteTask(task._id)
                            }}
                            title="Delete task"
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
                    <title>IVY: Tasks</title>
                </Helmet>
                <h1 className="uk-heading-line uk-text-center">
                    <span>Tasks</span>
                </h1>
                {
                    this.props.taskList &&
                    <ul className="uk-list">
                        {this.renderTask()}
                    </ul>
                }
                <Route exact path="/tasks" render={() => {
                    return <Link className="uk-button uk-button-default uk-button-small" to="/tasks/new">Add</Link>
                }}/>
                <Route path="/tasks/new" component={NewTask}/>
            </div>
        );
    }
}


export const Tasks = connect(mapStateToProps, { fetchTasks, deleteTask, taskChecked })(requireAuth(TasksPage));
