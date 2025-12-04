import React from 'react'

function Address() {
    return (
        <>
            <div className="flex flex-col items-start px-18 gap-[19px] flex-1 grow">
                <h2 className='font-InterSemiBold text-xl text-black leading-8 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom'>
                    Address
                </h2>
                <div className="flex items-center justify-start gap-[23px] w-[707px]">
                    <div className='flex flex-col items-start gap-4 w-[342px] p-4 border border-solid border-neutral-04 rounded-lg transition-all hover:shadow-[-0.5px_4px_4px_rgba(0,0,0,0.25)]'>
                        <div className="inline-flex items-center justify-between gap-2 w-full">
                            <div className='font-InterSemiBold text-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                Billing Address
                            </div>
                            <div className='flex items-center gap-[5px] cursor-pointer'>
                                <img
                                    className='size-4 text-neutral-04 transition-all hover:drop-shadow-custom'
                                    src="/Images/edit.svg"
                                    alt="edit" />
                                <span className='font-InterSemiBold text-base text-neutral-04 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                Sofia Haverts
                            </div>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                (+1) 234 567 890
                            </div>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                345 Long Island, NewYork, United States
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-4 w-[342px] p-4 border border-solid border-neutral-04 rounded-lg transition-all hover:shadow-[-0.5px_4px_4px_rgba(0,0,0,0.25)]'>
                        <div className="inline-flex items-center justify-between gap-2 w-full">
                            <div className='font-InterSemiBold text-base text-black leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                Shipping Address
                            </div>
                            <div className='flex items-center gap-[5px] cursor-pointer'>
                                <img
                                    className='size-4 text-neutral-04 transition-all hover:drop-shadow-custom'
                                    src="/Images/edit.svg"
                                    alt="edit" />
                                <span className='font-InterSemiBold text-base text-neutral-04 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                Sofia Haverts
                            </div>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                (+1) 234 567 890
                            </div>
                            <div className='font-InterRegular text-sm text-black leading-5.5 tracking-[0] transition-all hover:drop-shadow-custom'>
                                345 Long Island, NewYork, United States
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
