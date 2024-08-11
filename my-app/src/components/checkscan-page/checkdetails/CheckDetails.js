import React from "react";
import { MagnifyingGlass } from 'react-loader-spinner';
import CheckDetail from "./CheckDetail";
import { TbSquareCheckFilled } from "react-icons/tb";
import { TbRosetteDiscountCheck } from "react-icons/tb";

const CheckDetails = ({ checkSequence, bankName, checkOwner, accountNumber, checkNumber, checkAmount, isLoading, setCurrentCheck }) => {

    return (
        <div className="check-details-container">
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-between", marginBottom: '.3rem' }}>
                <h3 style={{ margin: '0' }} className="container-sub-title">Çek Bilgileri</h3>
                <button className="confirm-button" >
                    Onayla
                    <TbRosetteDiscountCheck className="confirm-button-icon" size={17} />
                </button>

            </div>

            {!isLoading
                ? <>
                    <div className="check-detail-labels-container">
                        <div className="check-detail-labels-column">

                            {/* <CheckDetail label={"Çek Sırası:"} text={checkSequence} setCurrentCheck={setCurrentCheck} state={'checkSequnce'} /> */}
                            <CheckDetail label={"Banka:"} text={bankName} setCurrentCheck={setCurrentCheck} state={'bankName'} />
                            <CheckDetail label={"Çek Sahibi:"} text={checkOwner} setCurrentCheck={setCurrentCheck} state={'checkOwner'} />
                            <CheckDetail label={"Hesap Numarası:"} text={accountNumber} setCurrentCheck={setCurrentCheck} state={'accountNumber'} />
                            <CheckDetail label={"Çek Numarası:"} text={checkNumber} setCurrentCheck={setCurrentCheck} state={'checkNumber'} />
                            <CheckDetail label={"Çek Miktarı:"} text={checkAmount} setCurrentCheck={setCurrentCheck} state={'checkAmount'} />

                        </div>

                        <div className="check-detail-labels-column">
                            <CheckDetail label={"Şube:"} text={checkSequence} setCurrentCheck={setCurrentCheck} state={'checkSequnce'} />
                            <CheckDetail label={"Bölge:"} text={bankName} setCurrentCheck={setCurrentCheck} state={'bankName'} />
                            <CheckDetail label={"Ödenecek Kişi:"} text={checkOwner} setCurrentCheck={setCurrentCheck} state={'checkOwner'} />
                            <CheckDetail label={"Çek Tarihi:"} text={accountNumber} setCurrentCheck={setCurrentCheck} state={'accountNumber'} />
                            <CheckDetail label={"Param Birimi:"} text={checkNumber} setCurrentCheck={setCurrentCheck} state={'checkNumber'} />
                            {/* <button className="confirm-button">Onayla</button> */}
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