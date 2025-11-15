import React from 'react'

function Stepper() {
    return (
        <div class="inline-flex flex-col items-center gap-10">
            <div
                class="font-PoppinsMedium text-black text-[54px] tracking-headline-3 leading-14.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
            >
                Cart
            </div>
            <div class="inline-flex gap-8 items-start">
                <div
                    class="flex flex-col w-64 gap-6 pt-0 pb-[26px] px-0 border-b-2 border-solid border-neutral-07 items-start"
                >
                    <div class="flex gap-[17px] self-stretch w-full items-center">
                        <div
                            class="flex items-center justify-center px-[17px] py-2 bg-[#23262F] rounded-[40px] overflow-hidden transition-all hover:drop-shadow-custom"
                        >
                            <div
                                class="font-InterSemiBold text-base text-[#FCFCFD] text-center leading-[26px] tracking-[0] whitespace-nowrap"
                            >
                                1
                            </div>
                        </div>
                        <div
                            class="relative flex-1 font-InterSemiBold text-[#23262F] text-base tracking-[0] leading-[26px] transition-all hover:drop-shadow-custom"
                        >
                            Shopping cart
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-64 gap-6 pt-0 pb-[26px] px-0 items-start">
                    <div class="flex gap-[17px] self-stretch w-full items-center">
                        <div
                            class="flex items-center justify-center px-[15px] py-2 bg-[#B1B5C3] rounded-[40px] overflow-hidden transition-all hover:drop-shadow-custom"
                        >
                            <div
                                class="font-InterSemiBold text-[#FCFCFD] text-base text-center leading-6 tracking-[0] whitespace-nowrap"
                            >
                                2
                            </div>
                        </div>
                        <div
                            class="relative flex-1 font-InterSemiBold text-[#B1B5C3] text-base tracking-[0] leading-[26px] transition-all hover:drop-shadow-custom"
                        >
                            Checkout details
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-64 gap-6 pt-0 pb-[26px] px-0 items-start">
                    <div class="flex gap-[17px] self-stretch w-full items-center">
                        <div
                            class="flex items-center justify-center px-[15px] py-2 bg-[#B1B5C3] rounded-[40px] overflow-hidden transition-all hover:drop-shadow-custom"
                        >
                            <div
                                class="font-InterSemiBold text-[#FCFCFD] text-base text-center leading-6 tracking-[0] whitespace-nowrap"
                            >
                                3
                            </div>
                        </div>
                        <div
                            class="relative flex-1 font-InterSemiBold text-[#B1B5C3] text-base tracking-[0] leading-[26px] transition-all hover:drop-shadow-custom"
                        >
                            Order complete
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stepper;
