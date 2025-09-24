import React from "react";

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
        image: "https://c.animaapp.com/mfup5f72NyeeO0/img/paste-image.svg",
    },
    {
        id: 3,
        name: "Table lamp",
        color: "Gold",
        price: 39.0,
        quantity: 2,
        image: "/Images/product-2.png",
    },
];

export default function CartSidebar({ open, onClose }) {
    const subtotal = 99.0;
    const total = 234.0;

    return (
        <div
            className={`fixed inset-0 z-40 ${open ? "visible" : "invisible"}`}
        >
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
                    }`}
            />
            <aside
                className={`
                           fixed top-0 right-0 flex flex-col w-[400px] h-screen bg-white px-6 py-10 shadow-lg z-50
                           transform transition-transform duration-300 ease-in-out
                           ${open ? "translate-x-0" : "translate-x-full"}
                         `}
            >
                <header className="flex items-center justify-between w-full mb-10">
                    <h1 className="font-PoppinsMedium text-[28px] tracking-headline-6 leading-[34px] text-black/900 transition-all hover:drop-shadow-custom">Cart</h1>
                    <button
                        onClick={onClose}
                        className="w-6 h-6 bg-transparent border-0 cursor-pointer transition-all hover:drop-shadow-custom"
                    >
                        <img
                            src="/Images/Close.svg"
                            alt="Close"
                            className="w-full h-full"
                        />
                    </button>
                </header>

                {/* Cart items */}
                <div className="flex-1 bg-white overflow-y-auto space-y-6 scrollbar-custom">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center border-b border-gray-200 pb-6"
                        >
                            <div className="bg-neutral-02">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                />
                            </div>
                            <div className="flex justify-between flex-1 mx-4">
                                <div className="space-y-2">
                                    <h2 className="font-InterSemiBold text-sm text-neutral-07 leading-[22px] transition-all hover:drop-shadow-custom">{item.name}</h2>
                                    <p className="font-InterRegular text-neutral-04 text-xs leading-[20px] transition-all hover:drop-shadow-custom">Color: {item.color}</p>
                                    <div className="flex items-center border border-neutral-04 rounded mt-2 w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                        <button className="text-black/900">
                                            <img src="/Images/Minus.svg" alt="minus" />
                                        </button>
                                        <span className="text-xs font-InterSemiBold text-black/900">{item.quantity}</span>
                                        <button className="text-black/900">
                                            <img src="/Images/Add.svg" alt="add" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="font-InterSemiBold text-sm leading-[22px] text-black/900 transition-all hover:drop-shadow-custom">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <button className="w-6 h-6 cursor-pointer transition-all hover:drop-shadow-custom">
                                        <img
                                            src="/Images/Close.svg"
                                            alt="Remove"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Totals */}
                <div className="mt-6">
                    <div className="flex justify-between border-b border-gray-200 py-3">
                        <span className="font-InterRegular text-base text-neutral-07 leading-[26px] transition-all hover:drop-shadow-custom">Subtotal</span>
                        <span className="font-InterSemiBold text-base text-neutral-07 leading-[26px] transition-all hover:drop-shadow-custom">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className="font-PoppinsMedium text-neutral-07 text-xl leading-[28px] transition-all hover:drop-shadow-custom">Total</span>
                        <span className="font-PoppinsMedium text-neutral-07 text-xl leading-[28px] transition-all hover:drop-shadow-custom">${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 mt-4">
                    <button className="flex items-center justify-center font-InterMedium bg-neutral-07 text-white text-lg leading-[32px] tracking-button-m rounded-md py-[26px] px-[10px] w-[365px] h-[52px] cursor-pointer transition-all hover:drop-shadow-custom">
                        Checkout
                    </button>
                    <button className="font-InterSemiBold text-sm text-black/900 leading-[22px] w-[67px] mx-auto border-b border-black/900 pb-1 transition-all hover:drop-shadow-custom cursor-pointer">View Cart</button>
                </div>
            </aside>
        </div>
    );
}
