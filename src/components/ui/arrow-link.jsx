import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

function ArrowLink({ title, textColor, borderColor, to, mobileSmall = false }) {
    return (
        <button
            className={`inline-flex items-center gap-0.5 hover:drop-shadow-custom transition-all border-b ${borderColor}`}
            aria-label="Shop now for 30% off"
        >
            <div className={`inline-flex items-center ${textColor} gap-1`}>
                <Link
                    to={to}
                    className={`
                        font-InterMedium
                        ${mobileSmall ? 'text-sm sm:text-base' : 'text-base'}
                    `}
                >
                    {title}
                </Link>
                <GoArrowRight
                    className={`
                        relative cursor-pointer
                        ${mobileSmall ? 'size-4 sm:size-4.5' : 'size-4.5'}
                    `}
                />
            </div>
        </button>
    )
}

export default ArrowLink;
