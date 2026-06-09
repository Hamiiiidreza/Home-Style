import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

type Mode = "shop" | "blog";

type FilterAndSortpanelProps = {
    mode?: Mode;
    defaultActiveButton?: number;
};

const FilterAndSortpanel = ({
    mode = "shop",
    defaultActiveButton = 2,
}: FilterAndSortpanelProps) => {
    const [activeButton, setActiveButton] = useState<number>(defaultActiveButton);

    // --- CATEGORIES ---
    const [selectedCategory, setSelectedCategory] =
        useState<string>("اتاق نشیمن");

    // --- PRICE ---
    const [selectedPrice, setSelectedPrice] = useState<string>("همه قیمت ها");

    // --- SORT ---
    const [selectedSort, setSelectedSort] =
        useState<string>("price-desc");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const handleMobileActive = () => {
            if (mediaQuery.matches && activeButton < 3) {
                setActiveButton(3);
            }
        };

        handleMobileActive();
        mediaQuery.addEventListener("change", handleMobileActive);

        return () => {
            mediaQuery.removeEventListener("change", handleMobileActive);
        };
    }, [activeButton]);

    const categories = [
        "همه اتاق‌ها",
        "اتاق نشیمن",
        "اتاق خواب",
        "حمام",
        "آشپزخانه",
        "ناهارخوری",
        "فضای بیرونی",
    ];

    const prices = [
        "همه قیمت ها",
        "۰ تا ۵۰ دلار",
        "۵۰ تا ۱۰۰ دلار",
        "۱۰۰ تا ۲۰۰ دلار",
        "۲۰۰ تا ۵۰۰ دلار",
        "بیش از ۵۰۰ دلار",
    ];

    const sortOptions = [
        { label: "بیشترین قیمت", value: "price-desc" },
        { label: "کم ترین قیمت", value: "price-asc" },
        { label: "پر بازدیدترین", value: "most-viewed" },
    ];


    return (
        <div>
            <div className="w-full flex flex-col gap-6 pt-8 md:flex-row md:flex-wrap md:items-end md:justify-between md:pt-0">
                {/* ----------- MODE: SHOP (Category + Price) ---------- */}
                {mode === "shop" && (
                    <div className="flex flex-col gap-2 w-full md:w-auto md:flex-row md:justify-center xl:w-auto xl:justify-center">
                        {/* ---------- CATEGORIES ---------- */}
                        <div className="flex flex-col w-full md:w-[220px] items-start gap-2 relative">
                            <label className="font-VazirBold text-neutral-04 text-base leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                دسته بندی ها
                            </label>

                            <Select
                                value={selectedCategory}
                                onValueChange={setSelectedCategory}
                            >
                                <SelectTrigger
                                    className="w-full h-12 rounded-lg border-2 border-solid border-neutral-08 bg-transparent font-VazirBold text-base text-neutral-07 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                                    dir="rtl"
                                >
                                    <SelectValue placeholder="دسته بندی را انتخاب کنید" />
                                </SelectTrigger>

                                <SelectContent
                                    className="z-50 bg-white rounded-xl border-[1.5px] border-[#f3f5f6] shadow-depth-4 text-right"
                                    position="popper"
                                >
                                    {categories.map((cat) => (
                                        <SelectItem
                                            key={cat}
                                            value={cat}
                                            className="font-VazirRegular text-right"
                                        >
                                            {cat}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* ---------- PRICE ---------- */}
                        <div className="flex flex-col w-full md:w-[220px] items-start gap-2 relative">
                            <label className="font-VazirBold text-neutral-04 text-base leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                قیمت
                            </label>

                            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                                <SelectTrigger
                                    className="w-full h-12 rounded-lg border-2 border-solid border-neutral-08 bg-transparent font-VazirBold text-base text-neutral-07 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                                    dir="rtl"
                                >
                                    <SelectValue placeholder="بازه قیمت را انتخاب کنید" />
                                </SelectTrigger>

                                <SelectContent
                                    className="z-50 bg-white rounded-xl border-[1.5px] border-[#f3f5f6] shadow-depth-4 text-right"
                                    position="popper"
                                >
                                    {prices.map((price) => (
                                        <SelectItem
                                            key={price}
                                            value={price}
                                            className="font-VazirRegular text-right"
                                        >
                                            {price}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                )}

                {/* ----------- MODE: BLOG (All Blog + Featured) ---------- */}
                {mode === "blog" && (
                    <nav className="inline-flex items-center gap-10">
                        <Link
                            to="#"
                            className="inline-flex items-center gap-1 border-b border-solid border-[#111111] transition-all hover:drop-shadow-custom"
                            aria-current="page"
                        >
                            <span className="font-InterSemiBold text-sm text-black-900 tracking-[0] leading-5.5 w-fit whitespace-nowrap">
                                All Blog
                            </span>
                        </Link>
                        <Link
                            to="#"
                            className="inline-flex items-center gap-1 transition-all hover:drop-shadow-custom"
                        >
                            <span className="font-InterSemiBold text-sm text-[#807E7E] tracking-[0] leading-5.5 w-fit whitespace-nowrap">
                                Featured
                            </span>
                        </Link>
                    </nav>
                )}

                {/* ---------- SORT ---------- */}
                <div className="flex w-full items-center md:order-2 md:w-full md:justify-between lg:order-none lg:w-auto lg:justify-normal gap-8">
                    <div className="flex flex-col w-full md:w-[220px] items-start gap-2 relative">
                        <label className="font-VazirBold text-neutral-04 text-base leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                            مرتب‌سازی بر اساس
                        </label>

                        <Select value={selectedSort} onValueChange={setSelectedSort}>
                            <SelectTrigger
                                className="w-full h-12 rounded-lg border-2 border-solid border-neutral-08 bg-transparent font-VazirBold text-base text-black-900 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                                dir="rtl"
                            >
                                <SelectValue placeholder="مرتب‌سازی را انتخاب کنید" />
                            </SelectTrigger>

                            <SelectContent
                                className="z-50 bg-white rounded-xl border-[1.5px] border-[#f3f5f6] shadow-depth-4 text-right"
                                position="popper"
                            >
                                {sortOptions.map((item) => (
                                    <SelectItem
                                        key={item.value}
                                        value={item.value}
                                        className="font-VazirRegular text-right"
                                    >
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterAndSortpanel;



