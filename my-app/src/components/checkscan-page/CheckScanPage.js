import React, { useEffect, useRef, useState } from "react";
import ScannerDetails from "./scannerdetails/ScannerDetail";
import CheckDetails from "./checkdetails/CheckDetails";
import CheckImage from "./checkImage/CheckImage";
import ScannedChecks from "./scanned-checks/ScannedChecks";
import placeHolderImage from '../../images/Filling-Out-A-Check-Date.webp';
import CheckView from "./checkImage/CheckView";

import fakeCheckData from "../../data/checkdata";
import Overlay from "./checkImage/Overlay";

import useAuth from "../../hooks.js/useAuth";

const CheckScanPage = () => {

    const { auth } = useAuth();

    const checkData = fakeCheckData;

    const checkSequnceReverse = useRef(false);

    //Tablo daki indexi tutabilmek currentIndex degeri
    const [currentIndex, setCurrentIndex] = useState(0)

    //CheckView in gosterilip gosterilmeyecegini belirten state
    const [isCheckView, setIsCheckView] = useState(false);

    //Okunma- yuklenme isleminin tamamlanip tamamlandigi belirten state
    const [isLoading, setIsLoading] = useState(false);

    //okunmus cekler
    const [scannedChecks, setScannedChecks] = useState([]);

    //cek sırası
    const [checkSequnce, setCheckSqeunce] = useState(0);

    //Ilk default cek icin data
    const [currentCheck, setCurrentCheck] = useState({
        checkSequnce: 0,
        checkNumber: '',
        checkOwner: '',
        accountNumber: '',
        bankName: '',
        branchName: '',
        regionName: '',
        payeeName: '',
        checkDate: '',
        checkCurrency: '',
        checkAmount: '',
        checkImage: placeHolderImage,
        isActive: false,
    });

    ///currentCheck her degistiginde currentIndex de degisecek
    useEffect(() => {
        let currentindex;
        scannedChecks.forEach((item, index) => {
            if (item.checkSequnce === currentCheck.checkSequnce) {
                currentindex = index;
            }
        });
        setCurrentIndex(currentindex);
    }, [currentCheck, scannedChecks])

    //currentcheck her degistiginde currentcheck isActive(seçilmiş çek) true geri kalanlar false olacak
    useEffect(() => {

        const updatedChecks = scannedChecks.map(check => {
            if (check.checkSequnce === currentCheck.checkSequnce) {
                check.isActive = true
            } else {
                check.isActive = false
            }
            return check;
        });

        setScannedChecks(updatedChecks);

    }, [currentCheck]);

    //cekin ekranin ortasinda buyuk bir sekilde gozukmesi
    const showCheckView = () => {
        setIsCheckView(!isCheckView);
    }

    //Cek okunma taklidi yap
    const checkScan = () => {
        console.log("Hello World");
        
        setTimeout( async () => {
            console.log("Hello Worlzzd");
            const response = await fetch('http://127.0.0.1:8000/checks/get/');
            const data = await response.json()
            console.log(data);
        },20000)
        
        // const randomNum = Math.floor(Math.random() * 4);
        // const newCurrentCheck = { checkSequnce: checkSequnce + 1, isActive: false, ...checkData[randomNum] };

        // setIsLoading(true); //isLoading true yukleme islemi baslatildi spinner-loading goster

        // setTimeout(() => {  //spinner-loading 2500ms gozukmesi icin isLoading degerini 2500ms sonra false yap
        //     setCheckSqeunce(checkSequnce + 1); //cek sirasi arttir
        //     setCurrentCheck(newCurrentCheck); //data ya check sqeunce properitsi ekle
        //     setIsLoading(false);
        //     if (!checkSequnceReverse.current) {
        //         setScannedChecks([...scannedChecks, newCurrentCheck]);
        //     } else {
        //         setScannedChecks([newCurrentCheck, ...scannedChecks,]);
        //     }

        // }, 1000);

    };


    return (
        <div className="wrapper">
            <main className="check-scan-page">


                <div className="check-scan-page-grid-flex-box check-scan-page-grid-item">
                    {/* Cek Okunduktan sonra cek bilgilerinin bulundugu component */}
                    <ScannerDetails checkScan={checkScan} scannedCheckCount={checkSequnce} />

                    {/* Cek Okunduktan sonra cek bilgilerinin bulundugu component */}
                    <CheckDetails
                        isLoading={isLoading}
                        checkSequence={currentCheck.checkSequnce}
                        bankName={currentCheck.bankName}
                        checkOwner={currentCheck.checkOwner}
                        accountNumber={currentCheck.accountNumber}
                        checkNumber={currentCheck.checkNumber}
                        checkAmount={currentCheck.checkAmount}
                        setCurrentCheck={setCurrentCheck}
                        checkDate={currentCheck.checkDate}
                        payeeName={currentCheck.payeeName}
                        branchName={currentCheck.branchName}
                        regionName={currentCheck.regionName}
                        checkCurrency={currentCheck.checkCurrency}
                    />

                </div>

                {/* Cek resminin ortalama bir boyutta gosterildigi copmonent  */}
                <CheckImage
                    isLoading={isLoading}
                    checkImage={currentCheck.checkImage}
                    showCheckImage={showCheckView}
                    setCurrentCheck={setCurrentCheck}
                    scannedChecks={scannedChecks}
                    checkIndex={currentIndex}
                />

                {/* Okunmus ceklerin gosterildi tablo copmonent  */}
                <ScannedChecks
                    checkSequnceReverse={checkSequnceReverse}
                    setCurrentCheck={setCurrentCheck}
                    scannedChecks={scannedChecks}
                    setScannedChecks={setScannedChecks}
                />


                {/* Overlay copmonent  arka tarafi gölgelendirecek 
                CheckView copmonent  ceki daha buyuk boyutta ekranin ortasinda gosterecek */}
                {
                    isCheckView &&
                    <>
                        <CheckView checkImage={currentCheck.checkImage} />
                        <Overlay setIsCheckView={setIsCheckView} isCheckView={isCheckView} />
                    </>
                }

            </main>
        </div>
    );
}

export default CheckScanPage;