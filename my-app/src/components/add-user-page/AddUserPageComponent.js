import React from "react";

function AddUserPageComponent({label, type, id, value, onChange, placeholder}){

    return(
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

export default AddUserPageComponent