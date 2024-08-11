import React, { useContext, useEffect, useState } from "react";
import UserDetails from "./user-details/UserDetails";
import UsersTable from "./users-table/UsersTable";
import UsersFilter from "./users-filter/UsersFilter";
import userData from '../../data/userData';

const UsersPage = () => {
    const [currentUser, setCurrentUser] = useState(
        {
            id: '-',
            username: "username",
            password: "password",
            email: 'email',
            userId: "000000000",
            name: "name",
            surname: 'surname',
            mobileNumber: "0000000",
            branch: "bölge",
            grup: "1",
            isActive: false
        }
    );

    const [search, setSearch] = useState('')
    const [searchOption, setSearchOption] = useState('Kullanıcı Adı')

    const [users, setUsers] = useState(userData)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/users')
                const data = await response.json()
                const updatedUsers = data.map(user => ({ ...user, isActive: false }));
                setUsers(updatedUsers)
            } catch (e) {
                console.log(e);
            }
        }

        getUsers();
    }, [])


    useEffect(() => {
        const _updatedUsers = users.map(user => {
            user.id === currentUser.id ? user.isActive = true : user.isActive = false
            return user
        });
        setUsers(_updatedUsers)
    }, [currentUser])


    return (
        <main className="user-list-page">
            <div className="user-list-container">
                <UserDetails currentUser={currentUser} />

                <UsersFilter search={search} setSearch={setSearch} searchOption={searchOption} setSearchOption={setSearchOption} />

                <UsersTable setCurrentUser={setCurrentUser} users={users} />
            </div>
        </main>
    );
}

export default UsersPage;