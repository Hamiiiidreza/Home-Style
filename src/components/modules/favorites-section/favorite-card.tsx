import React from "react";
import { Heart } from "lucide-react";
import { FavoriteItem } from "../../../types/favorite.types";

interface FavoriteCardProps {
    item: FavoriteItem;
}

export default function FavoriteCard({ item }: FavoriteCardProps) {
    const isAvailable = item.status === "موجود";

    return (
        <div className="group relative overflow-hidden rounded-md border bg-white shadow-sm transition-all hover:drop-shadow-custom">
            {/* image */}
            <div className="relative h-40 w-full overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* heart */}
                <button className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50 cursor-pointer">
                    <Heart className="size-5 text-secondary-color-red fill-secondary-color-red" />
                </button>

                {/* status badge */}
                <span
                    className={`absolute left-3 bottom-3 rounded-full px-3 py-1 text-xs font-VazirMedium ${isAvailable
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                >
                    {item.status}
                </span>
            </div>

            {/* content */}
            <div className="p-4">
                <h3 className="line-clamp-1 text-right text-sm font-VazirBold text-neutral-07">
                    {item.name}
                </h3>

                <div className="mt-2 text-right text-sm text-neutral-05">
                    <span className="font-VazirBold">
                        {item.price.toLocaleString("fa-IR")}
                    </span>{" "}
                    <span className="font-VazirBold mr-1">تومان</span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2">
                    <button
                        disabled={!isAvailable}
                        className={`rounded-xl px-4 py-2 text-sm font-VazirMedium transition ${isAvailable
                                ? "bg-main text-white border-main transition-colors hover:bg-main/90 cursor-pointer"
                                : "cursor-not-allowed bg-stone-200 text-stone-400"
                            }`}
                    >
                        افزودن به سبد
                    </button>
                    <button className="rounded-xl border px-4 py-2 text-sm font-VazirMedium text-neutral-07 transition-all hover:bg-main hover:text-white cursor-pointer">
                        حذف
                    </button>
                </div>
            </div>
        </div>
    );
}
