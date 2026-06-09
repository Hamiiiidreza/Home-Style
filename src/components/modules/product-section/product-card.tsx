import React from "react";
import { ProductCardProps } from "../../../types/product.types";
import {
  Heart,
  Share2,
  StarIcon,
  MessageSquare
} from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
}) => (
  <Link
    to={''}
    className="w-full block shadow rounded-xl relative group transition-all hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-white"
  >
    <div className="relative p-5 w-full bg-cover bg-center transition-all">
      <div className="absolute inset-0 rounded-t-xl bg-neutral-02 z-0"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] rounded-t-xl object-contain mix-blend-multiply transition-all group-hover:blur-sm"
      />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <Button className="h-9 px-4 font-VazirMedium bg-white text-main border border-main rounded-lg shadow-sm hover:bg-main hover:text-white transition-colors text-sm cursor-pointer">
          افزودن به خرید
        </Button>

        <Button className="h-9 w-8 flex items-center justify-center bg-white text-main border border-main rounded-lg shadow-sm hover:bg-main hover:text-white transition-colors cursor-pointer">
          <Share2 size={18} />
        </Button>

        <Button className="h-9 w-8 flex items-center justify-center bg-white text-main border border-main rounded-lg shadow-sm hover:bg-main hover:text-white transition-colors group/heart cursor-pointer">
          <Heart size={18} className="group-hover/heart:fill-current" />
        </Button>

        <Button className="h-9 w-8 flex items-center justify-center bg-white text-main border border-main rounded-lg shadow-sm hover:bg-main hover:text-white transition-colors group/heart cursor-pointer">
          <MessageSquare size={18} />
        </Button>
      </div>
    </div>

    {discount && (
      <div className="px-2.5 text-sm py-1 -rotate-z-20 absolute -left-2 -top-2 rounded transition-all bg-main z-20 shadow-md">
        <span className="font-VazirBold text-neutral-01">
          {discount}
        </span>
      </div>
    )}

    <div className="py-3 px-3 transition-all group-hover:blur-sm">
      <div className="flex justify-between gap-2 items-center">
        <h2 className="font-VazirBold text-base text-neutral-07 truncate">{title}</h2>
        <div className="flex gap-0.5 shrink-0">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="fill-orange-400 stroke-orange-400" size={14} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <span className="font-VazirBold text-base text-neutral-07">{price}</span>
        {originalPrice && (
          <span className="font-VazirRegular text-sm text-neutral-04 line-through">
            {originalPrice}
          </span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;

