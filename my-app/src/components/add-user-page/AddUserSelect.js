import React from "react";

function AddUserSelect({ label, placeholder, options }) {
    const selectOptions = options.map(option =><option value={option}>{option}</option>)
    
    return (
        <div className="form-group">
            <label htmlFor="">{label}</label>

            <select>
                <option value="" selected disabled hidden >{placeholder}</option>
                {selectOptions}
            </select>
        </div>

    );
}

export default AddUserSelect