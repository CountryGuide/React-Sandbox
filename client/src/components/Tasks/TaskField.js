import React from 'react';


export const TaskField = ({ input, label, meta: { touched, error, active } }) => {
    return (
        <div className="new-task-form__field">
            <label>
                <span className="uk-form-label">{label}</span>
                <div className="uk-form-controls">
                    <input
                        className="uk-input uk-form-small"
                        {...input}/>
                    <span
                        className="uk-text-danger">{(touched && error && !active && error) || null}</span>
                </div>
            </label>
        </div>
    );
};
