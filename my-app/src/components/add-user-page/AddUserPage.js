import React, { useState } from "react";
import '../../css/register-page.css';
import { v4 as uuid } from 'uuid';
import permissionsData from "../../data/permissions";

import InputComponent from "../form-components/InputComponent";
import SelectOptions from "../form-components/SelectOptions";

const AddUserPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        role: '',
        employeeid: '',
        branch: '',
        email: '',
        phoneNumber: '',
        password: '',
        id: '',
    });

    const [permissions, setPermissions] = useState(permissionsData);
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const selectPermission = (perId) => {
        const selectedPermission = permissions.find(per => per.id === perId);
        setSelectedPermissions(prev => [selectedPermission, ...prev]);
        setPermissions(prev => prev.filter(per => per.id !== perId));
    };

    const removePermission = (perID) => {
        const removedPermission = selectedPermissions.find(per => per.id === perID);
        setPermissions(prev => [removedPermission, ...prev]);
        setSelectedPermissions(prev => prev.filter(per => per.id !== perID));
    };

    const clearAllPermissions = () => {
        setPermissions(prev => [...prev, ...selectedPermissions]);
        setSelectedPermissions([]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <main className="register-page">
            <div className="register-container">
                <h3 className="register-title">Kullanıcı Ekle</h3>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="column">

                            <InputComponent
                                label="İsim"
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder={"Personel İsmi"}
                            />
                            <InputComponent
                                label="Kullanıcı Adı"
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder={"Personel019"}
                            />
                            <InputComponent
                                label="Personel Numarası"
                                type="text"
                                id="employeeID"
                                value={formData.employeeID}
                                onChange={handleChange}
                                placeholder={"12345678"}
                            />
                            <InputComponent
                                label="Personel Emaili"
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={"example@gmail.com"}
                            />
                            <InputComponent
                                label="Şifre"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder={"****"}
                            />

                        </div>

                        <div className="column">



                            <InputComponent
                                label="Soyisim"
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder={"Personel Soyismi"}
                            />
                            <SelectOptions
                                label="Rol"
                                options={roles}
                                placeholder={"Lütfen rol seçiniz"}
                            />
                            <SelectOptions
                                label="Şube"
                                options={branchs}
                                placeholder={"Lütfen şube seçiniz"}

                            />
                            <InputComponent
                                label="Telefon Numarası"
                                type="text"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder={"+90(533)___ __ __"}
                            />
                            <InputComponent
                                label="Kimlik Numarası"
                                type="text"
                                id="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder={"1234567890"}
                            />

                        </div>

                        <div className="column">

                            <div className="form-group-list">
                                <label htmlFor="availablePermissions">Mevcut İzinler</label>
                                <ul className="permission-list">
                                    {permissions.length > 0
                                        ? permissions.map(per => (
                                            <li key={uuid()} onClick={() => selectPermission(per.id)}>{per.name}</li>
                                        ))
                                        : <p>No permissions available</p>
                                    }
                                </ul>
                            </div>

                            <div className="form-group-list">
                                <label htmlFor="selectedPermissions">Şecilmiş İzinler</label>
                                <ul className="permission-list">
                                    {selectedPermissions.length > 0
                                        ? selectedPermissions.map(per => (
                                            <li key={uuid()} onClick={() => removePermission(per.id)}>{per.name}</li>
                                        ))
                                        : "No permission selected"
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="buttons-flex">
                        <button type="submit" className="register-button">EKLE</button>
                        <button type="button" className="clear-button" onClick={clearAllPermissions}>TEMIZLE</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddUserPage;

