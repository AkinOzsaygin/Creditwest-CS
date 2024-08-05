import React from 'react'

const UserInfos = () => {
    return (
        <div className='user-list-details-column-wrapper'>

            <h5>Kullanici bilgileri</h5>
            <div className='flex'>
                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label>
                            id:
                        </label>
                        <p className='user-list-user-info-text'>1</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Kullanıcı Adı:
                        </label>
                        <p className='user-list-user-info-text'>Kadir1234</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Sifre:
                        </label>
                        <p className='user-list-user-info-text'>HASHED_PASSWORD</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label>
                            Email:
                        </label>
                        <p className='user-list-user-info-text'>kadir@mail.con</p>
                    </div>
                    <div className="user-list-user-info-group">
                        <label>
                            Kimlik Numarası:
                        </label>
                        <p className='user-list-user-info-text'>1012303012</p>
                    </div>

                </div>

                <div className='user-list-user-details-column'>

                    <div className="user-list-user-info-group">
                        <label>
                            Ad:
                        </label>
                        <p className='user-list-user-info-text'>Kadir</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Soyad:
                        </label>
                        <p className='user-list-user-info-text'>Senbulbul</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Telefon Numarası
                        </label>
                        <p className='user-list-user-info-text'>1010102002</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Bölge
                        </label>
                        <p className='user-list-user-info-text'>Lefkosa</p>
                    </div>

                    <div className="user-list-user-info-group">
                        <label>
                            Grup:
                        </label>
                        <p className='user-list-user-info-text'>Manager</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserInfos
