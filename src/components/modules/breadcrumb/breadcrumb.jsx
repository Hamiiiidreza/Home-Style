import React from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb() {
    return (
        <div>
            <section className="inline-flex items-center justify-center">
                <nav
                    className="inline-flex flex-col items-center gap-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    aria-label="Breadcrumb"
                >
                    <ul className="inline-flex items-start gap-4 m-0 p-0">
                        <li className="inline-flex items-center gap-1">
                            <Link
                                to="/"
                                className="font-InterMedium text-[#605F5F] text-sm tracking-[0] leading-6 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                Home
                            </Link>
                            <img
                                className="w-3 h-3"
                                src="/Images/chevron-right.svg"
                                alt="Breadcrumb separator"
                            />
                        </li>
                        <li className="inline-flex items-center gap-1">
                            <span
                                className="font-InterMedium text-[#121212] text-sm tracking-[0] leading-6 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                aria-current="page"
                            >
                                Shop
                            </span>
                        </li>
                    </ul>
                    <h1
                        className="font-PoppinsMedium text-black text-[54px] tracking-headline-3 leading-[58px] whitespace-nowrap transition-all hover:drop-shadow-custom"
                    >
                        Shop Page
                    </h1>
                    <p
                        className="font-InterRegular text-[#121212] text-xl text-center tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    >
                        Let's design the place you always imagined.
                    </p>
                </nav>
            </section>
        </div>
    )
}

export default Breadcrumb;
