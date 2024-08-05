import React, { useState } from 'react'
import UserDetailsPermissions from './UserDetailsPermissions'
import UserDetailsSelectedPermissions from './UserDetailsSelectedPermissions'
import UserDetailsButtons from './UserDetailsButtons'
import UserInfos from './UserInfos'
import permissionsData from "../../../data/permissions";

const UserDetails = () => {

    const [permissions, setPermissions] = useState(permissionsData);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

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
        <div className="user-list-user-details">

            <UserInfos />

            <UserDetailsPermissions permissions={permissions} selectPermission={selectPermission} />

            <UserDetailsSelectedPermissions selectedPermissions={selectedPermissions} removePermission={removePermission} />

            <UserDetailsButtons />

        </div>
    )
}

export default UserDetails
