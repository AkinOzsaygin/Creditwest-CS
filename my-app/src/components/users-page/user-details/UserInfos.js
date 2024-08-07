import React from 'react'

const UserInfos = ({ currentUser }) => {
    return (
        <div className='user-list-details-column-wrapper'>

            <h5 className=''>Kullanıcı bilgileri</h5>

            <div className='flex'>
                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            id:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.id}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Kullanıcı Adı:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.username}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Sifre:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.password}</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Email:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.email}</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Kimlik Numarası:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.userId}</p>
                    </div>

                </div>

                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Ad:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.name}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Soyad:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.surname}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Telefon Numarası
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.mobileNumber}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Bölge
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.branch}</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label className='user-info-label'>
                            Grup:
                        </label>
                        <p className='user-list-user-info-text'>{currentUser.grup}</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserInfos
