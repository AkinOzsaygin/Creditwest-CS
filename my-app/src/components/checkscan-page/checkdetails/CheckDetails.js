import React from "react";
import { RotatingSquare, MagnifyingGlass } from 'react-loader-spinner';

const CheckDetails = ({ checksequence, bankName, checkOwner, accountNumber, checkNumber, checkAmount, isLoading }) => {

    return (
        <div className="check-details-container">
            <h3 className="container-sub-title">Çek Bilgileri</h3>

            {!isLoading
                ? <>
                    <div className="check-detail-labels-container">

                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Çek Sırası:</label>
                            <span className="check-detail-text">{checksequence}</span>
                        </div>

                        <div className="check-detail-label-group">
                            <label className="check-detail-label">Banka:</label>
                            <span className="check-detail-text">{bankName}</span>
                        </div>

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
{/* <RotatingSquare color="#015CA9" wrapperClass="spinner" /> */ }
export default CheckDetails;