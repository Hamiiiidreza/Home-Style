import React from 'react';
import ServiceCard from './service-card';

const ServicesSection = () => (
    <section className="w-full pb-12 bg-white transition-all">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <ServiceCard
                    icon="/Images/service-1.svg"
                    title="Free Shipping"
                    description="Order above $200"
                    decorations={['dash1', 'dash2']}
                />
                <ServiceCard
                    icon="/Images/service-2.svg"
                    title="Money-back"
                    description="30 days guarantee"
                    decorations={['circleLeft', 'circleCenter', 'circleRight']}
                />
                <ServiceCard
                    icon="/Images/service-3.svg"
                    title="Secure Payments"
                    description="Secured by Stripe"
                />
                <ServiceCard
                    icon="https://c.animaapp.com/mee1xtwy4cDJQY/img/communication-outline-call.svg"
                    title="24/7 Support"
                    description="Phone and Email support"
                />
            </div>
        </div>
    </section>
);

export default ServicesSection;