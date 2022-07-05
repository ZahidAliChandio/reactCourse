import React, { useState } from 'react'
export default function Alert(props) {
    const [alertStyle, changeAlertStyle] = useState({
        display:'flex'
    })
    const closeAlert = () => {
        changeAlertStyle({
            display: 'none'
        })
    }
    return (
        props.alert &&
            <div id="alert-container" className='alert-box bg-green' style={alertStyle}>
                <div id="alert-box" className='alert-box alert-text'>
                    <strong>{props.alert.type}</strong>: {props.alert.msg}
                </div>
                <button id="alert-cross" className="close-icon-close-btn clossing-cross alert-cross alert-btn" onClick={closeAlert}>X</button>
            </div>
    )
}
