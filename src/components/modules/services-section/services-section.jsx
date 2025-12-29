import React from 'react';
import ServiceCard from './service-card';

const ServicesSection = ({
    withBackground = false,
    withPaddingBottom = true,
}) => {
    const Cards = (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ServiceCard icon="/Images/service-1.svg" title="Free Shipping" description="Order above $200" />
            <ServiceCard icon="/Images/service-2.svg" title="Money-back" description="30 days guarantee" />
            <ServiceCard icon="/Images/service-3.svg" title="Secure Payments" description="Secured by Stripe" />
            <ServiceCard icon="/Images/service-4.svg" title="24/7 Support" description="Phone and Email support" />
        </div>
    );

    return (
        <section
            className={`w-full bg-white transition-all ${withPaddingBottom ? 'pb-12' : ''
                }`}
        >
            {withBackground ? (
                <div className="w-full bg-neutral-02 py-12">
                    <div className="container">{Cards}</div>
                </div>
            ) : (
                <div className="container">{Cards}</div>
            )}
        </section>
    );
};

export default ServicesSection;


