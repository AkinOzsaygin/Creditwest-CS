import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const UserDetailsPermissions = ({ permissions, selectPermission }) => {
    return (
        <div className='user-list-user-permissions-column'>
            <h5>Kullanıcı İzinleri</h5>
            <div className='user-list-permissions-list-wrapper'>
                <ul className='user-list-permissions-list'>
                    {permissions.map(per =>
                        <li
                            onClick={() => selectPermission(per.id)}>
                            {per.name}
                            <FaRegArrowAltCircleRight className='user-page-selected-permission-arrrow' />
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default UserDetailsPermissions
