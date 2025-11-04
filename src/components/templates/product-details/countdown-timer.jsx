import React from 'react'

function CountdownTimer() {
    return (

        <div className="flex flex-col items-start w-[508px] gap-3 px-0 py-6 border-b border-solid border-neutral-03">
            <div className="font-InterRegular text-base text-neutral-05 leading-[26px] transition-all hover:drop-shadow-custom">
                Offer expires in:
            </div>
            <div className="inline-flex items-start gap-4 relative">
                {[
                    { value: "02", label: "Days" },
                    { value: "12", label: "Hours" },
                    { value: "45", label: "Minutes" },
                    { value: "05", label: "Seconds" }
                ].map((item, index) => (
                    <div key={index} className="relative w-[60px] h-20">
                        <div className="absolute top-0 left-0 w-[60px] h-[60px] flex items-center justify-center bg-neutral-02 transition-all hover:drop-shadow-custom">
                            <div className="font-PoppinsMedium text-neutral-07 text-[34px] tracking-headline-5 leading-[38px] transition-all hover:drop-shadow-custom">
                                {item.value}
                            </div>
                        </div>
                        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 font-InterRegular text-neutral-04 text-xs text-center tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountdownTimer
