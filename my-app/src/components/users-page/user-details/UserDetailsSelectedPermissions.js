import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const UserDetailsSelectedPermissions = ({ selectedPermissions }) => {
    return (
        <div className='user-list-user-permissions-column'>

            <h5>Kullanıcının İzinleri</h5>
            <ul className='user-list-selected-permissions-list'>
                {
                    selectedPermissions.length > 0
                        ? selectedPermissions.map(per => 
                        <li>{per.name}
                        
                        <FaRegArrowAltCircleLeft className='user-page-selected-permission-arrrow-left'/>
                        </li>)
                        : <p className='no-permission-text'>Kullanıcıya ait bir izin bulunmuyor !</p>
                }
            </ul>

        </div>
    )
}

export default UserDetailsSelectedPermissions
