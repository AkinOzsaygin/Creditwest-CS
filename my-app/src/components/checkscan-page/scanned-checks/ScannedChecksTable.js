import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import CheckRow from "./CheckRow";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const ScannedChecksTable = ({ scannedChecks, setCurrentCheck, setScannedChecks, checkSequnceReverse }) => {



    const reverseCheckSequence = () => {
        setScannedChecks([...scannedChecks.reverse()]);
        checkSequnceReverse.current = !checkSequnceReverse.current;
    }

    //Table Scanned Checks Items
    const scannedCheckRows = scannedChecks.map(check => <CheckRow key={uuid()} setCurrentCheck={setCurrentCheck} check={check} />);

    return (
        <div className="scanned-checks-table-wrapper">
            <table className="scanned-checks-table">
                <tbody>

                    <tr className="header-row">
                        <th>
                            <span className='header-row-th'>
                                Çek Sırası
                                {
                                    !checkSequnceReverse.current
                                        ? <FaArrowDown onClick={reverseCheckSequence} className='scanned-checks-table-arrow' size={12.5} />
                                        : <FaArrowUp onClick={reverseCheckSequence} className='scanned-checks-table-arrow' size={12.5} />
                                }
                            </span>
                        </th>

                        <th>Çek Numarası</th>
                        <th>Çek Sahibi</th>
                        <th>Hesap Numarası</th>
                        <th>Banka</th>
                        <th>Şube</th>
                        <th>Bölge</th>
                        <th>Hamili</th>
                        <th>Çek Tarihi</th>
                        <th>Döviz Cinsi</th>
                        
                        <th>
                            <span className='header-row-th'>
                                Çek Miktari
                                {/* {
                                    !checkSequnceReverse.current
                                        ? <FaArrowDown onClick={reverseCheckSequence} className='scanned-checks-table-arrow' size={12.5} />
                                        : <FaArrowUp onClick={reverseCheckSequence} className='scanned-checks-table-arrow' size={12.5} />
                                } */}
                            </span>
                        </th>
                    </tr>

                    {scannedCheckRows}
                </tbody>
            </table>
        </div>
    )
}

export default ScannedChecksTable