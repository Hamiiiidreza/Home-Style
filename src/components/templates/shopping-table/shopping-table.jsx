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
        <div className='container'>
            <div class="flex flex-col items-center py-20 relative bg-white">
                <Stepper
                    title="Cart"
                    currentStep={1}
                />
                <div class="flex flex-col items-start">
                    <div class="flex flex-col xl:flex-row gap-8 w-full py-20">
                        {/* ======================= DESKTOP VERSION (Code 1) ======================= */}
                        <div className="hidden sm:flex flex-col items-start">
                            {/* Header */}
                            <div className="grid w-full max-w-[643px] grid-cols-[275px_1fr] border-b border-solid border-[#6c7174] pb-6">
                                <div className="font-InterSemiBold text-black-900 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                    Product
                                </div>

                                <div className="grid grid-cols-3 text-center font-InterSemiBold text-base text-black-900 tracking-[0] leading-6.5 whitespace-nowrap">
                                    <div className="transition-all hover:drop-shadow-custom">Quantity</div>
                                    <div className="transition-all hover:drop-shadow-custom">Price</div>
                                    <div className="transition-all hover:drop-shadow-custom">Subtotal</div>
                                </div>
                            </div>

                            {/* Items */}
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid w-full max-w-[643px] grid-cols-[275px_1fr] items-center border-b border-solid border-neutral-03 py-6"
                                >
                                    {/* Product Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="bg-neutral-02">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="font-InterSemiBold text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                                {item.name}
                                            </div>

                                            <div className="font-InterRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                                color: {item.color}
                                            </div>

                                            <button className="flex items-center gap-1 border-none text-neutral-04 text-sm transition-all hover:drop-shadow-custom">
                                                <img src="/Images/Close.svg" className="size-5" alt="remove" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    {/* Quantity + Price + Subtotal */}
                                    <div className="grid grid-cols-3 items-center text-center">
                                        <div className="flex justify-center">
                                            <div className="flex items-center border border-neutral-04 rounded w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                                <button>
                                                    <img src="/Images/Minus.svg" alt="minus" />
                                                </button>

                                                <span className="text-xs font-InterSemiBold text-black-900">
                                                    {item.quantity}
                                                </span>

                                                <button>
                                                    <img src="/Images/Add.svg" alt="add" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="font-InterRegular text-black-900 text-lg leading-7.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                            ${item.price}
                                        </div>

                                        <div className="font-InterSemiBold text-black-900 text-lg leading-7.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                            $38.00
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ======================= MOBILE VERSION (Code 2) ======================= */}
                        <div className="block sm:hidden flex-1 bg-white overflow-y-auto scrollbar-custom">

                            <div className="w-full border-b border-solid border-[#6c7174] pb-4 mb-6">
                                <h2 className="font-InterSemiBold text-black-900 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                    Product
                                </h2>
                            </div>

                            {/* Cart Items */}
                            <div className="space-y-6">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center border-b border-gray-200 pb-6"
                                    >
                                        {/* Image */}
                                        <div className="bg-neutral-02">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex justify-between flex-1 mx-4">
                                            <div className="space-y-2">
                                                <h2 className="font-InterSemiBold text-sm text-neutral-07 leading-[22px] transition-all hover:drop-shadow-custom">
                                                    {item.name}
                                                </h2>

                                                <p className="font-InterRegular text-neutral-04 text-xs leading-[20px] transition-all hover:drop-shadow-custom">
                                                    Color: {item.color}
                                                </p>

                                                {/* Quantity Box */}
                                                <div className="flex items-center border border-neutral-04 rounded mt-2 w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                                    <button>
                                                        <img src="/Images/Minus.svg" alt="minus" />
                                                    </button>

                                                    <span className="text-xs font-InterSemiBold text-black/900">
                                                        {item.quantity}
                                                    </span>

                                                    <button>
                                                        <img src="/Images/Add.svg" alt="add" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Price + Remove */}
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="font-InterSemiBold text-sm leading-[22px] text-black/900 transition-all hover:drop-shadow-custom">
                                                    ${item.price.toFixed(2)}
                                                </span>

                                                <button className="w-6 h-6 cursor-pointer transition-all hover:drop-shadow-custom">
                                                    <img src="/Images/Close.svg" alt="Remove" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            class="flex flex-col w-full max-w-[413px] items-start gap-4 p-6 bg-white rounded-md border border-solid border-neutral-04 transition-all hover:drop-shadow-custom"
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
                    <div class="flex flex-col w-full max-w-[424px] items-start gap-4">
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
                            class="flex items-center justify-between w-full max-w-[426px] h-[54px] px-4 py-0 border border-solid border-neutral-04"
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
