import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (

    <footer className="w-full bg-neutral-07 px-8 py-12 md:px-40 md:pt-20 md:pb-8 lg:px-60 lg:pt-24 lg:pb-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-[49px] lg:mb-16">

            {/* Logo & Text */}
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-0 text-center md:text-left">
                <div className="w-[105px]">
                    <h1 className="font-VazirMedium text-2xl lg:text-3xl">
                        <span className="text-white">۳اِلِگِنت</span>
                        <span className="text-neutral-04">.</span>
                    </h1>
                </div>
                <div className="w-6 h-px md:w-px md:h-6 bg-neutral-04 my-2 md:my-0"></div>
                <p className="font-VazirRegular text-sm lg:text-base text-neutral-03">
                    فروشگاه هدیه و دکوراسیون
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-10 lg:gap-12">
                {['خانه', 'فروشگاه', 'محصول', 'بلاگ', 'تماس با ما'].map((item) => (
                    <Link
                        key={item}
                        to=""
                        className="font-VazirRegular text-sm lg:text-base text-neutral-01"
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
                    <Link to="" className="font-VazirBold text-xs lg:text-sm text-neutral-01">
                        سیاست حفظ حریم خصوصی
                    </Link>
                    <Link to="" className="font-VazirBold text-xs lg:text-sm text-neutral-01">
                        شرایط استفاده
                    </Link>
                </div>

                {/* Copyright */}
                <p className="font-VazirRegular text-xs lg:text-sm text-neutral-03 order-2 md:order-1">
                    © 2023 ۳اِلِگِنت. تمامی حقوق محفوظ است
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;

