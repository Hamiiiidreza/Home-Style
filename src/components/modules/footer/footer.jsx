import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="w-full bg-neutral-07 px-20 py-12 ">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-[49px] lg:mb-16">

            {/* Logo & Text */}
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-0 text-center md:text-left">
                <div className="w-[105px]">
                    <h1 className="font-PoppinsMedium text-2xl lg:text-3xl">
                        <span className="text-white">3legant</span>
                        <span className="text-neutral-04">.</span>
                    </h1>
                </div>

                <div className="w-6 h-px md:w-px md:h-6 bg-neutral-04 my-2 md:my-0"></div>

                <p className="font-InterRegular text-sm lg:text-base text-neutral-03">
                    Gift & Decoration Store
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-10 lg:gap-12">
                {['Home', 'Shop', 'Product', 'Blog', 'Contact Us'].map((item) => (
                    <Link
                        key={item}
                        to=""
                        className="font-InterRegular text-sm lg:text-base text-neutral-01"
                    >
                        {item}
                    </Link>
                ))}
            </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-6 pt-4 pb-5 lg:pt-6 lg:pb-6 border-t border-neutral-04">

            {/* Social Media */}
            <div className="flex gap-6 order-1 md:order-2">
                <Link to="" aria-label="Instagram">
                    <img className="size-6 lg:size-7" src="/Images/instagram.svg" alt="Instagram" />
                </Link>
                <Link to="" aria-label="Facebook">
                    <img className="size-6 lg:size-7" src="/Images/facebook.svg" alt="Facebook" />
                </Link>
                <Link to="" aria-label="YouTube">
                    <img className="size-6 lg:size-7" src="/Images/youtube.svg" alt="YouTube" />
                </Link>
            </div>

            {/* Texts: Privacy & Terms + Copyright */}
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-3 md:gap-7 lg:gap-10 order-2 md:order-1 text-center md:text-left">

                {/* Privacy & Terms */}
                <div className="flex gap-4 order-1 md:order-2">
                    <Link to="" className="font-InterBold text-xs lg:text-sm text-neutral-01">
                        Privacy Policy
                    </Link>
                    <Link to="" className="font-InterBold text-xs lg:text-sm text-neutral-01">
                        Terms of Use
                    </Link>
                </div>

                {/* Copyright */}
                <p className="font-InterRegular text-xs lg:text-sm text-neutral-03 order-2 md:order-1">
                    Copyright © 2023 3legant. All rights reserved
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;

