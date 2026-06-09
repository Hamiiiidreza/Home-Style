import React, { FC, useEffect, useState } from "react";
import { PiArrowRight, PiArrowLeft } from "react-icons/pi";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "../../ui/carousel";

const Gallery: FC = () => {
    const productImages: string[] = [
        "/Images/product-5.png",
        "/Images/slider-area-1.svg",
        "/Images/slider-area-2.svg",
        "/Images/slider-area-3.svg",
    ];

    const thumbnails = productImages.slice(1);

    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        setActiveIndex(api.selectedScrollSnap());
        api.on("select", () => setActiveIndex(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="w-full">
            <Carousel
                setApi={setApi}
                className="relative w-full"
                opts={{
                    direction: "rtl",
                    align: "start",
                    containScroll: "trimSnaps",
                    dragFree: false,
                }}
            >
                <CarouselContent>
                    {productImages.map((img, i) => (
                        <CarouselItem key={i} className="basis-full">
                            <img
                                src={img}
                                alt={`product-${i}`}
                                className="w-full h-[420px] object-contain rounded-xl"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                    <button
                        onClick={() => api?.scrollPrev()}
                        disabled={!api?.canScrollPrev()}
                        className={`rounded-full w-10 h-10 hidden sm:flex items-center justify-center transition
                                   ${!api?.canScrollPrev()
                                ? "bg-white text-neutral-400"
                                : "bg-white text-neutral-700 hover:shadow"
                            }`}
                    >
                        <PiArrowRight className="size-4" />
                    </button>

                    <button
                        onClick={() => api?.scrollNext()}
                        disabled={!api?.canScrollNext()}
                        className={`rounded-full w-10 h-10 hidden sm:flex items-center justify-center transition
                                   ${!api?.canScrollNext()
                                ? "bg-white text-neutral-400"
                                : "bg-white text-neutral-700 hover:shadow"
                            }`}
                    >
                        <PiArrowLeft className="size-4" />
                    </button>

                </div>
            </Carousel>

            <div className="flex items-center justify-center gap-3 mt-4">
                {thumbnails.map((img, idx) => {
                    const realIndex = idx + 1;

                    return (
                        <img
                            key={idx}
                            src={img}
                            alt={`thumb-${idx}`}
                            onClick={() => api?.scrollTo(realIndex)}
                            className={`w-24 h-24 object-cover rounded-lg border cursor-pointer transition
              ${activeIndex === realIndex
                                    ? "ring-2 ring-blue-500"
                                    : "hover:ring-2 hover:ring-blue-300"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;


