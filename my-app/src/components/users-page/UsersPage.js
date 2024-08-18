import React, { useContext, useEffect, useState } from "react";
import UserDetails from "./user-details/UserDetails";
import UsersTable from "./users-table/UsersTable";
import UsersFilter from "./users-filter/UsersFilter";
import useAuth from "../../hooks.js/useAuth";
import Popup from "../form-components/Popup";

const UsersPage = () => {

    const [currentUser, setCurrentUser] = useState(
        {
            id: '-',
            username: "",
            password: "********",
            email: '',
            employee_id: "",
            first_name: "",
            last_name: '',
            phone: "",
            branch: "",
            groups: [],
            user_permissions: [],
            isActive: false,
            newPassword: ""
        }
    );

    const [search, setSearch] = useState('');

    const [searchOption, setSearchOption] = useState('Kullanıcı Adı')

    const [users, setUsers] = useState([])

    const { auth } = useAuth();

    const [showPopup, setShowPopup] = useState(false)

    const [popUpOptions, setPopupOptions] = useState({});

    useEffect(() => {

        const getUsers = async () => {
            try {
                const headersList = {
                    "Authorization": `Bearer ${auth.token.access}`,
                };

                const response = await fetch('http://127.0.0.1:8000/users', { headers: headersList })
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    const updatedUsers = data.map(user => ({ ...user, isActive: false }));
                    setUsers(updatedUsers)
                    setCurrentUser(updatedUsers[0])
                }
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


    const deleteUser = async (id) => {

        try {
            //request options
            const options = {
                method: "DELETE",
                headers: new Headers({ "Authorization": `Bearer ${auth.token.access}` }),
            }

            //delete user from db
            const response = await fetch(`http://127.0.0.1:8000/users/${id}/`, options);

            //if response in 200 status delete user from state too
            if (response.ok) setUsers(prevUsers => prevUsers.filter(user => user.id !== id))

            setShowPopup(false)

        } catch (e) {
            console.log(e);
        }
    }

    const updateUser = async (id) => {

        const updateUser = {
            ...currentUser,
            groups: currentUser.groups.map(group => group.id),
            user_permissions: currentUser.user_permissions.map(permission => permission.id),
            password: !currentUser.newPassword ? currentUser.password : currentUser.newPassword
        }

        const options = {
            method: "PUT",
            headers: new Headers({ "Authorization": `Bearer ${auth.token.access}`, 'content-type': 'application/json' }),
            body: JSON.stringify(updateUser)
        }

        const response = await fetch(`http://127.0.0.1:8000/users/${id}/`, options);
        const data = await response.json();

        if (response.ok) {
            setUsers(prevUsers => prevUsers.map(user => user.id === id ? currentUser : user))
            setShowPopup(false)
        }
    }

    return (
        <main className="user-list-page">
            <div className="user-list-container">
                <UserDetails
                    currentUser={currentUser}
                    setUsers={setUsers}
                    setCurrentUser={setCurrentUser}
                    setPopupOptions={setPopupOptions}
                    setShowPopup={setShowPopup}
                />

                <UsersFilter
                    search={search}
                    setSearch={setSearch}
                    searchOption={searchOption}
                    setSearchOption={setSearchOption}
                />

                <UsersTable setCurrentUser={setCurrentUser} users={users} />
            </div>

            <Popup
                borderColor={popUpOptions.function === 'update' ? 'green' : 'red'}
                show={showPopup}
                message={`${currentUser.username} ${popUpOptions.message}`}
                setShowPopup={setShowPopup}
                id={currentUser.id}
                isYesOrNo={true}
                onYesClick={popUpOptions.function === 'update' ? updateUser : deleteUser}
            />
        </main>
    );
}

export default UsersPage;