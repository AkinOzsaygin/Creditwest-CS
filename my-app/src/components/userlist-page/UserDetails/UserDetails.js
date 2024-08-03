import React from 'react'
import UserDetailsPermissions from './UserDetailsPermissions'
import UserDetailsSelectedPermissions from './UserDetailsSelectedPermissions'
import UserDetailsButtons from './UserDetailsButtons'

const UserInfo = () => {
    return (
        <div className="user-list-user-details">

            <div className='user-list-details-column-wrapper'>

                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label>
                            id:
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Kullanıcı Adı:
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Sifre:
                        </label>
                        <p>-</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label>
                            Email:
                        </label>
                        <p>-</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label>
                            Kimlik Numarası:
                        </label>
                        <p>-</p>
                    </div>

                </div>

                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label>
                            Ad:
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Soyad:
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Telefon Numarası
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Bölge
                        </label>
                        <p>-</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Grup:
                        </label>
                        <p>-</p>

                    </div>

                </div>

            </div>

            <UserDetailsPermissions />

            <UserDetailsSelectedPermissions />

            <UserDetailsButtons />
        </div>
    )
}

export default UserInfo
