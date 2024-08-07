import React from 'react'

const UserDetailsPermissions = ({ permissions, selectPermission }) => {
    return (
        <div className='user-list-user-permissions-column'>
            <h5>Kullanıcı İzinleri</h5>
            <div className='user-list-permissions-list-wrapper'>
                <ul className='user-list-permissions-list'>
                    {permissions.map(per => <li onClick={() => selectPermission(per.id)}>{per.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default UserDetailsPermissions
