import React from 'react';

const ServiceCard = ({ icon, title, description }) => {

    return (
        <div className="flex flex-col items-start gap-4 py-12 px-8 bg-neutral-02 h-full group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="relative">
                <img
                    className="size-12 transition-all group-hover:drop-shadow-custom"
                    src={icon}
                    alt={title}
                />
            </div>
            <div>
                <h3 className="font-PoppinsMedium text-neutral-07 text-xl mb-2 transition-all group-hover:drop-shadow-custom">{title}</h3>
                <p className="font-InterRegular text-sm text-neutral-04 transition-all group-hover:drop-shadow-custom">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;