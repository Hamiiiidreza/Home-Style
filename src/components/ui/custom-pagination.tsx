import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "../ui/pagination";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    itemsPerPage?: number;
    onItemsPerPageChange?: (size: number) => void;
    label?: string; // مثلا "محصول" یا "کاربر"
}

const toPersianDigits = (num: number | string): string => {
    return String(num).replace(/[0-9]/g, (w) => "۰۱۲۳۴۵۶۷۸۹"[w]);
};

export default function CustomPagination({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    itemsPerPage,
    onItemsPerPageChange,
    label = "مورد"
}: CustomPaginationProps) {
    if (totalPages <= 1 && !totalItems) return null;

    return (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6" dir="rtl">

            <div className="flex-1 text-right">
                {totalItems !== undefined && (
                    <span className="font-VazirMedium text-sm text-neutral-06">
                        مجموع {toPersianDigits(totalItems)} {label}
                    </span>
                )}
            </div>

            <div className="flex-1 flex justify-center">
                <Pagination>
                    <PaginationContent className="flex items-center gap-2">
                        <PaginationItem>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange(Math.max(currentPage - 1, 1));
                                }}
                                disabled={currentPage === 1}
                                className="group size-10 flex items-center justify-center rounded-md transition-colors bg-white text-neutral-07 border hover:text-white hover:bg-main disabled:opacity-40 disabled:pointer-events-none active:scale-95 cursor-pointer"
                            >
                                <ChevronRight size={18} className="text-gray-700 transition-colors group-hover:text-white" />
                            </button>
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;

                            if (pageNumber <= 3 || pageNumber === totalPages) {
                                const isActive = currentPage === pageNumber;
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onPageChange(pageNumber);
                                            }}
                                            className={`size-10 flex items-center justify-center rounded-md text-sm font-VazirMedium transition-all cursor-pointer
                                            ${isActive
                                                    ? "bg-main text-white border-main hover:bg-main/90"
                                                    : "bg-white text-neutral-07 border hover:text-white hover:bg-main"
                                                }`}
                                        >
                                            {toPersianDigits(pageNumber)}
                                        </button>
                                    </PaginationItem>
                                );
                            }
                            if (pageNumber === 4 && totalPages > 4) {
                                return (
                                    <PaginationItem key="dots">
                                        <span className="size-10 flex items-center justify-center text-gray-400 font-bold select-none">
                                            ...
                                        </span>
                                    </PaginationItem>
                                );
                            }
                            return null;
                        })}

                        <PaginationItem>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onPageChange(Math.min(currentPage + 1, totalPages));
                                }}
                                disabled={currentPage === totalPages}
                                className="group size-10 flex items-center justify-center rounded-md transition-colors bg-white text-neutral-07 border hover:text-white hover:bg-main disabled:opacity-40 disabled:pointer-events-none active:scale-95 cursor-pointer"
                            >
                                <ChevronLeft size={18} className="text-gray-700 transition-colors group-hover:text-white" />
                            </button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <div className="flex-1 flex justify-end items-center gap-2">
                {itemsPerPage !== undefined && (
                    <>
                        <span className="text-sm font-VazirRegular text-neutral-05">
                            تعداد در صفحه
                        </span>

                        <Select
                            value={String(itemsPerPage)}
                            onValueChange={(value) =>
                                onItemsPerPageChange?.(Number(value))
                            }
                        >
                            <SelectTrigger className="w-[70px] font-VazirMedium">
                                <SelectValue placeholder="انتخاب" />
                            </SelectTrigger>

                            <SelectContent className='font-VazirRegular'>
                                <SelectItem value="10">{toPersianDigits(10)}</SelectItem>
                                <SelectItem value="20">{toPersianDigits(20)}</SelectItem>
                                <SelectItem value="50">{toPersianDigits(50)}</SelectItem>
                            </SelectContent>
                        </Select>
                    </>
                )}
            </div>
        </div>
    );
}

