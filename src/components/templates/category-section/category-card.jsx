import React from "react";
import ArrowLink from "../../ui/arrow-link";

const CategoryCard = ({ image, title, heightClass, isTop, imageClass, hasInnerLeftBorder }) => (
    <div className={`group relative ${heightClass} bg-neutral-02 overflow-hidden transition-all
     ${hasInnerLeftBorder === true
            ? 'after:absolute after:content-[""] after:left-[210px] after:top-0 after:h-full after:w-full after:bg-rgba(0,0,0,0.25) after:opacity-0 after:z-10 after:shadow-[-1px_4px_4px_rgba(0,0,0,0.25)] after:transition-all group-hover:after:opacity-100'
            : hasInnerLeftBorder === false
                ? 'after:absolute after:content-[""] after:left-[220px] after:top-[60px] after:h-[230px] after:w-[300px] after:bg-rgba(0,0,0,0.25) after:opacity-0 after:z-10 after:shadow-[-0.5px_4px_4px_rgba(0,0,0,0.25)] after:transition-all group-hover:after:opacity-100'
                : ''
        }`}>

        <div className="absolute inset-0 bg-neutral-02 z-0"></div>

        <img
            src={image}
            alt={title}
            className={`relative w-full h-full object-cover mix-blend-multiply ${imageClass || ""}`}
        />

        {isTop ? (
            <div className="absolute top-12 left-8 z-10">
                <h3 className="font-PoppinsMedium text-neutral-07 text-headline-5 mb-3 hover:drop-shadow-custom transition-all">
                    {title}
                </h3>
                <ArrowLink
                    title="Shop Now"
                    textColor="text-neutral-07"
                    borderColor="border-neutral-07"
                    to="/Shop"
                />
            </div>
        ) : (
            <div className="absolute bottom-12 left-8 z-10">
                <h3 className="font-PoppinsMedium text-neutral-07 text-headline-5 mb-3 hover:drop-shadow-custom transition-all">
                    {title}
                </h3>
                <ArrowLink
                    title="Shop Now"
                    textColor="text-neutral-07"
                    borderColor="border-neutral-07"
                    to="/Shop"
                />
            </div>
        )}


    </div>
);

export default CategoryCard;


