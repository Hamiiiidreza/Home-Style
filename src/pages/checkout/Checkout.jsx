import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import Footer from '../../components/modules/footer/footer';
import PaymentDetails from '../../components/templates/checkout/payment-details';

function Checkout() {
    return (
        <div>
            <Navbar />
            <PaymentDetails />
            <Footer />
        </div>
    )
}

export default Checkout;
