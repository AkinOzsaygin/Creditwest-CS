import React from 'react'
import { v4 as uuid } from 'uuid';

const SelectOptions = ({ label, options, placeholder }) => {

    const selectOptions = options.map(option => <option key={uuid()} value={option.id}>{option.name}</option>)

    return (
        <div className="form-group-select-options">
            <label htmlFor="">{label}</label>

            <select>
                <option hidden >{placeholder}</option>
                {selectOptions}
            </select>
        </div>

    );
}

export default SelectOptions
