import React from 'react';
import ProductCard from './product-card';
import SectionHeader from '../../ui/section-header';

const ProductSection = () => {
    const products = [
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
    ];

    return (
        <section className="w-full py-12 bg-white">
            <div className="container">
                <SectionHeader
                    title="New Arrivals"
                    linkText="More Products"
                    to=""
                    mbClass="mb-12"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                <div className="w-full h-1 bg-neutral-03 rounded-full mt-12">
                    <div className="w-3/4 h-full bg-neutral-05 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;