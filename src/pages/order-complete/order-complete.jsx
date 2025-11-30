import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import OrderDetails from '../../components/templates/order-details/order-details';
import Footer from '../../components/modules/footer/footer';

function OrderComplete() {
    return (
        <div>
            <Navbar />
            <OrderDetails />
            <Footer />
        </div>
    )
}

export default OrderComplete;
