import React from "react";
import UserInfo from "./UserDetails";

const UserListPage = () => {
    return (
        <main className="user-list-page">
            <div className="user-list-container">

                <UserInfo />

                <div className="use-list-user-search-filter-bar">

                </div>

                <div className="user-list-table">

                </div>
            </div>
        </main>
    );
}

export default UserListPage;