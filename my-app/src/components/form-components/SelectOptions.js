import React from 'react'
import { v4 as uuid } from 'uuid';

const SelectOptions = ({ label, options, placeholder, onChange, name }) => {

    const selectOptions = options.map((option, index) =>
        <option
            key={index}
            value={option.id}>
            {option.name}
        </option>);

    return (
        <div className="form-group-select-options">
            <label htmlFor="">{label}</label>

            <select name={name} onChange={onChange}>
                <option hidden >{placeholder}</option>
                {selectOptions}
            </select>
        </div>

    );
}

export default SelectOptions
