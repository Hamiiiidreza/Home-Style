import React from "react";
import CategoryCard from "./category-card";

// CategorySection.jsx
const CategorySection = () => (
    <div className="container">
        <section className="w-full bg-white flex flex-nowrap items-center flex-col md:flex-row gap-6">
            <div className="w-[548px] overflow-hidden bg-neutral-02 group hover:drop-shadow-custom transition-all">
                <CategoryCard
                    image="/Images/category-1.png"
                    title="Living Room"
                    heightClass="h-[664px]"
                    isTop={true}
                />
            </div>

            <div className="w-[548px] flex flex-col gap-6">
                <div className="group hover:drop-shadow-custom transition-all">
                    <CategoryCard
                        image="/Images/category-2.png"
                        title="Bedroom"
                        heightClass="h-[319px]"
                        isTop={false}
                        hasInnerLeftBorder={true}
                    />
                </div>
                <div className="group hover:drop-shadow-custom transition-all">
                    <CategoryCard
                        image="/Images/category-3.png"
                        title="Kitchen"
                        heightClass="h-[319px]"
                        isTop={false}
                        hasInnerLeftBorder={false}
                    />
                </div>
            </div>
        </section>
    </div>
);

export default CategorySection;