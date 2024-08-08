<<<<<<< HEAD
import React from 'react';

function CheckDetail({label, text}){
    return(
        <div className="check-detail-label-group">
        <label className="check-detail-label">{label}</label>
        <span className="check-detail-text">{text}</span>
    </div>

    );
}

export default CheckDetail
=======
import React from 'react'

const CheckDetail = ({ label, text }) => {
    return (
        <div className="check-detail-label-group">
            <label className="check-detail-label">{label}</label>
            <span className="check-detail-text">{text}</span>
        </div>
    )
}

export default CheckDetail
>>>>>>> 8ac4681a7b839d63f9c05be0c44006958de3bb48
