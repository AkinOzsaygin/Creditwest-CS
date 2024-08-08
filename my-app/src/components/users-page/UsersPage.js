import React, { useEffect, useMemo, useState } from "react";
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

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/checks')
                const data = await response.json()
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }

        getUsers()
    }, [])

    const updatedUsers = useMemo(() => {
        return users.map(user => ({ ...user, isActive: false }))
    }, [])


    //Nasil yaptigimi bende anlamadim aq
    useEffect(() => {
        const _updatedUsers = updatedUsers.map(user => {
            user.id === currentUser.id ? user.isActive = true : user.isActive = false
            return user
        });
        setUsers(_updatedUsers)
    }, [currentUser])

    // console.log(updatedUsers);

    return (
        <main className="user-list-page">
            <div className="user-list-container">
                <UserDetails currentUser={currentUser} />

                <UsersFilter />

                <UsersTable setCurrentUser={setCurrentUser} users={updatedUsers} />
            </div>
        </main>
    );
}

export default UsersPage;