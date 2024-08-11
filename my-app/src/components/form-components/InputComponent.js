import React from 'react'

function InputComponent({ label, id, type, value, onChange, placeholder }) {

    return (
        <div className="form-group-register">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                name={id}
            />
        </div>
    );
}

export default InputComponent