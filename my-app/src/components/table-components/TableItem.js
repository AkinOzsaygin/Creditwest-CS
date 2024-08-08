import React, { useMemo } from 'react'

const TableItem = ({ item, setCurrentItem }) => {

    console.log(item);
    const style = {
        background: item.isActive ? 'rgb(230,230,230)' : 'white'
    }

    const cells = useMemo(() => {
        const cellArr = [];
        for (const cellData in item) {

            if (cellData !== 'checkImage' && cellData !== 'isActive') {
                console.log(cellData);
                cellArr.push(<td>{item[cellData]}</td>)
            }
        }
        return cellArr
    }, [item])

    return <tr style={style} className='check-row' onClick={() => setCurrentItem(item)}>{cells}</tr>
}

export default TableItem
