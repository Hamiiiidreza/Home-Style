import React, { useState } from "react";
import Reviews from "./reviews";
import Questions from "./Questions";
import AdditionalInfo from "./additional-info";

// ✅ shadcn accordion
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Tabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("reviews");

    const tabsProduct = [
        {
            id: "additional-info",
            label: "Additional Info",
            content: <AdditionalInfo product={product} />,
        },
        {
            id: "questions",
            label: "Questions",
            content: <Questions productID={product?.id} />,
        },
        {
            id: "reviews",
            label: "Reviews",
            content: <Reviews product={product} />,
        },
    ];

    return (
        <div className="w-full">

            {/* ================================================= */}
            {/* ✅ Desktop Tabs */}
            {/* ================================================= */}
            <div className="hidden md:block">
                <ul className="flex flex-row border-b border-neutral-03 gap-20">
                    {tabsProduct.map((tab) => (
                        <li key={tab.id}>
                            <button
                                className={`relative font-InterMedium text-lg leading-8 transition-all
                                      ${activeTab === tab.id
                                        ? "border-b border-black text-black"
                                        : "text-[#807E7E]"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    {tabsProduct.map(
                        (tab) =>
                            activeTab === tab.id && (
                                <section key={tab.id}>{tab.content}</section>
                            )
                    )}
                </div>
            </div>

            {/* ================================================= */}
            {/* ✅ Mobile Accordion (shadcn) */}
            {/* ================================================= */}
            <div className="block md:hidden">
                <Accordion
                    type="single"
                    collapsible
                    value={activeTab}
                    onValueChange={(val) => setActiveTab(val)}
                    className="w-full"
                >
                    {tabsProduct.map((tab) => {
                        const isActive = activeTab === tab.id;

                        return (
                            <AccordionItem
                                key={tab.id}
                                value={tab.id}
                                className="border-none"
                            >
                                <AccordionTrigger
                                    className="flex items-center justify-between py-4 no-underline [&>svg]:hidden"
                                >
                                    <div className="w-full flex items-center justify-between border-b pb-4
                                                    transition-colors duration-300"
                                        style={{
                                            borderColor: isActive ? "#000" : "#6c7174",
                                        }}
                                    >
                                        {/* Title */}
                                        <h3
                                            className={`font-InterMedium text-lg transition-colors
                                                      ${isActive ? "text-neutral-07" : "text-neutral-04"}`}
                                        >
                                            {tab.label}
                                        </h3>

                                        {/* Arrow Icon */}
                                        <img
                                            src="/Images/chevron-down.svg"
                                            alt="arrow"
                                            className={`size-6 transition-transform duration-300
                                                      ${isActive ? "rotate-180" : "rotate-0"}`}
                                            style={{
                                                filter: isActive
                                                    ? "none"
                                                    : "brightness(0) saturate(100%) invert(42%) sepia(6%) saturate(300%) hue-rotate(160deg)",
                                            }}
                                        />
                                    </div>
                                </AccordionTrigger>

                                {/* Content */}
                                <AccordionContent
                                    className="pt-4 pb-4 text-sm text-neutral-04 transition-all duration-300"
                                >
                                    {tab.content}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}

                </Accordion>
            </div>
        </div>
    );
};

export default Tabs;
