import React from 'react';
import ButtonCard from '../../ui/button-card';

const ProductCard = ({
    image,
    title,
    price,
    originalPrice,
    isNew,
    discount
}) => (
    <div className="w-full lg:w-[222px] group transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div
            className="relative w-full h-[349px] bg-cover bg-center transition-all group-hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-[268px] after:bg-rgba(0,0,0,0.25) after:opacity-0 after:z-10 after:shadow-[0_4px_4px_rgba(0,0,0,0.25)] after:transition-all group-hover:after:opacity-100"
        >
            <div className="absolute inset-0 bg-neutral-02 z-0"></div>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover mix-blend-multiply'
            />

            <ButtonCard
             className='absolute opacity-0 transition-all group-hover:opacity-100 font-InterMedium w-full max-w-[210px] h-[46px] py-6 px-2 bottom-4 left-1/2 transform -translate-x-1/2 bg-neutral-07 text-neutral-01 text-base tracking-button-s rounded-lg shadow-shadow-01 flex items-center justify-center cursor-pointer'
             title='Add to cart'
             />
            <button className="absolute flex items-center justify-center top-4 right-4 w-8 h-8 rounded-4xl bg-white opacity-0 transition-all group-hover:opacity-100">
                <img
                    src="/Images/heart.svg"
                    alt="Wishlist"
                />
            </button>

            <div className="absolute top-4 left-4 w-[71px] h-[56px] flex flex-col justify-start items-center gap-2">
                {isNew && (
                    <div className="px-3.5 py-1 rounded transition-all group-hover:bg-rgba(0,0,0,0.25) group-hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <span className="font-InterBold text-base leading-none text-neutral-07 transition-all group-hover:drop-shadow-custom">NEW</span>
                    </div>
                )}
                {discount && (
                    <div className="px-3.5 py-1 rounded transition-all bg-secondary-color-green group-hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <span className="font-InterBold text0base leading-none text-neutral-01 transition-all hover:drop-shadow-custom">{discount}</span>
                    </div>
                )}
            </div>
        </div>

        <div className="py-4 pl-4 transition-all group-hover:drop-shadow-custom">
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <img
                        key={i}
                        className="size-4"
                        src="/Images/star-fill.svg"
                        alt="Star"
                    />
                ))}
            </div>
            <h3 className="font-InterSemiBold text-base text-neutral-07 mt-1">{title}</h3>
            <div className="flex items-center gap-3 mt-1">
                <span className="font-InterSemiBold text-sm text-neutral-07">{price}</span>
                {originalPrice && (
                    <span className="font-InterRegular text-sm text-neutral-04 line-through">
                        {originalPrice}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default ProductCard;