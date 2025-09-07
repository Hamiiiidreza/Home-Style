import React from 'react';
import ArrowLink from '../../ui/arrow-link';

const SaleBanner = () => (
    <section className="w-full flex flex-col md:flex-row">
        <img
            className="w-full md:w-1/2 h-[532px] bg-cover bg-center"
            src='/Images/salebanner.png'
            alt='salebanner'
        />

        <div className="w-full md:w-1/2 h-[532px] bg-neutral-02 flex items-center justify-center p-12">
            <div className="max-w-md">
                <p className="font-InterBold text-base text-secondary-color-blue mb-4 leading-none transition-all hover:drop-shadow-custom">
                    SALE UP TO 35% OFF
                </p>
                <h2 className="font-PoppinsMedium leading-1.1 text-neutral-07 text-4xl mb-4 tracking-headline-4 transition-all hover:drop-shadow-custom">
                    HUNDREDS of <br />New lower prices!
                </h2>
                <p className="font-InterRegular leading-1.6 text-xl text-neutral-07 mb-6 transition-all hover:drop-shadow-custom">
                    It's more affordable than ever to give every room in your home a stylish makeover
                </p>
                <ArrowLink
                title="Shop Now"
                textColor="text-neutral-07"
                borderColor="border-neutral-07"
                to="/Shop"
                />
            </div>
        </div>
    </section>
);

export default SaleBanner;