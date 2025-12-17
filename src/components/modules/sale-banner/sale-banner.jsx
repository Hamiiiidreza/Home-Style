import React from 'react';
import ArrowLink from '../../ui/arrow-link';

const SaleBanner = ({
    showSaleText = true,
    saleText = 'SALE UP TO 35% OFF',
    title,
    description,
    withContainer = false,
    descriptionClass = 'text-xl leading-1.6'
}) => {
    return (
        <section
            className={`
                w-full flex flex-col md:flex-row
                ${withContainer ? 'container' : ''}
            `}
        >
            <img
                className="w-full md:w-1/2 h-[532px] bg-cover bg-center"
                src="/Images/salebanner.png"
                alt="salebanner"
            />

            <div className="w-full md:w-1/2 h-[532px] bg-neutral-02 flex items-center justify-center p-12">
                <div className="max-w-md">
                    {showSaleText && (
                        <p className="font-InterBold text-base text-secondary-color-blue mb-4 leading-none transition-all hover:drop-shadow-custom">
                            {saleText}
                        </p>
                    )}

                    <h2 className="font-PoppinsMedium leading-1.1 text-neutral-07 text-4xl mb-4 tracking-headline-4 transition-all hover:drop-shadow-custom">
                        {title}
                    </h2>

                    <p className={`font-InterRegular text-neutral-07 mb-6 transition-all hover:drop-shadow-custom ${descriptionClass}`}>
                        {description}
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
};

export default SaleBanner;
