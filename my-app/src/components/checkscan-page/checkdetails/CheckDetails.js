import React from "react";
import { RotatingSquare, MagnifyingGlass } from 'react-loader-spinner';
import CheckDetail from "./CheckDetail";

const CheckDetails = ({ checksequence, bankName, checkOwner, accountNumber, checkNumber, checkAmount, isLoading }) => {

    return (
        <div className="check-details-container">
            <h3 className="container-sub-title">Çek Bilgileri</h3>

            {!isLoading
                ? <>
                    <div className="check-detail-labels-container">

                        <CheckDetail label={"Çek Sırası:"} text={checksequence} />
                        <CheckDetail label={"Banka:"} text={bankName} />
                        <CheckDetail label={"Çek Sahibi:"} text={checkOwner} />
                        <CheckDetail label={"Hesap Numarası:"} text={accountNumber} />
                        <CheckDetail label={"Çek Numarası:"} text={checkNumber} />
                        <CheckDetail label={"Çek Miktarı:"} text={checkAmount} />
                        <CheckDetail label={'Çek Sırası:'} text={checksequence} />
                        <CheckDetail label={'Banka:'} text={bankName} />

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