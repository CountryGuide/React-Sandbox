import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoFormReviewComponent extends Component {
    render() {
        return (
            <div>
                Review
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export const TodoFormReview = connect(
    mapStateToProps,
)(TodoFormReviewComponent);

