import React, { useState } from 'react'

import { FaArrowDownWideShort } from "react-icons/fa6";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

const UsersFilter = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <div className="user-list-user-search-filter-bar">
            <div className="user-list-search-flex">
                <input
                    type="text"
                    placeholder="Kullanıcı Ara"
                />
                <button className="search-button" onClick={() => setShowDropDown(!showDropDown)}>
                    {<HiMiniBarsArrowDown size={24} />}
                    {
                        showDropDown && <div className='search-button-drop-down'>  Hello </div>
                    }
                </button>
            </div>

            <div className="user-list-search-buttons-flex">
                <button className="sort-button">Sırala</button>
                <button className="filter-button"> Fİltrele</button>
            </div>
        </div>
    )
}

export default UsersFilter
