import React, { useState } from "react";
import { Heart, Search, ChevronLeft } from "lucide-react";
import FavoriteCard from "./favorite-card";
import { FavoriteItem } from "../../../types/favorite.types";
import PageHierarchy from "../Page-Hierarchy/page-hierarchy";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import CustomPagination from "../../ui/custom-pagination";
import CustomInput from "../../ui/custom-input"

const favorites: FavoriteItem[] = [
    { id: 1, name: "مبل ال مخملی – کرم", price: 85000000, status: "موجود", hasDiscount: false, image: "/Images/product-13.png" },
    { id: 2, name: "مبل چستر سه نفره – سبز", price: 78000000, status: "موجود", hasDiscount: true, image: "/Images/product-14.png" },
    { id: 3, name: "صندلی راحتی – بژ", price: 25500000, status: "موجود", hasDiscount: false, image: "/Images/product-15.png" },
    { id: 4, name: "میز ناهارخوری چوبی", price: 62000000, status: "موجود", hasDiscount: true, image: "/Images/product-16.webp" },
    { id: 5, name: "مبل راحتی سه نفره – قهوه‌ای", price: 59000000, status: "ناموجود", hasDiscount: false, image: "/Images/product-19.webp" },
    { id: 6, name: "صندلی راحتی چوبی – کرم", price: 21300000, status: "موجود", hasDiscount: false, image: "/Images/product-22.jpg" },
];

export default function FavoritesSection() {
    const filterButtons: string[] = ["همه", "موجود", "ناموجود", "در تخفیف"];
    const [filter, setFilter] = useState<string>("همه");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 3;

    const filteredFavorites = favorites.filter((item) => {
        if (filter === "همه") return true;
        if (filter === "موجود") return item.status === "موجود";
        if (filter === "ناموجود") return item.status === "ناموجود";
        if (filter === "در تخفیف") return item.hasDiscount;
        return true;
    });

    const totalPages = Math.ceil(filteredFavorites.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedFavorites = filteredFavorites.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handleFilterChange = (btn: string) => {
        setFilter(btn);
        setCurrentPage(1);
    };

    return (
        <section
            dir="rtl"
            className="w-full bg-white p-6 my-10 border rounded-md shadow-sm transition-all hover:drop-shadow-custom"
        >
            <PageHierarchy items={["پیشخوان", "علاقه‌مندی‌ها"]} />

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center size-9 rounded-md bg-neutral-01">
                        <Heart className="size-5.5 text-secondary-color-blue" />
                    </div>
                    <h2 className="flex items-center text-2xl font-VazirBold text-neutral-07">
                        علاقه‌مندی‌ها
                    </h2>
                </div>
                <h4 className="flex items-center gap-2 text-xs font-VazirMedium text-secondary-color-blue cursor-pointer">
                    مشاهده همه
                    <ChevronLeft size={14} />
                </h4>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between my-6 gap-4">
                <div className="flex gap-2 font-VazirMedium text-sm">
                    {filterButtons.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleFilterChange(btn)}
                            className={`px-6 py-2 rounded-md border cursor-pointer transition-all ${filter === btn
                                    ? "bg-main text-white border-main hover:bg-main/90"
                                    : "bg-white text-neutral-07 border hover:text-white hover:bg-main"
                                }`}
                        >
                            {btn}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative transition-all hover:drop-shadow-custom">
                        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-04 cursor-pointer z-10" />
                        <CustomInput
                            type="text"
                            placeholder="جستجو در علاقه‌مندی‌ها..."
                            inputClassName="h-10 w-full rounded-md border border-stone-200 bg-white px-4 font-VazirRegular text-sm outline-none transition-all placeholder:text-neutral-04 focus:border-neutral-04 sm:w-80 pl-10"
                        />
                    </div>

                    <Select defaultValue="">
                        <SelectTrigger
                            className="w-[160px] font-VazirRegular text-base text-neutral-07 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                            dir="rtl"
                        >
                            <SelectValue placeholder="مرتب سازی" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                            <SelectItem value="newest" className="font-VazirRegular">
                                جدیدترین
                            </SelectItem>
                            <SelectItem value="oldest" className="font-VazirRegular">
                                قدیمی‌ترین
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {paginatedFavorites.map((item) => (
                    <FavoriteCard key={item.id} item={item} />
                ))}
            </div>

            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}


