import React from 'react'

const SelectOptions = ({ label, options, placeholder }) => {

    const selectOptions = options.map(option => <option value={option.id}>{option.name}</option>)

    return (
        <div className="form-group-select-options">
            <label htmlFor="">{label}</label>

            <select>
                <option value="" selected disabled hidden >{placeholder}</option>
                {selectOptions}
            </select>
        </div>

    );
}

export default SelectOptions
