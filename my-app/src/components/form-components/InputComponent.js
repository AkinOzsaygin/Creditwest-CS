import React from 'react'

function InputComponent({label, id, type, value, onChange, placeholder}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
        </div>
    );
}

export default InputComponent