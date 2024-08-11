import React, { useEffect, useState } from "react";
import '../../css/register-page.css';
import { v4 as uuid } from 'uuid';
import permissionsData from "../../data/permissions";
import InputComponent from "../form-components/InputComponent";
import SelectOptions from "../form-components/SelectOptions";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";



const branchs = [
    "Head Office",
    "Sarayonu",
    "Kucukkaymakli",
    "Gonyeli",
    "Koskluciftlik",
    "Magusa",
    "Girne",
    "Alsancak",
    "Catalkoy",
    "Gemikonagi",
    "Guzelyurt",
    "Akdogan",
    "Iskele"
]

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

    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [groups, setGroups] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const permisionResponse = await fetch('http://127.0.0.1:8000/permissions/')
                const permissionData = await permisionResponse.json();

                const groupResponse = await fetch('http://127.0.0.1:8000/groups/')
                const groupData = await groupResponse.json()

                setPermissions(permissionData)
                setGroups(groupData)

            } catch (e) {
                console.log(e);
            }
        }
        getData()
    }, [])

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedPermisionIds = selectedPermissions.map(permission => permission.id)

        const requestBody = {
            email: formData.email,
            username: formData.username,
            password: formData.password,
            name: formData.firstName,
            surname: formData.lastName,
            employee_id: 3,
            branch: 1,
            phone: formData.phoneNumber,
            groups: [],
            user_permissions: selectedPermisionIds
        }

        const options = {
            method: "POST",
            headers: new Headers({ 'content-type': 'application/json' }),
        }

        options.body = JSON.stringify(requestBody)

        try {
            const response = await fetch('http://127.0.0.1:8000/users/signup/', options);
            const data = await response.json()
            console.log(data);
        } catch (e) {
            console.log(e);
        }

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
                                type="number"
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
                                label="Group"
                                options={groups}
                                placeholder={"Lütfen rol seçiniz"}
                            />
                            <SelectOptions
                                label="Şube"
                                options={branchs}
                                placeholder={"Lütfen şube seçiniz"}

                            />
                            <InputComponent
                                label="Telefon Numarası"
                                type="number"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder={"+90(533)___ __ __"}
                            />
                            <InputComponent
                                label="Kimlik Numarası"
                                type="number"
                                id="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder={"1234567890"}
                            />

                        </div>

                        <div className="column">

                            <div className="form-group-add-permissions-list">
                                <label htmlFor="availablePermissions"><h2 className="permissions-title">Mevcut İzinler</h2></label>
                                <ul className="availablePermissions-list">
                                    {permissions.length > 0
                                        ? permissions.map(per => (
                                            <li key={uuid()} onClick={() => selectPermission(per.id)}>{per.name}
                                                <FaRegArrowAltCircleDown className="availablePermissions-down-arrow"></FaRegArrowAltCircleDown>
                                            </li>
                                        ))
                                        : <p>Mevcut izin bulunmamakta</p>
                                    }
                                </ul>
                            </div>

                            <div className="form-group-add-permissions-list">
                                <label htmlFor="selectedPermissions"><h2 className="selected-permissions-title">Şecilmiş İzinler</h2></label>
                                <ul className="selectedPermissions-list">
                                    {selectedPermissions.length > 0
                                        ? selectedPermissions.map(per => (
                                            <li key={uuid()} onClick={() => removePermission(per.id)}>{per.name}
                                                <FaRegArrowAltCircleUp className="selectedPermissions-up-arrow"></FaRegArrowAltCircleUp>
                                            </li>
                                        ))
                                        : "Secili izin bulunmamakta"
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="buttons-flex">
                        <button type="submit" className="register-button" onClick={handleSubmit}>EKLE</button>
                        <button type="button" className="clear-button" onClick={() => { }}>TEMIZLE</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default AddUserPage;

