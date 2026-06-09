import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "../ui/pagination"; 

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const toPersianDigits = (num: number | string): string => {
    return String(num).replace(/[0-9]/g, (w) => "۰۱۲۳۴۵۶۷۸۹"[w]);
};

export default function CustomPagination({
    currentPage,
    totalPages,
onPageChange,
}: CustomPaginationProps) {
    // اگر صفحات کمتر یا مساوی ۱ بود، چیزی نمایش داده نشود
    if (totalPages <= 1) return null;

    return (
        <div className="mt-8 flex justify-center" dir="rtl">
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
                    })}
                    <PaginationItem>
                        <span className="size-10 flex items-center justify-center text-gray-400 font-bold select-none">
                            ...
                        </span>
                    </PaginationItem>
                    <PaginationItem>
                        <button
                            type="button"
                            className="size-10 flex items-center justify-center rounded-md font-VazirMedium text-sm transition-colors bg-white text-neutral-07 border hover:text-white hover:bg-main cursor-pointer"
                        >
                            A
                        </button>
                    </PaginationItem>
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
    );
}
