import React from 'react'
import ButtonCard from '../../../components/ui/button-card';

const wishlistItems = [
    {
        id: 1,
        name: "Tray Table",
        color: "Black",
        price: 19.19,
        image: "/Images/product-5.png",
    },
    {
        id: 2,
        name: "Sofa",
        color: "Beige",
        price: 345,
        image: "/Images/product-7.png",
    },
    {
        id: 3,
        name: "Bamboo basket",
        color: "Beige",
        price: 8.80,
        image: "/Images/product-4.png",
    },
    {
        id: 4,
        name: "Pillow",
        color: "Beige",
        price: 8.80,
        image: "/Images/product-12.png",
    },
];

function Wishlist() {
    return (
        <>
            <div
                className="inline-flex flex-col items-start gap-10 px-[72px] py-0"
            >
                <h2
                    className="w-fit font-InterSemiBold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                >
                    Your Wishlist
                </h2>
                <table className="w-[707px]">
                    <thead>
                        <tr
                            className="flex items-center justify-between pr-0 pt-0 pb-2 border-b border-solid border-neutral-03 transition-all hover:shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                        >
                            <th
                                className="w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Product
                            </th>
                            <th
                                className="w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Price
                            </th>
                            <th
                                className="w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlistItems.map((item) => (
                                <tr
                                    key={item.id}
                                    className="flex justify-between items-center py-6 border-b border-solid border-neutral-03 transition-all hover:shadow-[0_4px_0_rgba(0,0,0,0.25)]">
                                    <td className="flex w-[213px] items-center gap-2.5">
                                        <button type="button">
                                            <img
                                                className="relative size-6 cursor-pointer transition-all hover:drop-shadow-custom"
                                                src="/Images/Close.svg"
                                                alt="close"
                                            />
                                        </button>
                                        <div className="flex w-[213px] items-center gap-4 mr-[-34px]">
                                            <div className="bg-neutral-02">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-[60px] h-[72px] object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                                />
                                            </div>
                                            <div className="flex flex-col w-[117px] items-start justify-center gap-4 self-stretch">
                                                <h3
                                                    className="w-[210px] h-[22px] font-InterSemiBold text-neutral-07 text-sm tracking-[0] leading-5.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                >
                                                    {item.name}
                                                </h3>
                                                <p
                                                    className="w-fit font-InterRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                                >
                                                    Color: {item.color}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                        className="w-[120px] font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                                    >
                                        ${item.price}
                                    </td>
                                    <td className='w-[120px]'>
                                        <ButtonCard
                                            title="Add to cart"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-1.5 w-fit font-InterMedium text-white text-base text-center tracking-button-s leading-7 whitespace-nowrap bg-neutral-07 rounded-lg cursor-pointer transition-all hover:drop-shadow-custom"
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Wishlist;
