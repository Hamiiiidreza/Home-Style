import React, { useState } from 'react';
import CustomRating from '../../ui/custom-rating';
import CountdownTimer from './countdown-timer';
import ButtonCard from '../../ui/button-card';

function Details() {

    const [selectedColor, setSelectedColor] = useState('black');
    const [rating, setRating] = useState(4);
    const [quantity, setQuantity] = useState(1);

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        console.log("Added to cart!");
    };

    const colors = [
        { id: "black", label: "Black", image: "/Images/product-5.png" },
        { id: "brown", label: "Brown", image: "/Images/product-5-1.svg" },
        { id: "red", label: "red", image: "/Images/product-5-2.svg" },
        { id: "white", label: "White", image: "/Images/product-5-3.svg" },
    ];

    return (
        <>
            <div className="inline-flex flex-col items-start">
                <div className="inline-flex flex-col items-start">
                    <header className="inline-flex flex-col items-start gap-4 pt-0 pb-6 px-0 border-b border-solid border-neutral-03">
                        <div className="inline-flex gap-2.5 items-center">
                            <div className="flex items-center gap-0.5 -mt-2">
                                <CustomRating
                                    initialValue={rating}
                                    onClick={handleRating}
                                    size={18}
                                    fillColor="black"
                                    SVGstyle={{ display: "inline-block" }}
                                    allowFraction={false}
                                    className='transition-all hover:drop-shadow-custom'
                                />
                            </div>
                            <div className="font-InterRegular text-xs text-neutral-07 leading-5 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                11 Reviews
                            </div>
                        </div>
                        <h1 className="font-PoppinsMedium text-[40px] text-neutral-07 leading-[44px] tracking-headline-4 transition-all hover:drop-shadow-custom">
                            Tray Table
                        </h1>
                        <p className="font-InterRegular text-base text-neutral-04 leading-[26px] transition-all hover:drop-shadow-custom">
                            Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray <br /> top, handy for serving snacks.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="font-PoppinsMedium text-[28px] text-black leading-[34px] tracking-headline-6 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                $199.00
                            </div>
                            <div className="font-PoppinsMedium text-xl text-neutral-04 tracking-[0] leading-7 line-through decoration-1 transition-all hover:drop-shadow-custom">
                                $400.00
                            </div>
                        </div>
                    </header>

                    <CountdownTimer />

                    {/* Product Options */}
                    <div className="inline-flex flex-col gap-6 px-0 py-6 items-start relative">
                        <div className="inline-flex flex-col items-start gap-2">
                            <div className="font-InterSemiBold text-neutral-04 text-base tracking-[0] leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                Measurements
                            </div>
                            <div className="font-InterRegular text-xl text-black tracking-[0] leading-[32px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                17 1/2x20 5/8 &#34;
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* عنوان */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1">
                                    <h3 className="font-InterSemiBold text-base text-neutral-04 leading-[26px] hover:drop-shadow-custom transition-all">
                                        Choose Color
                                    </h3>
                                    <img
                                        src="/Images/direction-right 01.svg"
                                        alt="Expand color options"
                                        className="w-6 h-6 transition-all hover:drop-shadow-custom"
                                    />
                                </div>
                                <p className="font-InterRegular text-black text-xl leading-[32px] transition-all hover:drop-shadow-custom">
                                    {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
                                </p>
                            </div>

                            {/* انتخاب رنگ */}
                            <div className="flex gap-4">

                                {colors.map((color) => (
                                    <label
                                        key={color.id}
                                        htmlFor={color.id}
                                        className={`relative w-[72px] h-[72px] rounded-md cursor-pointer border transition-all duration-200 hover:drop-shadow-custom
              ${selectedColor === color.id ? "border-black" : "border-transparent hover:border-gray-300"}`}
                                        style={{
                                            backgroundImage: `url(${color.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            id={color.id}
                                            name="color"
                                            value={color.id}
                                            checked={selectedColor === color.id}
                                            onChange={() => handleColorChange(color.id)}
                                            className="sr-only"
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add to Cart Section */}
                <div className="inline-flex flex-col gap-4 px-0 py-8 items-start relative w-full">
                    <div className="inline-flex items-start gap-6 relative h-[52px] w-full">
                        <div className="flex flex-col w-[127px] h-[52px] items-center justify-center gap-2.5 px-4 py-3 relative bg-neutral-02 rounded-lg transition-all hover:drop-shadow-custom">
                            <div className="relative self-stretch w-full h-full">
                                <button
                                    className="absolute top-[calc(50%_-_10px)] left-0 size-5 cursor-pointer"
                                    aria-label="Decrease quantity"
                                    onClick={() => handleQuantityChange(-1)}
                                >
                                    <img src="/Images/Minus.svg" alt="Minus" />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    min="1"
                                    readOnly
                                    className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_15px)] text-base font-semibold text-black text-center whitespace-nowrap bg-transparent border-0 w-8"
                                    aria-label="Quantity"
                                />
                                <button
                                    className="absolute top-[calc(50%_-_10px)] right-0 size-5 flex cursor-pointer"
                                    aria-label="Increase quantity"
                                    onClick={() => handleQuantityChange(1)}
                                >
                                    <img
                                        src="/Images/Add.svg"
                                        alt="Plus"
                                    />
                                </button>
                            </div>
                        </div>
                        <button
                            className="box-border cursor-pointer h-full flex w-full md:w-[357px] items-center justify-center gap-2 px-10 py-2.5 rounded-lg border border-solid border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            aria-label="Add to wishlist"
                        >
                            <img
                                className="size-6 transition-all hover:drop-shadow-custom"
                                src="/Images/Line.svg"
                                alt="Heart"
                            />
                            <div className="font-InterMedium text-neutral-07 text-lg text-center tracking-button-m leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                Wishlist
                            </div>
                        </button>
                    </div>
                    <ButtonCard
                        onClick={handleAddToCart}
                        title="Add to Cart"
                        className="box-border cursor-pointer flex h-[52px] w-full md:max-w-[504px] items-center justify-center gap-2 px-10 py-2.5 relative bg-neutral-07 rounded-lg transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-InterMedium text-lg text-white text-center tracking-button-m leading-8 whitespace-nowrap hover:drop-shadow-custom"
                    />
                </div>

                <div className="flex flex-col w-full md:max-w-[508px] items-start gap-2 px-0 py-6 border-t border-solid border-neutral-03">
                    <div className="inline-flex items-start gap-[98px]">
                        <div className="font-InterRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            SKU
                        </div>
                        <div className="font-InterRegular text-neutral-07 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            1117
                        </div>
                    </div>
                    <div className="inline-flex items-start gap-[58px]">
                        <dt className="font-InterRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            CATEGORY
                        </dt>
                        <dd className="font-InterRegular text-neutral-07 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            Living Room, Bedroom
                        </dd>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
