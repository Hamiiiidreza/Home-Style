import React from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Gallery() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-[547px]">

            {/* Main Image */}
            <div
                className="
                           relative 
                           w-full 
                           aspect-[547/728]
                           overflow-hidden
                           rounded-lg
                           transition-all
                           hover:drop-shadow-custom
                        "
            >
                <div className="w-full h-full bg-neutral-02">
                    <img
                        src="/Images/product-5.png"
                        alt="Tray Table"
                        className="w-full h-full object-cover mix-blend-multiply"
                    />
                </div>
                <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded">
                    <span className="font-InterBold text-lg">NEW</span>
                </div>
                <div className="absolute top-[70px] left-6 bg-secondary-color-green px-4 py-1 rounded">
                    <span className="font-InterBold text-lg text-white">-50%</span>
                </div>
                <div className="absolute inset-y-1/2 left-4 right-4 flex justify-between">
                    <button className="size-10 bg-white rounded-full flex items-center justify-center">
                        <FiArrowLeft className="size-6" />
                    </button>

                    <button className="size-10 bg-white rounded-full flex items-center justify-center">
                        <FiArrowRight className="size-6" />
                    </button>
                </div>
            </div>
            <div
                className=" hidden sm:flex gap-4 w-full">
                {[1, 2, 3].map((i) => (
                    <button
                        key={i}
                        className="
                                  flex-1
                                  aspect-square
                                  bg-cover
                                  bg-center
                                  rounded-md
                                  transition-all
                                  hover:drop-shadow-custom
                                  "
                        style={{
                            backgroundImage: `url(/Images/slider-area-${i}.svg)`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}




export default Gallery;
