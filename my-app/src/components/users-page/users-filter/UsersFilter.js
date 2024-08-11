import React, { useState } from 'react'

import { MdOutlineManageSearch } from "react-icons/md";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

const UsersFilter = ({ search, setSearch, searchOption, setSearchOption }) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [showSearch, setShowSearch] = useState(true)
    return (
        <div className="user-list-user-search-filter-bar">
            <div className="user-list-search-flex">
                <input
                    type="text"
                    placeholder={`${searchOption} Giriniz`}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-button"
                    onClick={() => setShowDropDown(!showDropDown)}
                    onMouseEnter={() => setShowSearch(false)}
                    onMouseLeave={() => setShowSearch(true)}>
                    {
                        showSearch
                            ? <MdOutlineManageSearch size={24} />
                            : <HiMiniBarsArrowDown size={24} />
                    }
                    {
                        showDropDown && <div className='search-button-drop-down'>
                            <button onClick={(e) => setSearchOption(e.target.innerText)}>Kullanıcı Adı</button>
                            <button onClick={(e) => setSearchOption(e.target.innerText)}>Kimlik Numarası</button>
                            <button onClick={(e) => setSearchOption(e.target.innerText)}>Email</button>
                            <button onClick={(e) => setSearchOption(e.target.innerText)}>Telefon Numarası</button>
                        </div>
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
