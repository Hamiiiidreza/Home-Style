import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Gallery() {
    return (
        <div className="flex flex-col items-start gap-6 relative">
            <div className="relative w-[547px] h-[728px] transition-all hover:drop-shadow-custom after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-[94%] after:bg-rgba(0,0,0,0.25) after:opacity-0 after:z-10 after:shadow-[0_4px_4px_rgba(0,0,0,0.25)] after:transition-all hover:after:opacity-100 after:pointer-events-none">
                <div className="absolute top-0 left-0 w-[548px] h-[729px] bg-neutral-02">
                    <img
                        className='w-full h-full object-cover bg-[100%_100%] mix-blend-multiply'
                        src="/Images/product-5.png"
                        alt="Tray Table"
                    />
                    <div className="flex items-center justify-center gap-2 px-4.5 py-2 absolute top-8 left-8 bg-white rounded transition-all hover:drop-shadow-custom">
                        <div className="relative font-InterBold text-black text-lg text-center tracking-[0] leading-[18px] whitespace-nowrap">
                            NEW
                        </div>
                    </div>
                    <div className="flex w-[84.15px] h-[34.05px] items-center justify-center gap-2 px-[18px] py-2 absolute top-[75px] left-8 bg-secondary-color-green rounded transition-all hover:drop-shadow-custom">
                        <div className="relative font-InterBold text-lg text-neutral-01 text-center tracking-[0] leading-4.5 whitespace-nowrap">
                            -50%
                        </div>
                    </div>
                </div>
                <div className="absolute flex items-center justify-between top-[344px] left-8 right-8 w-[483px]">
                    <button
                        className="size-10 flex items-center justify-center bg-white rounded-full transition-all hover:drop-shadow-custom"
                        aria-label="Previous image"
                    >
                        <FiArrowLeft className='size-6' />
                    </button>
                    <button
                        className="size-10 flex items-center justify-center bg-white rounded-full transition-all hover:drop-shadow-custom"
                        aria-label="Next image"
                    >
                        <FiArrowRight className='size-6' />
                    </button>
                </div>
            </div>
            <div className="hidden sm:inline-flex items-start gap-6">
                <button
                    className="w-[167px] h-[167px] bg-[url(/Images/slider-area-1.svg)] bg-cover bg-[50%_50%] transition-all hover:drop-shadow-custom"
                    aria-label="View product image 1"
                ></button>
                <button
                    className="w-[167px] h-[167px] bg-[url(/Images/slider-area-2.svg)] bg-cover bg-[50%_50%] transition-all hover:drop-shadow-custom"
                    aria-label="View product image 2"
                ></button>
                <button
                    className="w-[167px] h-[167px] bg-[url(/Images/slider-area-3.svg)] bg-cover bg-[50%_50%] transition-all hover:drop-shadow-custom"
                    aria-label="View product image 3"
                ></button>
            </div>
        </div>
    )
}

export default Gallery;
