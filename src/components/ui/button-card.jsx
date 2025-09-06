import React from "react";

function ButtonCard({ title ,onClick, disabled = false, className = '' }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`add-to-cart-btn ${className}`}
        >
            {title}
        </button>
    )
}

export default ButtonCard;
