import React from 'react'
import Stepper from '../../modules/stepper/stepper';
import Badge from '../../ui/badge';
import ButtonCard from '../../ui/button-card';

function OrderDetails() {
    return (
        <>
            <div
                className="inline-flex flex-col items-center py-20 bg-white container"
            >
                <Stepper
                    title="Complete!"
                    currentStep={3}
                />
                <div
                    className="inline-flex flex-col items-center gap-10 px-[95px] py-20 my-20 bg-white rounded-lg shadow-[0px_32px_48px_-4px_rgba(0,0,0,0.25)]"
                >
                    <header class="flex w-[546px] gap-4 flex-col items-center">
                        <h2
                            className="w-[448px] font-PoppinsMedium text-neutral-04 text-[28px] text-center tracking-headline-6 leading-8.5 transition-all hover:drop-shadow-custom"
                        >
                            Thank you! 🎉
                        </h2>
                        <p
                            className="w-[492px] font-PoppinsMedium text-[40px] text-[#23262F] text-center tracking-headline-4 leading-11 transition-all hover:drop-shadow-custom"
                        >
                            Your order has been received
                        </p>
                    </header>
                    <div className="flex w-[546px] items-end justify-center gap-10">
                        <div className="relative bg-neutral-02 transition-all hover:drop-shadow-custom">
                            <img
                                className="w-20 h-24 bg-cover bg-[50%_50%] mix-blend-multiply"
                                src='/Images/product-5.png'
                            />
                            <div className="absolute top-[-18px] left-16 flex items-center justify-center size-8 bg-neutral-07 rounded-[80px] transition-all hover:drop-shadow-custom">
                                <Badge
                                    number={2}
                                    className="w-2.5 h-6 font-InterSemiBold text-[#FCFCFD] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
                                />
                            </div>
                        </div>
                        <div className="relative bg-neutral-02 transition-all hover:drop-shadow-custom">
                            <img
                                className="w-20 h-24 bg-cover bg-[50%_50%] mix-blend-multiply"
                                src='/Images/product-5-2.svg'
                            />
                            <div className="absolute top-[-18px] left-16 flex items-center justify-center size-8 bg-neutral-07 rounded-[80px] transition-all hover:drop-shadow-custom">
                                <Badge
                                    number={2}
                                    className="w-2.5 h-6 font-InterSemiBold text-[#FCFCFD] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
                                />
                            </div>
                        </div>
                        <div className="relative bg-neutral-02 transition-all hover:drop-shadow-custom">
                            <img
                                className="w-20 h-24 bg-cover bg-[50%_50%] mix-blend-multiply"
                                src='/Images/product-2.png'
                            />
                            <div className="absolute top-[-18px] left-16 flex items-center justify-center size-8 bg-neutral-07 rounded-[80px] transition-all hover:drop-shadow-custom">
                                <Badge
                                    number={1}
                                    className="w-2.5 h-6 font-InterSemiBold text-[#FCFCFD] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
                                />
                            </div>
                        </div>
                    </div>

                    <dl className="w-[548px] gap-8 flex items-center justify-center">
                        <div className="inline-flex flex-col items-start gap-5">
                            <dt className="inline-flex items-center justify-center gap-3">
                                <span
                                    className="flex items-center justify-center w-fit font-InterSemiBold text-neutral-04 text-sm tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                >
                                    Order code:
                                </span>
                            </dt>
                            <dt className="inline-flex items-center justify-center gap-3">
                                <span
                                    className="flex items-center justify-center w-fit font-InterSemiBold text-neutral-04 text-sm tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                >
                                    Date:
                                </span>
                            </dt>
                            <dt className="inline-flex items-center justify-center gap-3">
                                <span
                                    className="flex items-center justify-center w-fit font-InterSemiBold text-neutral-04 text-sm tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                >
                                    Total:
                                </span>
                            </dt>
                            <dt className="inline-flex items-center justify-center gap-3">
                                <span
                                    className="flex items-center justify-center w-fit font-InterSemiBold text-neutral-04 text-sm tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                >
                                    Payment method:
                                </span>
                            </dt>
                        </div>
                        <div className="inline-flex flex-col items-start gap-5">
                            <dd
                                className="flex items-center justify-center w-fit font-InterSemiBold text-sm text-neutral-07 tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                #0123_45678
                            </dd>
                            <dd
                                className="flex items-center justify-center w-fit font-InterSemiBold text-sm text-neutral-07 tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                October 19, 2023
                            </dd>
                            <dd
                                className="flex items-center justify-center w-fit font-InterSemiBold text-sm text-neutral-07 tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                $1,345.00
                            </dd>
                            <dd
                                className="flex items-center justify-center w-fit font-InterSemiBold text-sm text-neutral-07 tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                Credit Card
                            </dd>
                        </div>
                    </dl>
                    <ButtonCard
                        title='Purchase history'
                        className="inline-flex items-center justify-center gap-2 px-10 py-3 w-fit font-InterMedium text-white text-base text-center tracking-button-s leading-7 whitespace-nowrap bg-neutral-07 rounded-[80px] cursor-pointer transition-all hover:drop-shadow-custom"
                    />
                </div>
            </div>
        </>
    )
}

export default OrderDetails;
