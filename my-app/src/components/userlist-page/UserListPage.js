import React from "react";
import UserInfo from "./UserDetails/UserDetails";

const UserListPage = () => {
    return (
        <main className="user-list-page">
            <div className="user-list-container">

                <UserInfo />

                <div className="user-list-user-search-filter-bar">

                </div>

                <div className="user-list-table">

                </div>
            </div>
        </main>
    );
}

export default UserListPage;