import React from 'react'

const UserDetailsSelectedPermissions = ({ selectedPermissions }) => {
    return (
        <div className='user-list-user-permissions-column'>

            <h5>Kullacininin Izinleri</h5>
            <ul className='user-list-selected-permissions-list'>
                {
                    selectedPermissions.length > 0
                        ? selectedPermissions.map(per => <li>{per.name}</li>)
                        : <p className='no-permission-text'>Kullaniciya ait bir izin bulunmuyor !</p>
                }
            </ul>

        </div>
    )
}

export default UserDetailsSelectedPermissions
