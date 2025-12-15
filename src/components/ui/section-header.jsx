import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, linkText, to, mbClass }) => {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end ${mbClass}`}>
            <h2 className="font-PoppinsMedium w-[400px] h-auto text-4.5xl text-black leading-none tracking-headline-7 hover:drop-shadow-custom transition-all">
                {title}
            </h2>
            <Link to={to} className="flex items-center gap-1 border-b border-neutral-07 mt-4 md:mt-0 z-10 transition-all hover:bg-rgba(0,0,0,0.25) hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span className="font-InterMedium text-base text-neutral-07 leading-1.7">{linkText}</span>
                <img
                    className="w-5 h-5"
                    src="/Images/arrow-right.svg"
                    alt="Arrow"
                />
            </Link>
        </div>
    );
};

export default SectionHeader;