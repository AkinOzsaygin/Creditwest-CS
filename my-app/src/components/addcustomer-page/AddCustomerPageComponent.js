import React from "react";

function AddCustomerPageComponent({label, type, id, value, onChange, placeholder, required, options}){

    return(
        <div className="form-group">
        <label htmlFor="">{label}</label>
        {type === "text" || type === "password" || type === "email" ?(
            <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
        />
        ):
         type === "select" ? (
            <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        ) : null}
    </div>
    );
}

export default AddCustomerPageComponent