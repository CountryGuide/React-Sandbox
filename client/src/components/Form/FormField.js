import React from 'react';


export const FormField = ({ input, label, type, options, meta: { touched, error, active } }) => {
    const inputField = (type) => {
        return (
            <input className="uk-input uk-form-small"{...input} type={type}/>
        );
    };
    const selectField = () => {
        return (
            <select className="uk-select uk-form-small" {...input}>
                {
                    options.map((option, i) => <option value={option} key={i} defaultValue={0}>{option}</option>)
                }
            </select>
        )
    };
    const getFieldType = (type) => {
        switch (type) {
            case 'text':
            case 'number':
                return inputField(type);
            case 'select':
                return selectField();
            default:
                return null;
        }
    };
    return (
        <div className="form__field">
            <label>
                <span className="uk-form-label">{label}</span>
                <div className="uk-form-controls">
                    {
                        getFieldType(type)
                    }
                    <span className="uk-text-danger">{(touched && error && !active && error) || null}</span>
                </div>
            </label>
        </div>
    );
};
