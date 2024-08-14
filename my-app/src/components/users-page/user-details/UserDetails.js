import React, { useEffect, useState } from 'react'
import UserDetailsPermissions from './UserDetailsPermissions'
import UserDetailsSelectedPermissions from './UserDetailsSelectedPermissions'
import UserDetailsButtons from './UserDetailsButtons'
import UserInfos from './UserInfos'
import permissionsData from "../../../data/permissions";

const UserDetails = ({ currentUser }) => {

    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            //[coklu fetch kullanma] promise.all()
            try {
                const permisionResponse = await fetch('http://127.0.0.1:8000/permissions/')
                const permissionData = await permisionResponse.json();
                setPermissions(permissionData)
            } catch (e) {
                console.log(e);
            }
        }
        getData()
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
        <div className="users-page-user-details ">

            <UserInfos currentUser={currentUser} />

            <UserDetailsPermissions permissions={permissions} selectPermission={selectPermission} />

            <UserDetailsSelectedPermissions selectedPermissions={selectedPermissions} removePermission={removePermission} />

            <UserDetailsButtons />

        </div>
    )
}

export default UserDetails
