import React from 'react'

function Orders() {
    return (
        <>
            <div className="inline-flex flex-col items-start gap-10 px-[72px] py-0">
                <h2
                    className="w-fit font-InterSemiBold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                >
                    Orders History
                </h2>
                <table className="inline-flex flex-col items-start">
                    <thead className="block">
                        <tr className="flex w-[707px] items-center justify-between pt-0 pb-2 px-0 border-b border-solid border-neutral-03">
                            <th
                                className="flex w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Number ID
                            </th>
                            <th
                                className="flex w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Dates
                            </th>
                            <th
                                className="flex w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Status
                            </th>
                            <th
                                className="flex w-40 font-InterRegular text-neutral-04 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom"
                            >
                                Price
                            </th>
                        </tr>
                    </thead>

                    <tbody className="block">
                        <tr className="flex w-[707px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03">
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                #3456_768
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                October 17, 2023
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                Delivered
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                $1234.00
                            </td>
                        </tr>
                        <tr className="flex w-[707px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03">
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                #3456_980
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                October 11, 2023
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                Delivered
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                $345.00
                            </td>
                        </tr>
                        <tr className="flex w-[707px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03">
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                #3456_120
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                August 24, 2023
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                Delivered
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                $2345.00
                            </td>
                        </tr>
                        <tr className="flex w-[707px] items-center justify-between px-0 py-6 border-b border-solid border-neutral-03">
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                #3456_030
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                August 12, 2023
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                Delivered
                            </td>
                            <td className="flex w-40 font-InterRegular text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                $845.00
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Orders;
