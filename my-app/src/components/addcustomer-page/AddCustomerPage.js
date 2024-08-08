import React, { useState } from "react";
import '../../css/customer-page.css';
import { v4 as uuid } from 'uuid';
import InputComponent from "../form-components/InputComponent";
import SelectOptions from "../form-components/SelectOptions";

const AddCustomerPage = () => {
    const [formData, setFormData] = useState({
        customerIDCardNo: '',
        customerFirstName: '',
        customerLastName: '',
        customerAccountNumber: '',
        customerType: '',
        customerAddress: '',
        customerEmail: '',
        customerPhoneNumber: '',
        customerBankBranch: '',
    });

    const customerType = ["Bireysel", "Ticari"];

    const branchs = [
        "Head Office",
        "Sarayönü",
        "Küçükkaymaklı",
        "Gönyeli",
        "Köşklüçiftlik",
        "Mağusa",
        "Girne",
        "Alsancak",
        "Çatalköy",
        "Gemikonağı",
        "Güzelyurt",
        "Akdoğan",
        "İskele"
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let customers = JSON.parse(localStorage.getItem('customers')) || [];
        customers.push({ ...formData, roles: [formData.role] });
        localStorage.setItem('customers', JSON.stringify(customers));
        alert('Customer added successfully!');
    };

    return (
        <main className="customer-register-page">
            <div className="customer-register-container">
                <h3 className="customer-register-title">MÜŞTERİ EKLE</h3>
                <form className="customer-register-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="column">

                            <InputComponent
                                label="İsim"
                                type="text"
                                id="customerFirstName"
                                value={formData.customerFirstName}
                                onChange={handleChange}
                                placeholder="Müşteri İsim"
                            />
                            <InputComponent
                                label="Müşteri Hesap Numarası"
                                type="text"
                                id="customerAccountNumber"
                                value={formData.customerAccountNumber}
                                onChange={handleChange}
                                placeholder="Müşteri Hesap Numarası"
                            />
                            <InputComponent
                                label="Müşteri Telefon Numarası"
                                type="text"
                                id="customerPhoneNumber"
                                value={formData.customerPhoneNumber}
                                onChange={handleChange}
                                placeholder="+90(5)___ ___ __ __"
                            />
                            <InputComponent
                                label="Soyisim"
                                type="text"
                                id="customerLastName"
                                value={formData.customerLastName}
                                onChange={handleChange}
                                placeholder="Müştei Soyisim"
                            />
                            <InputComponent
                                label="Müşteri Adresi"
                                type="text"
                                id="customerAddress"
                                value={formData.customerAddress}
                                onChange={handleChange}
                                placeholder="Küçükkaymaklı/Lefkoşa..."
                            />
                            <SelectOptions
                                label="Müşteri Türü"
                                options={customerType}
                                placeholder="Seçiniz"
                            />
                        </div>


                        <div className="column">
                            <InputComponent
                                label="Müşteri Kimlik Numarası"
                                type="text"
                                id="customerIDCardNo"
                                value={formData.customerIDCardNo}
                                onChange={handleChange}
                                placeholder="1234567890"
                            />
                            <InputComponent
                                label="Müşteri Emaili"
                                type="email"
                                id="customerEmail"
                                value={formData.customerEmail}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                            />
                            <SelectOptions
                                label="Şube"
                                options={branchs}
                                placeholder="Lütfen şube seçiniz"
                            />
                        </div>
                    </div>
                    <div className="buttons-flex">
                        <button type="submit" className="customer-register-button">EKLE</button>
                        <button type="button" className="customer-clear-button">TEMİZLE</button>
                    </div>

                </form>
            </div>
        </main >
    );
};

export default AddCustomerPage;

