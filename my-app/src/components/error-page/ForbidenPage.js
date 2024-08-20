import React from 'react'
import '../../css/forbiden-page.css'

const ForbidenPage = () => {
    return (
        <>
            <div className='forbidden-text'><p>403</p></div>
            <div class='hover-forbidden'>
                <div class='background-forbidden'>
                    <div class='door-forbidden'><p className='forbidden-paragraph'>403</p></div>
                    <div class='rug-forbidden'></div>
                </div>
                <div class='foreground-forbidden'>
                    <div class='bouncer-forbidden'>
                        <div class='head-forbidden'>
                            <div class='neck-forbidden'></div>
                            <div class='eye-forbidden left'></div>
                            <div class='eye-forbidden right'></div>
                            <div class='ear-forbidden'></div>
                        </div>
                        <div class='body-forbidden'></div>
                        <div class='arm-forbidden'></div>
                    </div>
                    <div class='poles-forbidden'>
                        <div class='pole left-forbidden'></div>
                        <div class='pole right-forbidden'></div>
                        <div class='rope-forbidden'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForbidenPage


