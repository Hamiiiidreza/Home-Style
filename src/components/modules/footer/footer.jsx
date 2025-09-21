import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="w-full pt-20 pb-8 px-20 bg-neutral-07">
        <div className="flex flex-col md:flex-row justify-between items-center mb-[49px]">
            <div className="flex items-center gap-8 mb-6 md:mb-0">
                <div className="w-[105px]">
                    <h1 className="font-PoppinsMedium text-2xl">
                        <span className="text-white">3legant</span>
                        <span className="text-neutral-04">.</span>
                    </h1>
                </div>
                <div className="w-px h-6 bg-neutral-04"></div>
                <p className="font-InterRegular text-sm text-neutral-03">
                    Gift & Decoration Store
                </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
                {['Home', 'Shop', 'Product', 'Blog', 'Contact Us'].map((item) => (
                    <Link
                        key={item}
                        to=""
                        className="font-InterRegular text-sm text-neutral-01"
                    >
                        {item}
                    </Link>
                ))}
            </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 pb-5 border-t border-neutral-04">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-7 mb-4 md:mb-0">
                <p className="font-InterRegular text-xs text-neutral-03">
                    Copyright © 2023 3legant. All rights reserved
                </p>
                <Link to="" className="font-InterBold text-xs text-neutral-01">
                    Privacy Policy
                </Link>
                <Link to="" className="font-InterBold text-xs text-neutral-01">
                    Terms of Use
                </Link>
            </div>

            <div className="flex gap-6">
                <Link to="" aria-label="Instagram">
                    <img
                        className="size-6"
                        src="/Images/instagram.svg"
                        alt="Instagram"
                    />
                </Link>
                <Link to="" aria-label="Facebook">
                    <img
                        className="size-6"
                        src="/Images/facebook.svg"
                        alt="Facebook"
                    />
                </Link>
                <Link to="" aria-label="YouTube">
                    <img
                        className="size-6"
                        src="/Images/youtube.svg"
                        alt="YouTube"
                    />
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;