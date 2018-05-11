import React from 'react';


export const TaskField = ({ input, label, meta: { error, touched, active } }) => {
    return (
        <div>
            <label>
                <span className="uk-form-label">{label}</span>
                <div className="uk-form-controls">
                    <input className="uk-input uk-form-small" {...input}/>
                </div>
            </label>
        </div>
    );
};
