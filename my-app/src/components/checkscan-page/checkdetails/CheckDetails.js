import React from "react";
import { MagnifyingGlass } from 'react-loader-spinner';
import CheckDetail from "./CheckDetail";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const CheckDetails = (
    {
        id,
        checkSequence,
        bankName,
        checkOwner,
        accountNumber,
        checkNumber,
        amount,
        isLoading,
        setCurrentCheck,
        checkCurrency,
        checkDate,
        payee_name,
        regionName,
        updateCheck
    }
) => {

    return (
        <div className="check-details-container">
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", marginBottom: '.3rem' }}>
                <h3 style={{ margin: '0' }} className="container-sub-title">Çek Bilgileri</h3>
                <button onClick={() => {updateCheck(id)}} className="confirm-button" >
                    Onayla
                    <TbRosetteDiscountCheck className="confirm-button-icon" size={17} />
                </button>
                {/* <button onClick={() => {updateCheck(id)}} className="confirm-button" >
                    Reddet
                    <TbRosetteDiscountCheck className="confirm-button-icon" size={17} />
                </button> */}
            </div>

            {!isLoading
                ? <>
                    <div className="check-detail-labels-container">
                        <div className="check-detail-labels-column">

                            <CheckDetail label={"Çek Sırası:"} disabled={true} text={checkSequence} setCurrentCheck={setCurrentCheck} state={'checkSequnce'} />
                            <CheckDetail label={"Çek Sahibi:"} text={checkOwner} setCurrentCheck={setCurrentCheck} state={'check_owner'} />
                            <CheckDetail label={"Hesap Numarası:"} text={accountNumber} setCurrentCheck={setCurrentCheck} state={'account_number'} />
                            <CheckDetail label={"Çek Numarası:"} text={checkNumber} setCurrentCheck={setCurrentCheck} state={'check_number'} />
                            <CheckDetail label={"Çek Miktarı:"} text={amount} setCurrentCheck={setCurrentCheck} state={'amount'} />
                        </div>

                        <div className="check-detail-labels-column">
                            <CheckDetail label={"Banka:"} text={bankName} setCurrentCheck={setCurrentCheck} state={'bank_name'} />
                            <CheckDetail label={"Bölge:"} text={regionName} setCurrentCheck={setCurrentCheck} state={'regionName'} />
                            <CheckDetail label={"Ödenecek Kişi:"} text={payee_name} setCurrentCheck={setCurrentCheck} state={'payee_name'} />
                            <CheckDetail label={"Çek Tarihi:"} text={checkDate} setCurrentCheck={setCurrentCheck} state={'checkDate'} />
                            <CheckDetail label={"Para Birimi:"} text={checkCurrency} setCurrentCheck={setCurrentCheck} state={'currency'} />                       
                        </div>

                    </div>
                </>
                : <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass="magnifying-glass-wrapper spinner"
                    glassColor="#c0efff"
                    color="#e15b64"
                />
            }
        </div>
    )
};

export default CheckDetails;