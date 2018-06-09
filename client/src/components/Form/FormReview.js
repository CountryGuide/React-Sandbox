import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logRender } from "../../utils/logger";
import { withRouter } from "react-router-dom";


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
        console.clear();
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
                        onClick={() => this.props.submitFunction(this.props.formValues, this.props.history)}>
                        {this.props.addBtnText}
                    </button>
                </div>
            </div>
        );
    }
}


function mapStateToProps({ form }) {
    return { formValues: form.submitForm.values };
}

export const FormReview = connect(
    mapStateToProps
)(withRouter(FormReviewComponent));

