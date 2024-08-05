import React from 'react'

const UserDetailsPermissions = ({ permissions, selectPermission }) => {
    return (
        <div className='user-list-user-permissions-column'>
            <h5>Kullanici Izinleri</h5>
            <ul className='user-list-permissions-list'>
                {permissions.map(per => <li onClick={() => selectPermission(per.id)}>{per.name}</li>)}
            </ul>
        </div>
    )
}

export default UserDetailsPermissions
