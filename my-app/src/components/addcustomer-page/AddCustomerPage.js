import React, { useState } from "react";
import '../../css/customer-page.css';
import { v4 as uuid } from 'uuid';
import AddCustomerPageComponent from "./AddCustomerPageComponent";

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
                            <AddCustomerPageComponent
                                label="İsim"
                                type="text"
                                id="customerFirstName"
                                value={formData.customerFirstName}
                                onChange={handleChange}
                                placeholder={"Müşteri İsmi"}
                                required

                            />


                            <div className="form-group">
                                <label htmlFor="customerAccountNumber">Müşteri Hesap Numarası</label>
                                <input
                                    type="text"
                                    id="customerAccountNumber"
                                    name="customerAccountNumber"
                                    value={formData.customerAccountNumber}
                                    onChange={handleChange}
                                    placeholder="Customer Account Number"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customerPhoneNumber">Müşteri Telefon Numarası</label>
                                <input
                                    type="text"
                                    id="customerPhoneNumber"
                                    name="customerPhoneNumber"
                                    value={formData.customerPhoneNumber}
                                    onChange={handleChange}
                                    placeholder="+90(5)___ ___ __ __"
                                    required
                                />
                            </div>
                        </div>
                        <div className="column">
                            <div className="form-group">
                                <label htmlFor="customerLastName">Soyisim</label>
                                <input
                                    type="text"
                                    id="customerLastName"
                                    name="customerLastName"
                                    value={formData.customerLastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customerAddress">Müşteri Adresi</label>
                                <input
                                    type="text"
                                    id="customerAddress"
                                    name="customerAddress"
                                    value={formData.customerAddress}
                                    onChange={handleChange}
                                    placeholder="Küçükkaymaklı/Lefkoşa..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customerType">Müşteri Türü</label>
                                <select
                                    id="customerType"
                                    name="customerType"
                                    value={formData.customerType}
                                    onChange={handleChange}
                                    placeholder="Customer Type"
                                    required
                                >
                                    <option value="">Seçin</option>
                                    <option value="Bireysel">Bireysel Müşteri</option>
                                    <option value="Ticari">Ticari Müşteri</option>
                                </select>
                            </div>

                        </div>


                        <div className="column">
                            <div className="form-group">
                                <label htmlFor="customerIDCardNo">Müşteri Kimlik Numarası</label>
                                <input
                                    type="text"
                                    id="customerIDCardNo"
                                    name="customerIDCardNo"
                                    value={formData.customerIDCardNo}
                                    onChange={handleChange}
                                    placeholder="1234567890"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customerEmail">Müşteri Email</label>
                                <input
                                    type="email"
                                    id="customerEmail"
                                    name="customerEmail"
                                    value={formData.customerEmail}
                                    onChange={handleChange}
                                    placeholder="examplecustomer@gmail.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="customerBankBranch">Şube</label>
                                <select
                                    id="customerBankBranch"
                                    name="customerBankBranch"
                                    value={formData.customerBankBranch}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seçin</option>
                                    <option value="Head Office">Head Office</option>
                                    <option value="Merkez Şube">Merkez Şube</option>
                                    <option value="Sarayönü Şubesi">Sarayönü Şubesi</option>
                                    <option value="Küçükkaymaklı Şubesi">Küçükkaymaklı Şubesi</option>
                                    <option value="Gönyeli Şubesi">Gönyeli Şubesi</option>
                                    <option value="Köşklüçiftlik Şubesi">Köşklüçiftlik Şubesi</option>
                                    <option value="Mağusa Şubesi">Mağusa Şubesi</option>
                                    <option value="Girne Şubesi">Girne Şubesi</option>
                                    <option value="Alsancak Şubesi">Alsancak Şubesi</option>
                                    <option value="Çatalköy Şubesi">Çatalköy Şubesi</option>
                                    <option value="Gemikonağı Şubesi">Gemikonağı Şubesi</option>
                                    <option value="Güzelyurt Şubesi">Güzelyurt Şubesi</option>
                                    <option value="Akdoğan Şubesi">Akdoğan Şubesi</option>
                                    <option value="İskele Şubesi">İskele Şubesi</option>
                                </select>
                            </div>
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

