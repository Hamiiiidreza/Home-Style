import React from "react";

export default function PageHierarchy({ items = [] }) {
    return (
        <div className="container">
            <nav className="inline-flex items-start gap-4 relative my-4">
                <ul className="inline-flex items-start gap-4 *:font-InterMedium *:text-sm *:leading-6 *:text-neutral-04">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index}>
                                <div
                                    className={`inline-flex items-center gap-1 transition-all hover:drop-shadow-custom ${isLast ? "text-black" : ""
                                        }`}
                                >
                                    <div className="w-fit">
                                        {item}
                                    </div>

                                    {!isLast && (
                                        <img
                                            className="w-3 h-3"
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

