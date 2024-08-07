import React from "react";
import ScannedChecksTable from "./ScannedChecksTable";



const ScannedChecks = ({ scannedChecks, setCurrentCheck, setScannedChecks }) => {


    return (
        <div className="scanned-checks-container">

            <h3 className="container-sub-title">Okunmus Çekler</h3>

            <ScannedChecksTable
                scannedChecks={scannedChecks}
                setCurrentCheck={setCurrentCheck}
                setScannedChecks={setScannedChecks}
            />

        </div>
    );
};

export default ScannedChecks;