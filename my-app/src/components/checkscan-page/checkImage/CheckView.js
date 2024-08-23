import React from 'react'

const CheckView = ({checkImage}) => {
  return (
    <div className='check-view'>
      <img  className='check-view-image' src={checkImage}></img>
      <button className='check-view-image'>Dondur</button>
    </div>

    
  )
}

export default CheckView
