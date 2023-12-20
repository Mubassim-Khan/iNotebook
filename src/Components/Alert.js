import React from 'react'

export const Alert = (props) => {
    return (
        <div className='alert--component'>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}
