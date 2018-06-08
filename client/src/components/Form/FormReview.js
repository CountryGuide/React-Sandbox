import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logRender } from "../../utils/logger";
import { withRouter } from "react-router-dom";
import { createTask } from "../../actions/tasks";


class FormReviewComponent extends Component {
    renderFields() {
        return this.props.fields.map((field, i) => {
            return (
                <div key={i}>
                    <label className="uk-article-meta">{field.label}</label>
                    <div>{this.props.formValues[field.name]}</div>
                    <div className="uk-heading-divider"></div>
                </div>
            );
        });
    }

    render() {
        logRender(this);
        return (
            <div>
                {this.renderFields()}
                <div className="uk-padding-small uk-padding-remove-horizontal uk-flex uk-flex-between">
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        onClick={this.props.onCancel}>
                        Back
                    </button>
                    <button
                        className="uk-button uk-button-primary uk-button-small"
                        onClick={() => this.props.createTask(this.props.formValues, this.props.history)}>
                        {this.props.addBtnText}
                    </button>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ form }) {
    return { formValues: form.taskForm.values };
}

export const FormReview = connect(
    mapStateToProps,
    { createTask }
)(withRouter(FormReviewComponent));

