import React from 'react'
import Stepper from '../../modules/stepper/stepper';
import Badge from '../../ui/badge';
import ButtonCard from '../../ui/button-card';
import { useNavigate } from 'react-router-dom';

function OrderDetails() {

    const navigate = useNavigate();

    const handlePurchase = () => {
        navigate('/my-account/Index');
    }

    // ✅ products با id یونیک
    const products = [
        {
            id: 'product-1',
            image: '/Images/product-5.png',
            quantity: 2
        },
        {
            id: 'product-2',
            image: '/Images/product-5-2.svg',
            quantity: 2
        },
        {
            id: 'product-3',
            image: '/Images/product-2.png',
            quantity: 1
        }
    ];

    const orderInfo = [
        { label: "Order code:", value: "#0123_45678" },
        { label: "Date:", value: "October 19, 2023" },
        { label: "Total:", value: "$1,345.00" },
        { label: "Payment method:", value: "Credit Card" }
    ];

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center py-16 lg:py-20 bg-white">

                    <Stepper
                        title="Complete!"
                        currentStep={3}
                    />

                    <div
                        className="flex flex-col items-center gap-10
                            w-full max-w-[640px] lg:max-w-[700px]
                            px-6 sm:px-10 lg:px-20
                            py-12 lg:py-20
                            my-12 lg:my-20
                            bg-white
                            rounded-lg
                            shadow-[0px_32px_48px_-4px_rgba(0,0,0,0.25)]
                        "
                    >

                        {/* HEADER */}
                        <header className="flex flex-col items-center gap-4 w-full text-center">
                            <h2 className="w-full font-PoppinsMedium text-neutral-04 text-2xl lg:text-[28px] leading-8.5 transition-all hover:drop-shadow-custom">
                                Thank you! 🎉
                            </h2>

                            <p className="w-full font-PoppinsMedium text-2xl sm:text-3xl lg:text-[40px] text-[#23262F] leading-tight transition-all hover:drop-shadow-custom">
                                Your order has been received
                            </p>
                        </header>

                        {/* PRODUCTS */}
                        <div className="flex flex-wrap justify-center gap-10 w-full">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="relative bg-neutral-02 transition-all hover:drop-shadow-custom"
                                >
                                    <img
                                        className="w-30 sm:w-20 h-34 sm:h-24 object-cover mix-blend-multiply"
                                        src={product.image}
                                        alt="product"
                                    />

                                    <div className="absolute -top-4 right-0 flex items-center justify-center size-8 bg-neutral-07 rounded-[80px] transition-all hover:drop-shadow-custom">
                                        <Badge
                                            number={product.quantity}
                                            className="w-2.5 h-6 font-InterSemiBold text-[#FCFCFD] text-base leading-6"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ORDER INFO */}
                        <dl
                            className="w-full grid gap-y-2 sm:gap-y-5 sm:grid-cols-[180px_auto] sm:justify-center"
                        >
                            {orderInfo.map((item) => (
                                <React.Fragment key={item.label}>
                                    <dt className="font-InterSemiBold text-neutral-04 text-sm pb-2 transition-all hover:drop-shadow-custom">
                                        {item.label}
                                    </dt>

                                    <dd className="font-InterSemiBold text-neutral-07 text-sm pb-2 border-b border-neutral-03 sm:border-none break-all transition-all hover:drop-shadow-custom">
                                        {item.value}
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>

                        {/* BUTTON */}
                        <ButtonCard
                            title='Purchase history'
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 font-InterMedium text-white text-base tracking-button-s leading-7 bg-neutral-07 rounded-[80px] cursor-pointer transition-all hover:drop-shadow-custom"
                            onClick={handlePurchase}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails;
