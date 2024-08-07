import React from 'react'

const Table = ({ children }) => {
    return (
        <table>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default Table
