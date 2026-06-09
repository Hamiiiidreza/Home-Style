import React from "react";
import ProductCard from "./product-card";
import SectionHeader from "../../ui/section-header";
import ButtonCard from "../../ui/button-card";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../../../types/product.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type ProductSectionProps = {
  showHeader?: boolean;
  products?: ProductCardProps[];
  isSlider?: boolean;
};

const ProductSection: React.FC<ProductSectionProps> = ({
  showHeader = true,
  products,
  isSlider = true,
}) => {
  const defaultProducts: ProductCardProps[] = [
    {
      id: "p1",
      image: "/Images/product-1.png",
      title: "مبل دونفره",
      price: "۳۱,۸۴۰,۰۰۰ تومان",
      originalPrice: "۶۴,۰۰۰,۰۰۰ تومان",
      isNew: true,
      discount: "٪۵۰-",
    },
    {
      id: "p2",
      image: "/Images/product-2.png",
      title: "چراغ رومیزی",
      price: "۳,۹۹۸,۴۰۰ تومان",
      isNew: true,
    },
    {
      id: "p3",
      image: "/Images/product-3.png",
      title: "چراغ رومیزی بژ",
      price: "۳,۹۹۸,۴۰۰ تومان",
      isNew: true,
    },
    {
      id: "p4",
      image: "/Images/product-4.png",
      title: "سبد بامبو",
      price: "۳,۹۹۸,۴۰۰ تومان",
      isNew: true,
    },
    {
      id: "p5",
      image: "/Images/product-5.png",
      title: "صندلی غذاخوری",
      price: "۱۴,۲۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p6",
      image: "/Images/product-6.png",
      title: "مبل تک نفره",
      price: "۳۹,۸۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p7",
      image: "/Images/product-7.png",
      title: "مبل پارچه‌ای",
      price: "۵۵,۸۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p8",
      image: "/Images/product-8.png",
      title: "کتابخانه",
      price: "۲۸,۶۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p9",
      image: "/Images/product-9.png",
      title: "چراغ ایستاده",
      price: "۹,۴۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p10",
      image: "/Images/product-10.png",
      title: "میز قهوه‌خوری",
      price: "۲۳,۸۴۰,۰۰۰ تومان",
      isNew: true,
    },
    {
      id: "p11",
      image: "/Images/product-11.png",
      title: "ست کوسن",
      price: "۳,۱۹۸,۴۰۰ تومان",
      isNew: true,
    },
    {
      id: "p12",
      image: "/Images/product-12.png",
      title: "ست کوسن",
      price: "۳,۱۹۸,۴۰۰ تومان",
      isNew: true,
    },
  ];

  const allProducts = products ?? defaultProducts;

  return (
    <section className="w-full bg-white">
      {showHeader && (
        <SectionHeader
          title="محصولات جدید"
          linkText="سایر محصولات"
          to="/shop"
          mbClass="mb-12"
          mobileLayout="seprate"
        />
      )}

      {isSlider ? (
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnFocusIn: false,
              stopOnMouseEnter: false,
              stopOnInteraction: false,
              stopOnLastSnap: false,
            }),
          ]}
          opts={{
            direction: "rtl",
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent parentContentCls="py-5 px-2" className="px-4">
            {allProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex absolute bg-main text-white left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="hidden sm:flex absolute bg-main text-white right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {allProducts.slice(0, 12).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}


      <div className="flex justify-center mt-10">
        <ButtonCard
          title="مشاهده بیشتر"
          onClick={() => console.log("Show more clicked")}
          className="add-to-cart-btn font-VazirMedium text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 transition-colors hover:text-white hover:bg-main"
        />
      </div>

      {showHeader && (
        <div className="flex justify-start mt-6 md:hidden">
          <Link
            to=""
            className="flex items-center gap-1 pb-1 mt-4 md:mt-0 transition-all hover:shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)]"
          >
            <span className="font-VazirMedium text-sm text-neutral-07">
              سایر محصولات
            </span>
            <GoArrowLeft className="size-5" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
