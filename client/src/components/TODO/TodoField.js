import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoFieldComponent extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {};
}

export const TodoField = connect(
    mapStateToProps,
)(TodoFieldComponent);

