import React from 'react';

function InputComponent({ label, id, type, value, onChange, placeholder }) {
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = type === 'tel' ? inputValue.replace(/[^0-9]/g, "") : inputValue; // Sadece rakamları kabul eder
        onChange({ target: { id, value: numericValue, name: id } });
    };

    return (
        <div className="form-group-register">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                required
                name={id}
            />
        </div>
    );
}

export default InputComponent;
