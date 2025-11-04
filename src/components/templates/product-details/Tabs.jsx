import React from "react";
import { useState } from "react";
import Reviews from "./reviews";
import Questions from "./Questions";
import AdditionalInfo from "./additional-info";

const Tabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("reviews");

    const tabsProduct = [
        { id: "additional-info", label: "Additional info" },
        { id: "questions", label: "Questions" },
        { id: "reviews", label: "Reviews" }
    ];

    return (
        <div data-aos="fade-left" className="w-full">
            {/* Tab Navigation */}
            <ul className="flex flex-row list-none p-0 m-0 border-b border-neutral-03 gap-20">
                {tabsProduct.map((tab) => (
                    <li key={tab.id} className="m-0">
                        <button
                            className={`relative font-InterMedium text-lg leading-8 tracking-button-m transition-all hover:drop-shadow-custom ${activeTab === tab.id
                                    ? "border-b border-solid border-black"
                                    : "text-[#807E7E] transition-all hover:drop-shadow-custom"
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                            {tab.count > 0 && (
                                <span className="mr-1 text-xs">({tab.count})</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content */}
            <div className="">
                <section className="w-full">
                    {activeTab === "additional-info" && (
                        <AdditionalInfo
                            product={product}
                        />
                    )}
                    {activeTab === "questions" && (
                        <Questions
                            productID={product?.id}
                        />
                    )}
                    {activeTab === "reviews" && (
                        <Reviews
                            product={product}
                        />
                    )}
                </section>
            </div>
        </div>
    );
};

export default Tabs;