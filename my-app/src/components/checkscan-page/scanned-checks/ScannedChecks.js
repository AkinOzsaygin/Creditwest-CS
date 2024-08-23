import React from "react";
import TableHeaders from '../../table-components/TableHeaders.js'
import Table from '../../table-components/Table.js'
import TableItems from '../../table-components/TableItems';


const ScannedChecks = ({ scannedChecks, setCurrentCheck }) => {

    const headerNames = ['Çek Sırası', 'Çek Sahibi', 'Hesap Numarası', 'Çek Numarası', 'Şube', 'Bölge', 'Ödenecek Kişi', 'Çek Tarihi', 'Para Birimi', 'Çek Miktari']


    return (
        <div className="scanned-checks-container">

            <h3 className="container-sub-title">Okunmuş Çekler</h3>

            <Table>
                <TableHeaders headers={headerNames} />
                <TableItems items={scannedChecks} setCurrentItem={setCurrentCheck} />
            </Table>


        </div>
    );
};

export default ScannedChecks;