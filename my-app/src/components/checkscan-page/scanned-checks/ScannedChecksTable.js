import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import CheckRow from "./CheckRow";
import TableHeaders from '../../table-components/TableHeaders.js'
import Table from '../../table-components/Table.js'
import TableItems from '../../table-components/TableItems';
const ScannedChecksTable = ({ scannedChecks, setCurrentCheck }) => {

    const headerNames = ['Cek Sırası', 'Cek Numarası', 'Cek Sahibi', 'Hesap Numarası', 'Banka', 'Sube', 'Bolge', 'Odenecek Kisi', 'Cek Tarihi', 'Para Birimi', 'Cek Miktari']

    return (
        <div className="scanned-checks-table-wrapper">
            <Table>
                <TableHeaders headers={headerNames} />
                <TableItems items={scannedChecks} setCurrentItem={setCurrentCheck} />
            </Table>
        </div>
    )
}

export default ScannedChecksTable