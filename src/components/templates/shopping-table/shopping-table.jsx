import React from 'react'
import Stepper from '../../modules/stepper/stepper';
import ButtonCard from '../../ui/button-card';
import { useNavigate } from 'react-router-dom';

function ShoppingTable() {

    const navigate = useNavigate();

    const cartItems = [
        {
            id: 1,
            name: "Tray Table",
            color: "Black",
            price: 19.19,
            quantity: 2,
            image: "/Images/product-5.png",
        },
        {
            id: 2,
            name: "Tray Table",
            color: "Red",
            price: 19.19,
            quantity: 2,
            image: "/Images/product-5-2.svg",
        },
        {
            id: 3,
            name: "Table lamp",
            color: "Gold",
            price: 39.0,
            quantity: 1,
            image: "/Images/product-2.png",
        },
    ];

    const handleCkeckout = () => {
        navigate('/checkout')
    }

    return (
        <div>
            <div class="inline-flex flex-col items-center py-20 relative bg-white container">
                <Stepper
                    title="Cart"
                    currentStep={1}
                />
                <div class="inline-flex flex-col items-start">
                    <div class="inline-flex items-start gap-16 px-0 py-20">
                        <div class="inline-flex flex-col items-start">
                            <div
                                class="flex w-[643px] items-start justify-between pt-0 pb-6 px-0 border-b border-solid border-[#6c7174]"
                            >
                                <div
                                    class="font-InterSemiBold text-black-900 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                >
                                    Product
                                </div>
                                <div class="flex w-[322px] items-center justify-between *:font-InterSemiBold text-base text-black-900 tracking-[0] leading-6.5 whitespace-nowrap">
                                    <div className='transition-all hover:drop-shadow-custom'>
                                        Quantity
                                    </div>
                                    <div className='transition-all hover:drop-shadow-custom'>
                                        Price
                                    </div>
                                    <div className='transition-all hover:drop-shadow-custom'>
                                        Subtotal
                                    </div>
                                </div>
                            </div>
                            {cartItems.map((item) => (
                                <div
                                    class="flex w-[643px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03"
                                >
                                    <div class="inline-flex flex-col items-start gap-2.5">
                                        <div class="flex w-[316px] items-center gap-4">
                                            <div
                                                class="bg-neutral-02"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                                />
                                            </div>
                                            <div class="flex items-start gap-4 flex-1 grow">
                                                <div class="flex flex-col w-[210px] items-start justify-center gap-2">
                                                    <div
                                                        class="font-InterSemiBold text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div
                                                        class="font-InterRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                    >
                                                        color:{item.color}
                                                    </div>
                                                    <button
                                                        class="all-[unset] box-border flex items-center gap-0.5 border-0 border-none"
                                                    >
                                                        <div class="flex items-center gap-1">
                                                            <img
                                                                class="size-6 transition-all hover:drop-shadow-custom"
                                                                src="/Images/Close.svg"
                                                            />
                                                            <div
                                                                class="font-InterSemiBold text-sm text-neutral-04 tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                            >
                                                                Remove
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-[328px] items-center justify-between -ml-px flex">
                                        <div className="flex items-center border border-neutral-04 rounded mt-2 w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                            <button className="text-black-900">
                                                <img src="/Images/Minus.svg" alt="minus" />
                                            </button>
                                            <span className="text-xs font-InterSemiBold text-black/900">{item.quantity}</span>
                                            <button className="text-black-900">
                                                <img src="/Images/Add.svg" alt="add" />
                                            </button>
                                        </div>
                                        <div
                                            class="font-InterRegular text-black-900 text-lg leading-7.5 text-right tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            ${item.price}
                                        </div>
                                        <div
                                            class="font-InterSemiBold text-black-900 text-lg leading-7.5 text-right tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            $38.00
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            class="flex flex-col w-[413px] items-start gap-4 p-6 bg-white rounded-md border border-solid border-neutral-04 transition-all hover:drop-shadow-custom"
                        >
                            <div
                                class="font-PoppinsMedium self-stretch text-neutral-07 text-xl tracking-[0] leading-7 transition-all hover:drop-shadow-custom"
                            >
                                Cart summary
                            </div>
                            <div class="flex flex-col items-start self-stretch w-full">
                                <div class="flex flex-col items-start pt-0 pb-8 px-0 self-stretch w-full">
                                    <div
                                        class="flex flex-col items-start gap-3 pt-0 pb-4 px-0 self-stretch w-full"
                                    >
                                        <div
                                            class="flex items-center justify-between bg-neutral-02 border border-solid border-neutral-07 w-[365px] px-4 py-[13px] rounded transition-all hover:drop-shadow-custom"
                                        >
                                            <div class="flex items-center justify-center gap-3">
                                                <div
                                                    class="flex items-center justify-center size-4.5 rounded-full border border-solid border-black-900 transition-all hover:drop-shadow-custom"
                                                >
                                                    <div
                                                        class="size-2.5 bg-black-900 rounded-full"
                                                    ></div>
                                                </div>
                                                <div
                                                    class="w-fit font-InterRegular text-neutral-07 text-base tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                >
                                                    Free shipping
                                                </div>
                                            </div>
                                            <div
                                                class="font-InterRegular text-neutral-07 text-base leading-6.5 text-right tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                            >
                                                $0.00
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center justify-between bg-white border border-solid border-neutral-07 w-[365px] px-4 py-[13px] rounded transition-all hover:drop-shadow-custom"
                                        >
                                            <div class="flex items-center justify-center gap-3">
                                                <div
                                                    class="flex items-center justify-center size-4.5 rounded-full border border-solid border-black-900 transition-all hover:drop-shadow-custom"
                                                >
                                                    <div
                                                        class="size-2.5 bg-white rounded-full"
                                                    ></div>
                                                </div>
                                                <div
                                                    class="w-fit font-InterRegular text-neutral-07 text-base tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                >
                                                    Express shipping
                                                </div>
                                            </div>
                                            <div
                                                class="font-InterRegular text-neutral-07 text-base leading-6.5 text-right tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                            >
                                                +$15.00
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center justify-between bg-white border border-solid border-neutral-07 w-[365px] px-4 py-[13px] rounded transition-all hover:drop-shadow-custom"
                                        >
                                            <div class="flex items-center justify-center gap-3">
                                                <div
                                                    class="flex items-center justify-center size-4.5 rounded-full border border-solid border-black-900 transition-all hover:drop-shadow-custom"
                                                >
                                                    <div
                                                        class="size-2.5 bg-white rounded-full"
                                                    ></div>
                                                </div>
                                                <div
                                                    class="w-fit font-InterRegular text-neutral-07 text-base tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                >
                                                    Pick Up
                                                </div>
                                            </div>
                                            <div
                                                class="font-InterRegular text-neutral-07 text-base leading-6.5 text-right tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                            >
                                                %21.00
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-[#eaeaea]"
                                    >
                                        <div
                                            class="relative w-fit font-InterRegular text-base leading-6.5 text-neutral-07 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            Subtotal
                                        </div>
                                        <div
                                            class="font-InterSemiBold text-base text-neutral-07 text-right leading-6.5 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            $1234.00
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between px-0 py-[13px] relative self-stretch w-full">
                                        <div
                                            class="font-InterSemiBold text-xl text-neutral-07 leading-8 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            Total
                                        </div>
                                        <div
                                            class="font-InterSemiBold text-xl text-neutral-07 text-right leading-8 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                                        >
                                            $1345.00
                                        </div>
                                    </div>
                                </div>
                                <ButtonCard
                                    onClick={handleCkeckout}
                                    title="Checkout"
                                    className='all-[unset] box-border flex w-[365px] justify-center px-[26px] py-2.5 bg-neutral-07 rounded-lg items-center font-InterMedium text-lg text-white text-center leading-8 tracking-button-m whitespace-nowrap cursor-pointer transition-all hover:drop-shadow-custom'
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-[424px] items-start gap-4">
                        <div class="flex flex-col items-start gap-[7px] self-stretch w-full">
                            <div
                                class="font-PoppinsMedium text-xl text-neutral-07 leading-7 tracking-[0] self-stretch transition-all hover:drop-shadow-custom"
                            >
                                Have a coupon?
                            </div>
                            <p
                                class="font-InterRegular text-base text-neutral-04 leading-6.5 tracking-[0] self-stretch transition-all hover:drop-shadow-custom"
                            >
                                Add your code for an instant cart discount
                            </p>
                        </div>
                        <form
                            class="flex items-center justify-between w-[426px] h-[54px] px-4 py-0 border border-solid border-neutral-04"
                        >
                            <div class="flex items-center gap-2 flex-1 grow">
                                <img
                                    class="size-6 text-neutral-04 transition-all hover:drop-shadow-custom"
                                    src="/Images/ticket-percent.svg"
                                />
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    class="flex-1 font-InterMedium text-base text-neutral-04 leading-7 tracking-button-s transition-all hover:drop-shadow-custom focus:outline-none placeholder:text-neutral-04"
                                />
                            </div>

                            <button
                                type="submit"
                                class="all-[unset] box-border inline-flex border-0 border-none items-center font-InterMedium text-base text-neutral-07 leading-7 tracking-button-s whitespace-nowrap transition-all hover:drop-shadow-custom cursor-pointer"
                            >
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingTable;
