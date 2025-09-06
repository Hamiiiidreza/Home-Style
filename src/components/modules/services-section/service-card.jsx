import React from 'react';

const ServiceCard = ({ icon, title, description, decorations = [] }) => {

    const decorationConfig = {
        dash1: { className: "absolute top-3.5 left-4 w-[6px] h-[2.5px] bg-neutral-07 rounded" },
        dash2: { className: "absolute top-5.5 left-2.5 w-[12px] h-[2.5px] bg-neutral-07 rounded" },
        circleLeft: { className: "absolute top-5.5 left-2 w-[4px] h-[4px] bg-neutral-07 rounded" },
        circleCenter: { className: "absolute top-5 left-[19px] w-[10px] h-[10px] border-[2.5px] border-neutral-07 rounded-full" },
        circleRight: { className: "absolute top-5.5 right-2 w-[4px] h-[4px] bg-neutral-07 rounded" }
    };

    return (
        <div className="flex flex-col items-start gap-4 py-12 px-8 bg-neutral-02 h-full group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className="relative">
                <img
                    className="size-12 transition-all group-hover:drop-shadow-custom"
                    src={icon}
                    alt={title}
                />
                {decorations.map(decoration => (
                    <div key={decoration} className={decorationConfig[decoration].className} />
                ))}
            </div>
            <div>
                <h3 className="font-PoppinsMedium text-neutral-07 text-xl mb-2 transition-all group-hover:drop-shadow-custom">{title}</h3>
                <p className="font-InterRegular text-sm text-neutral-04 transition-all group-hover:drop-shadow-custom">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;