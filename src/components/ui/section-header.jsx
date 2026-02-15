import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({
    title,
    linkText,
    to,
    mbClass,
    mobileLayout = "inline",
}) => {
    return (
        <div
            className={`
                flex justify-between items-end
                ${mobileLayout === "separate" ? "md:flex" : "flex"}
                ${mbClass}
            `}
        >
            <h2 className="font-PoppinsMedium w-[372px] text-xl sm:text-4.5xl text-black leading-none tracking-headline-7 transition-all hover:drop-shadow-custom">
                {title}
            </h2>

            <Link
                to={to}
                className={`
                    flex items-center gap-1 border-b border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)]
                    ${mobileLayout === "separate"
                        ? "hidden md:flex" // 👈 محصولات
                        : "flex"           // 👈 articles
                    }
                `}
            >
                <span className="font-InterMedium text-base text-neutral-07">
                    {linkText}
                </span>
                <img
                    className="size-5"
                    src="/Images/arrow-right.svg"
                    alt="Arrow"
                />
            </Link>
        </div>
    );
};

export default SectionHeader;
