import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <aside
                className="inline-flex flex-col items-center gap-10 px-4 py-10 bg-neutral-02 rounded-lg transition-all hover:drop-shadow-custom"
            >
                <div className=" inline-flex flex-col items-center gap-1.5">
                    <div className="relative w-[82px] h-[82px] transition-all hover:drop-shadow-custom">
                        <div
                            className="absolute top-0 left-0 w-20 h-20 bg-black-900 rounded-[93px] bg-[url(/Images/avatar_1.svg)] bg-cover bg-[50%_50%]"
                            role="img"
                            aria-label="Sofia Havertz profile picture">
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-start gap-2.5 p-[7px] absolute top-[52px] left-[50px] bg-neutral-07 rounded-[125px] border-[1.5px] border-solid border-white"
                            aria-label="Change profile picture">
                            <img
                                className="relative size-4 cursor-pointer"
                                src="/Images/camera.svg"
                                alt="camera"
                            />
                        </button>
                    </div>
                    <p
                        className="font-InterSemiBold w-fit text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    >
                        Sofia Havertz
                    </p>
                </div>
                <nav
                    className="inline-flex flex-col items-start gap-3"
                    aria-label="Account navigation"
                >
                    <Link
                        to="/my-account/account"
                        className="flex flex-col w-[230px] items-start gap-2.5 px-0 py-2 border-b border-solid border-neutral-07"
                        aria-current="page"
                    >
                        <span
                            className="self-stretch font-InterSemiBold text-neutral-07 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                        >
                            Account
                        </span>
                    </Link>
                    <Link
                        to="/my-account/address"
                        className="flex flex-col w-[230px] items-start gap-2.5 px-0 py-2 border-b border-solid border-[transparent]"
                    >
                        <span
                            className="font-InterSemiBold self-stretch text-neutral-04 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                        >
                            Address
                        </span>
                    </Link>
                    <Link
                        to="/my-account/orders"
                        className="flex flex-col w-[230px] items-start gap-2.5 px-0 py-2 border-b border-solid border-[transparent]"
                    >
                        <span
                            className="font-InterSemiBold self-stretch text-neutral-04 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                        >
                            Orders
                        </span>
                    </Link>
                    <Link
                        to="#"
                        className="flex flex-col w-[230px] items-start gap-2.5 px-0 py-2 border-b border-solid border-[transparent]"
                    >
                        <span
                            className="font-InterSemiBold self-stretch text-neutral-04 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                        >
                            Wishlist
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="flex flex-col w-[230px] items-start gap-2.5 px-0 py-2 border-b border-solid border-[transparent] bg-transparent border-0 text-left cursor-pointer"
                    >
                        <span
                            className="font-InterSemiBold self-stretch text-neutral-04 text-base tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                        >
                            Log Out
                        </span>
                    </button>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
