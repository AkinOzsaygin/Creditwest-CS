import React from 'react'
import { IoMdSearch } from "react-icons/io";

const UsersFilter = () => {
    return (
        <div className="user-list-user-search-filter-bar">
            <div className="user-list-search-flex">
                <input
                    type="text"
                    placeholder="Kullanıcı Ara"
                />
                <button className="search-button">
                    {<IoMdSearch size={22} />}
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
