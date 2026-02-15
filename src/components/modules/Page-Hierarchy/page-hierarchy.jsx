import React from "react";

export default function PageHierarchy({ items = [] }) {
    return (
        <div className="container">

            {/* ✅ Mobile Back Button */}
            <div className="flex items-center gap-2 my-4 md:hidden">
                <img
                    src="/Images/chevron-right.svg"
                    alt="Back"
                    className="size-3 rotate-180"
                />
                <span className="font-InterMedium text-sm text-neutral-04">
                    back
                </span>
            </div>

            {/* ✅ Desktop Breadcrumb */}
            <nav className="hidden md:inline-flex items-start gap-4 relative my-4">
                <ul className="inline-flex items-start gap-4 *:font-InterMedium *:text-sm *:leading-6 *:text-neutral-04">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index}>
                                <div
                                    className={`inline-flex items-center gap-1 transition-all hover:drop-shadow-custom ${isLast ? "text-black" : ""
                                        }`}
                                >
                                    <div className="w-fit">{item}</div>

                                    {!isLast && (
                                        <img
                                            className="size-3"
                                            src="/Images/chevron-right.svg"
                                            alt="Stepper separator"
                                        />
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

