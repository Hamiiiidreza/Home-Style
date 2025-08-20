import React from 'react';

const Hero = () => (
    <div className="container">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 w-full py-10 mb-10 bg-white">
            <h2 className="w-[57.5] text-7xl font-PoppinsMedium tracking-hero hover:drop-shadow-custom transition-all">
                <span className="text-neutral-07 inline-block">Simply Unique</span>
                <span className="text-neutral-04 inline-block">/</span>
                
                <span className="text-neutral-07">Simply Better</span>
                <span className="text-neutral-04">.</span>
            </h2>

            <div className="w-[42.5] max-w-md">
                <p className="font-InterRegular text-base leading-1.625 text-neutral-04 py-[50px]">
                    <span className="text-base font-InterSemiBold leading-1.625 text-neutral-05">3legant</span> is a gift & decorations store based in HCMC, Vietnam.
                    Est since 2019.
                </p>
            </div>
        </section>
    </div>
);

export default Hero;