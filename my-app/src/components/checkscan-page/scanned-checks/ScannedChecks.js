import React from "react";
import ScannedChecksTable from "./ScannedChecksTable";



const ScannedChecks = ({ scannedChecks, setCurrentCheck, setScannedChecks,checkSequnceReverse  }) => {

  
    return (
        <div className="scanned-checks-container">

            <h3 className="check-scan-page-sub-title">Okunmus Çekler</h3>

            <ScannedChecksTable 
                scannedChecks={scannedChecks} 
                setCurrentCheck={setCurrentCheck}
                setScannedChecks={setScannedChecks}
                checkSequnceReverse={checkSequnceReverse}
            />

        </div>
    );
};

export default ScannedChecks;