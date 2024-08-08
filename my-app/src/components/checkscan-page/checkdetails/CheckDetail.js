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