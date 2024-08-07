import React from "react";
import TableHeaders from '../../table-components/TableHeaders.js'
import Table from '../../table-components/Table.js'
import TableItems from '../../table-components/TableItems';


const ScannedChecks = ({ scannedChecks, setCurrentCheck }) => {

    const headerNames = ['Cek Sırası', 'Cek Numarası', 'Cek Sahibi', 'Hesap Numarası', 'Banka', 'Sube', 'Bolge', 'Odenecek Kisi', 'Cek Tarihi', 'Para Birimi', 'Cek Miktari']

    return (
        <div className="scanned-checks-container">

            <h3 className="container-sub-title">Okunmus Çekler</h3>


            <Table>
                <TableHeaders headers={headerNames} />
                <TableItems items={scannedChecks} setCurrentItem={setCurrentCheck} />
            </Table>


        </div>
    );
};

export default ScannedChecks;