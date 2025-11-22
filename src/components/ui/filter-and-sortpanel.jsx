import React, { useState, useRef, useEffect } from 'react'

function FilterAndSortpanel() {

    const [activeButton, setActiveButton] = useState(2);

    // --- CATEGORIES ---
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Living Room");
    const catDropdownRef = useRef(null);

    // --- PRICE ---
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState("All Price");
    const priceDropdownRef = useRef(null);

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
            <div className="flex container items-end justify-between absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="w-[548px] items-start gap-6 flex">

                    {/* ---------- CATEGORIES ---------- */}
                    <div className="flex flex-col w-[262px] items-start gap-2 relative" ref={catDropdownRef}>
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

                        {isCatOpen && (
                            <nav
                                className="absolute bottom-[110%] left-0 flex flex-col w-[312px] items-start gap-2.5 p-2 bg-white rounded-xl overflow-hidden border-[1.5px] border-solid border-[#f3f5f6] shadow-depth-4 z-50"
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
                        )}
                    </div>

                    {/* ---------- PRICE ---------- */}
                    <div className="flex flex-col w-[262px] items-start gap-2 relative" ref={priceDropdownRef}>
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

                        {isPriceOpen && (
                            <nav
                                className="absolute bottom-[110%] left-0 flex flex-col w-[312px] items-start gap-2.5 p-2 bg-white rounded-xl overflow-hidden border-[1.5px] border-solid border-[#f3f5f6] shadow-depth-4 z-50"
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
                        )}
                    </div>
                </div>

                {/* ---------- SORT & VIEW BUTTONS ---------- */}
                <div className="inline-flex items-center gap-8">
                    <button
                        className="box-border inline-flex items-center gap-1 border-0 cursor-pointer"
                        aria-label="Sort products"
                    >
                        <span className="inline-flex items-center gap-1 font-InterSemiBold text-base text-black-900 leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
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
                        {buttons.map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setActiveButton(btn.id)}
                                className={`relative w-[46px] h-10 border-r border-solid border-neutral-03 cursor-pointer transition-all ${activeButton === btn.id
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

