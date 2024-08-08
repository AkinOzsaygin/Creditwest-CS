import React from "react";
import { RotatingSquare, MagnifyingGlass } from 'react-loader-spinner';
import CheckDetail from "./CheckDetail";
<<<<<<< HEAD

=======
>>>>>>> 8ac4681a7b839d63f9c05be0c44006958de3bb48
const CheckDetails = ({ checksequence, bankName, checkOwner, accountNumber, checkNumber, checkAmount, isLoading }) => {

    return (
        <div className="check-details-container">
            <h3 className="container-sub-title">Çek Bilgileri</h3>

            {!isLoading
                ? <>
                    <div className="check-detail-labels-container">

<<<<<<< HEAD
                        <CheckDetail label={"Çek Sırası:"} text={checksequence}/>
                        <CheckDetail label={"Banka:"} text={bankName}/>
                        <CheckDetail label={"Çek Sahibi:"} text={checkOwner}/>
                        <CheckDetail label={"Hesap Numarası:"} text={accountNumber}/>
                        <CheckDetail label={"Çek Numarası:"} text={checkNumber}/>
                        <CheckDetail label={"Çek Miktarı:"} text={checkAmount}/>
=======
                        <CheckDetail label={'Çek Sırası:'} text={checksequence} />


                        <CheckDetail label={'Banka:'} text={bankName} />


                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Çek Sahibi:</label>
                            <span className="check-detail-text">{checkOwner}</span>
                        </div>

                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Hesap Numarası:</label>
                            <span className="check-detail-text">{accountNumber}</span>
                        </div>

                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Çek  Numarası:</label>
                            <span className="check-detail-text">{checkNumber}</span>
                        </div>

                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Çek Miktarı:</label>
                            <span className="check-detail-text">{checkAmount}</span>
                        </div>
>>>>>>> 8ac4681a7b839d63f9c05be0c44006958de3bb48

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