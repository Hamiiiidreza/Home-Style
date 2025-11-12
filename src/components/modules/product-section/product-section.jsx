import React from 'react';
import ProductCard from './product-card';
import SectionHeader from '../../ui/section-header';
import ButtonCard from '../../ui/button-card';

const ProductSection = ({
    showHeader = true,
    productCount = 4,
    showBorder = true,
}) => {
    const allProducts = [
        {
            image: "/Images/product-1.png",
            title: "Loveseat Sofa",
            price: "$199.00",
            originalPrice: "$400.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-2.png",
            title: "Table Lamp",
            price: "$24.99",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-3.png",
            title: "Beige Table Lamp",
            price: "$24.99",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-4.png",
            title: "Bamboo basket",
            price: "$24.99",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-5.png",
            title: "Dining Chair",
            price: "$89.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-6.png",
            title: "Wooden Table",
            price: "$249.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-7.png",
            title: "Modern Lamp",
            price: "$39.99",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-8.png",
            title: "Fabric Sofa",
            price: "$349.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-9.png",
            title: "Cushion Set",
            price: "$19.99",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-10.png",
            title: "Coffee Table",
            price: "$149.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-11.png",
            title: "Bookshelf",
            price: "$179.00",
            isNew: true,
            discount: "-50%"
        },
        {
            image: "/Images/product-12.png",
            title: "Floor Lamp",
            price: "$59.00",
            isNew: true,
            discount: "-50%"
        },
    ];

    // فقط به تعداد مورد نیاز محصولات را نشان می‌دهد
    const displayedProducts = allProducts.slice(0, productCount);

    return (
        <section className="w-full py-12 bg-white">
            <div className="container">
                {showHeader && (
                    <SectionHeader
                        title="New Arrivals"
                        linkText="More Products"
                        to=""
                        mbClass="mb-12"
                    />
                )}

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 ${showHeader ? '' : 'mt-0'}`}>
                    {displayedProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                {productCount === 12 && (
                    <div className="flex justify-center mt-10">
                        <ButtonCard
                            title="Show More"
                            onClick={() => console.log("Show more clicked")}
                            className="add-to-cart-btn font-InterMedium text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                        />
                    </div>
                )}

                {showBorder && (
                    <div className="w-full h-1 bg-neutral-03 rounded-full mt-12">
                        <div className="w-3/4 h-full bg-neutral-05 rounded-full"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductSection;
