import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks.js/useAuth";
import { v4 as uuid } from 'uuid'



const LoginPage = () => {


    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const submit = async (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        const getPermissions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/permissions/')
                const data = await response.json()
                console.log(data);
                setPermissions(data)
            } catch (e) {
                console.log(e);
            }
        }
        getPermissions();
    }, [])


    const selectPermission = (perId) => {
        const selectedPermission = permissions.find(per => per.id === perId)
        setSelectedPermissions([selectedPermission, ...selectedPermissions])

        const updatedPermissions = permissions.filter(per => per.id !== perId)
        setPermissions(updatedPermissions)
    }

    const removePermission = (perID) => {
        const removedPermission = selectedPermissions.find(per => per.id === perID)
        setPermissions([removedPermission, ...permissions])

        const updatedSelectedPermissons = selectedPermissions.filter(per => per.id !== perID)
        setSelectedPermissions(updatedSelectedPermissons)
    }


    return (
        <main className="login-page">
            <div className="login-container">

                <h4>Available Permissions</h4>

                <ul className="permission-list">
                    {
                        permissions.length > 0
                            ? permissions.map(per =>
                                <li
                                    onClick={() => selectPermission(per.id)}
                                    key={uuid()}>
                                    {per.name}
                                </li>)
                            : "Permissions"
                    }
                </ul>

                <h4>Selected Permissions</h4>

                <ul className="selected-permission-list">
                    {
                        selectedPermissions.length > 0
                            ? selectedPermissions.map(per =>
                                <li
                                    onClick={() => removePermission(per.id)}
                                    key={uuid()}>
                                    {per.name}
                                </li>)
                            : "No permission Selected"
                    }
                </ul>


            </div>
        </main>
    )
};

export default LoginPage;


// if (username === 'admin') {

//     setAuth({ user: username, roles: [5150] });
//     navigate('layout');
//     localStorage.setItem('auth', JSON.stringify({ user: username, roles: [5150] }));

// } else if (username === 'manager') {

//     setAuth({ user: username, roles: [1984] });
//     navigate('layout');
//     localStorage.setItem('auth', JSON.stringify({ user: username, roles: [1984] }));

// } else if (username === 'user') {

//     setAuth({ user: username, roles: [2001] });
//     navigate('layout');
//     localStorage.setItem('auth', JSON.stringify({ user: username, roles: [2001] }));

// } else {
//     alert("Wrong Username or Password");
// }