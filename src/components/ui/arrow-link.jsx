import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

function ArrowLink({ title, textColor, borderColor, to }) {
    return (
        <button
            className={`inline-flex items-center gap-0.5 hover:drop-shadow-custom transition-all border-b ${borderColor}`}
            aria-label="Shop now for 30% off"
        >
            <div className={`inline-flex items-center ${textColor} gap-1`}>
                <Link
                    to={to}
                    className="font-InterMedium text-base">
                    {title}
                </Link>
                <GoArrowRight
                    className="relative size-4.5 cursor-pointer"
                />
            </div>
        </button>
    )
}

export default ArrowLink;
