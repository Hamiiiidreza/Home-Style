import React from 'react';
import ShopLink from "../../ui/arrow-link";

const BlogCard = ({ id, image, title, fullTitle, date, showFull }) => (
    <div className="flex flex-col gap-6">
        <img
            className="w-full h-[325px] bg-cover bg-center transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            src={image}
            alt={title}
        />
        <div>
            {showFull ? (
                <>
                    <h3 className="font-PoppinsMedium leading-1.4 text-[#23262F] text-xl mb-4 transition-all hover:drop-shadow-custom">
                        {fullTitle}
                    </h3>
                    <p className="font-InterRegular text-xs text-neutral-04 leading-5 tracking-[0] transition-all hover:drop-shadow-custom">
                        {date}
                    </p>
                </>
            ) : (
                <>
                    <h3 className="font-PoppinsMedium leading-1.4 text-[#23262F] text-xl mb-4 transition-all hover:drop-shadow-custom">
                        {title}
                    </h3>

                    <ShopLink
                        title="Read More"
                        textColor="text-neutral-07"
                        borderColor="border-neutral-07"
                        to="/articles-details"
                    />
                </>
            )}
        </div>
    </div>
);

export default BlogCard;