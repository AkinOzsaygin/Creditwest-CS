import React, { useState, useEffect } from "react";
import '../../css/register-page.css';
import { v4 as uuid } from 'uuid'

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
        permissions: ''
    });

    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);


    useEffect(() => {
        const getPermissions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/permissions/')
                const data = await response.json()
                setPermissions(data);
            } catch (e) {
                console.log(e);
            }
        }
        getPermissions();
    }, [])


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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ ...formData, roles: [formData.role] });
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
    };

    return (
        <main className="register-page">
            <div className="register-container">
                <h3 className="register-title">Kullanıcı Ekle</h3>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">İsim</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Soyisim</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Permissions">Permissions</label>
                            <ul className="permission-list">
                                {
                                    permissions.length > 0
                                        ? permissions.map(per => <li key={uuid()} onClick={() => selectPermission(per.id)}>{per.name}</li>)
                                        : <p>Permissions</p>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="username">Kullanıcı adı</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Personel01"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Rol</label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Admin"
                                required
                            >
                                <option value="">Seçin</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>


                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Permissions">Permissionszz</label>
                            <ul className="permission-list">
                                {
                                    selectedPermissions.length > 0
                                        ? selectedPermissions.map(per =>
                                            <li
                                                onClick={() => removePermission(per.id)}
                                                key={uuid()}>
                                                {per.name}
                                            </li>)
                                        : "No permission Selected"
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="employeeid">Çalışan Numarası</label>
                            <input
                                type="text"
                                id="employeeid"
                                name="employeeid"
                                value={formData.employeeid}
                                onChange={handleChange}
                                placeholder="12345678"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="branch">Şube</label>
                            <select
                                id="branch"
                                name="branch"
                                value={formData.branch}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Seçin</option>
                                <option value="Head Office">Head Office</option>
                                <option value="Center Branch">Center Branch</option>
                                <option value="Sarayönü Branch">Sarayönü Branch</option>
                                <option value="Küçükkaymaklı Branch">Küçükkaymaklı Branch</option>
                                <option value="Gönyeli Branch">Gönyeli Branch</option>
                                <option value="Köşklüçiftlik Branch">Köşklüçiftlik Branch</option>
                                <option value="Famagusta Branch">Famagusta Branch</option>
                                <option value="Kyrenia Branch">Kyrenia Branch</option>
                                <option value="Alsancak Branch">Alsancak Branch</option>
                                <option value="Çatalköy Branch">Çatalköy Branch</option>
                                <option value="Gemikonağı Branch">Gemikonağı Branch</option>
                                <option value="Güzelyurt Branch">Güzelyurt Branch</option>
                                <option value="Akdoğan Branch">Akdoğan Branch</option>
                                <option value="İskele Branch">İskele Branch</option>
                            </select>
                        </div>
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="personel01@gmail.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Telefon Numarası</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="##########"
                                required
                            />
                        </div>
                        <div className="form-group">

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Şifre</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="************"
                                required
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="Kimlik numarası">Kimlik numarası</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder="12345678"
                                required
                            />
                        </div>
                        <div className="form-group">

                        </div>
                    </div>

                    <button type="submit" className="register-button">KULLANICI EKLE</button>
                </form>
            </div>
        </main>
    );
};

export default AddUserPage;
