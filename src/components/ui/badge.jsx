import React from 'react'

function Badge({ number, className = '' }) {
    return (
        <div>
            <span
                className={`${className}`}
            >
                {number}
            </span>
        </div>
    )
}

export default Badge;
