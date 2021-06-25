import React from 'react'

const Button = ({icon, label, ...props}) => {
    return (
        <button className='icons' {...props}>
            {icon && icon} <p>{label && label}</p>
        </button>
    )
}

export default Button
