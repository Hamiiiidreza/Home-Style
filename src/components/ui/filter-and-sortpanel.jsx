import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

function FilterAndSortpanel({ mode = "shop", defaultActiveButton = 2 }) {

    const [activeButton, setActiveButton] = useState(defaultActiveButton);

    // --- CATEGORIES ---
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Living Room");
    const catDropdownRef = useRef(null);

    // --- PRICE ---
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState("All Price");
    const priceDropdownRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const handleMobileActive = () => {
            if (mediaQuery.matches && activeButton < 3) {
                setActiveButton(3);
            }
        };

        handleMobileActive(); // اجرا در اولین رندر
        mediaQuery.addEventListener("change", handleMobileActive);

        return () => {
            mediaQuery.removeEventListener("change", handleMobileActive);
        };
    }, [activeButton]);

    const buttons = [
        { id: 1, src: "/Images/sort-1.svg", activeSrc: "/Images/sort-1-active.svg", label: "Grid view 1" },
        { id: 2, src: "/Images/sort-2.svg", activeSrc: "/Images/sort-2-active.svg", label: "Grid view 2" },
        { id: 3, src: "/Images/sort-3.svg", activeSrc: "/Images/sort-3-active.svg", label: "Grid view 3" },
        { id: 4, src: "/Images/sort-4.svg", activeSrc: "/Images/sort-4-active.svg", label: "Grid view 4" },
    ];

    const categories = [
        "All Room",
        "Living Room",
        "Bedroom",
        "Bathroom",
        "Kitchen",
        "Dining",
        "Outdoor",
    ];

    const prices = [
        "All Price",
        "$0 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200 - $500",
        "$500+",
    ];

    // بستن هر دو منو با کلیک بیرون
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                catDropdownRef.current &&
                !catDropdownRef.current.contains(event.target)
            ) {
                setIsCatOpen(false);
            }
            if (
                priceDropdownRef.current &&
                !priceDropdownRef.current.contains(event.target)
            ) {
                setIsPriceOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <div className="container w-full flex flex-col gap-6 pt-8 md:flex-row md:flex-wrap md:items-end md:justify-between md:pt-0">

                {/* ----------- MODE: SHOP (Category + Price) ---------- */}
                {mode === "shop" && (
                    <div className="flex flex-col gap-2 w-full md:w-full md:flex-row md:justify-center xl:w-[548px] xl:justify-start">

                        {/* ---------- CATEGORIES ---------- */}
                        <div className="flex flex-col w-full md:w-[262px] items-start gap-2 relative" ref={catDropdownRef}>
                            <label className="font-InterSemiBold text-neutral-04 text-base leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                CATEGORIES
                            </label>
                            <button
                                onClick={() => setIsCatOpen(!isCatOpen)}
                                className="w-full flex items-center justify-between h-12 pl-4 pr-2 py-2 rounded-lg border-2 border-solid border-neutral-04 bg-transparent font-InterSemiBold text-base text-neutral-07 cursor-pointer transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            >
                                {selectedCategory}
                                <img
                                    className={`transition-transform duration-300 ${isCatOpen ? "rotate-180" : "rotate-0"}`}
                                    alt="Dropdown arrow"
                                    src="/Images/arrow-down.svg"
                                />
                            </button>


                            <nav
                                className={`
                                            relative w-full mt-2
                                            flex flex-col gap-2.5 p-2 bg-white rounded-xl
                                            border-[1.5px] border-[#f3f5f6] shadow-depth-4 z-50
                                        
                                            overflow-hidden transition-all duration-300 ease-out
                                            ${isCatOpen
                                        ? "max-h-96 opacity-100 translate-y-0"
                                        : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                                    }
                                        
                                            md:absolute md:bottom-[110%] md:left-0 md:w-full
                                           
                                          `}
                                role="navigation"
                                aria-label="Category selection menu"
                            >
                                <ul className="w-full" role="list">
                                    {categories.map((cat) => (
                                        <li key={cat} className="w-full">
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory(cat);
                                                    setIsCatOpen(false);
                                                }}
                                                className={`flex w-full items-center gap-2 p-2 rounded-lg transition-all ${selectedCategory === cat
                                                    ? "bg-neutral-02 text-neutral-07 font-InterSemiBold"
                                                    : "text-neutral-04 hover:bg-neutral-02"
                                                    }`}
                                            >
                                                <span className="whitespace-nowrap">{cat}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                        </div>

                        {/* ---------- PRICE ---------- */}
                        <div className="flex flex-col w-full md:w-[262px] items-start gap-2 relative" ref={priceDropdownRef}>
                            <label className="font-InterSemiBold text-neutral-04 text-base leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                PRICE
                            </label>
                            <button
                                onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className="w-full flex items-center justify-between h-12 pl-4 pr-2 py-2 rounded-lg border-2 border-solid border-neutral-04 bg-transparent font-InterSemiBold text-base text-neutral-07 cursor-pointer transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                            >
                                {selectedPrice}
                                <img
                                    className={`transition-transform duration-300 ${isPriceOpen ? "rotate-180" : "rotate-0"}`}
                                    alt="Dropdown arrow"
                                    src="/Images/arrow-down.svg"
                                />
                            </button>

                            <nav
                                className={`
                                            relative w-full mt-2
                                            flex flex-col gap-2.5 p-2 bg-white rounded-xl
                                            border-[1.5px] border-[#f3f5f6] shadow-depth-4 z-50
                                        
                                            overflow-hidden transition-all duration-300 ease-out
                                            ${isPriceOpen
                                        ? "max-h-96 opacity-100 translate-y-0"
                                        : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                                    }
                                            md:absolute md:bottom-[110%] md:left-0 md:w-full`}
                                role="navigation"
                                aria-label="Price selection menu"
                            >
                                <ul className="w-full" role="list">
                                    {prices.map((price) => (
                                        <li key={price} className="w-full">
                                            <button
                                                onClick={() => {
                                                    setSelectedPrice(price);
                                                    setIsPriceOpen(false);
                                                }}
                                                className={`flex w-full items-center gap-2 p-2 rounded-lg transition-all ${selectedPrice === price
                                                    ? "bg-neutral-02 text-neutral-07 font-InterSemiBold"
                                                    : "text-neutral-04 hover:bg-neutral-02"
                                                    }`}
                                            >
                                                <span className="whitespace-nowrap">{price}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}

                {/* ----------- MODE: BLOG (All Blog + Featured) ---------- */}
                {mode === "blog" && (
                    <nav className="inline-flex items-center gap-10">
                        <Link
                            href="#"
                            className="inline-flex items-center gap-1 border-b border-solid border-[#111111] transition-all hover:drop-shadow-custom"
                            aria-current="page"
                        >
                            <span
                                className="font-InterSemiBold text-sm text-black-900 tracking-[0] leading-5.5 w-fit whitespace-nowrap"
                            >
                                All Blog
                            </span>
                        </Link>
                        <Link href="#"
                            className="inline-flex items-center gap-1 transition-all hover:drop-shadow-custom">
                            <span
                                className="font-InterSemiBold text-sm text-[#807E7E] tracking-[0] leading-5.5 w-fit whitespace-nowrap"
                            >
                                Featured
                            </span>
                        </Link>
                    </nav>
                )}

                {/* ---------- SORT & VIEW BUTTONS ---------- */}
                <div className="flex w-full justify-between items-center md:order-2 md:w-full md:justify-between lg:order-none lg:w-auto lg:justify-normal gap-8">
                    <button
                        className="box-border inline-flex items-center gap-1 border-0 cursor-pointer"
                        aria-label="Sort products"
                    >
                        <span className="inline-flex items-center gap-1 font-InterSemiBold text-base text-black-900 leading-6.5 z-10 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            Sort by
                        </span>
                        <img
                            className="relative text-black-900 size-5 transition-all hover:drop-shadow-custom"
                            alt="chevron-down"
                            src="/Images/chevron-down.svg"
                        />
                    </button>

                    <div
                        className="inline-flex items-start bg-white border border-solid border-[#eaeaea] transition-all hover:drop-shadow-custom"
                        role="group"
                        aria-label="View options"
                    >
                        {buttons.map((btn, index) => (
                            <button
                                key={btn.id}
                                onClick={() => setActiveButton(btn.id)}
                                className={`relative w-[46px] h-10 border-r border-solid border-neutral-03 cursor-pointer transition-all
                                    ${index < 2 ? "hidden md:block" : "block"}
                                    ${activeButton === btn.id
                                        ? "bg-neutral-03"
                                        : "bg-white hover:bg-neutral-03"
                                    }`}
                                aria-label={btn.label}
                            >
                                <img
                                    className="absolute top-2 left-[11px] size-6 transition-all"
                                    alt={btn.label}
                                    src={activeButton === btn.id ? btn.activeSrc : btn.src}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterAndSortpanel;

