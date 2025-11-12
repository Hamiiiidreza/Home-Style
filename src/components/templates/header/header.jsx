import React, { useState } from 'react'
import { PiArrowRight, PiArrowLeft } from "react-icons/pi"

const Header = ({ images = [], singleImage = null, isSlidable = true, withGradient = true }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const hasMultipleImages = images.length > 1

    const prevSlide = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1)
    }

    const nextSlide = () => {
        if (activeIndex < images.length - 1) setActiveIndex(activeIndex + 1)
    }

    // اگر فقط یک عکس داریم و اسلاید غیرفعال است
    const backgroundImage = singleImage
        ? singleImage
        : images[activeIndex] || "/Images/img-placeholder-1.png"

    const backgroundStyle = {
        backgroundImage: withGradient
            ? `linear-gradient(180deg, rgba(52,56,57,0) 83%, rgba(52,56,57,0.4) 100%), url(${backgroundImage})`
            : `url(${backgroundImage})`
    }

    return (
        <div className="container">
            <section
                className="relative w-full h-[536px] overflow-hidden  
                          bg-cover bg-center hover:drop-shadow-custom transition-all"
                 style={backgroundStyle}
            >
                {/* اگر قابلیت اسلاید فعال بود Dots نمایش داده می‌شوند */}
                {isSlidable && hasMultipleImages && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex w-[78px] gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`transition-all drop-shadow-custom 
                                   ${i === activeIndex
                                        ? "w-[30px] h-2 rounded-full bg-neutral-01 border border-solid border-neutral-07"
                                        : "size-2 rounded-full bg-neutral-01"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}

                {/* اگر قابلیت اسلاید فعال بود دکمه‌ها نمایش داده می‌شوند */}
                {isSlidable && hasMultipleImages && (
                    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-8 -translate-y-1/2">
                        <button
                            onClick={prevSlide}
                            disabled={activeIndex === 0}
                            className={`rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all 
              ${activeIndex === 0 ? "bg-white text-neutral-400" : "bg-white text-neutral-07 hover:drop-shadow-custom"}`}
                        >
                            <PiArrowLeft className="size-8" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={activeIndex === images.length - 1}
                            className={`rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all 
              ${activeIndex === images.length - 1 ? "bg-white text-neutral-400" : "bg-white text-neutral-07 hover:drop-shadow-custom"}`}
                        >
                            <PiArrowRight className="size-8" />
                        </button>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Header

