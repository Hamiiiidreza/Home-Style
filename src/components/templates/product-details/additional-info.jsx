import React from 'react'

function AdditionalInfo() {
    return (
        <>
            <div className='flex flex-col items-start gap-4 w-full py-12'>
                <div className="flex flex-col gap-2">
                    <h4 className='font-InterSemiBold w-[47px] text-sm text-[#6C7275] leading-[22px] tracking-[0] transition-all hover:drop-shadow-custom'>
                        Details
                    </h4>
                    <p className='w-[508px] font-InterRegular text-xs text-neutral-07 leading-5 tracking-[0] transition-all hover:drop-shadow-custom'>
                        You can use the removable tray for serving. The design makes it easy to put the tray <br /> back after use since you place it directly on the table frame without having to fit it into <br /> any holes.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className='font-InterSemiBold w-[71px] text-sm text-[#6C7275] leading-[22px] tracking-[0] transition-all hover:drop-shadow-custom'>
                        Packaging
                    </h4>
                    <div className='font-InterRegular text-xs text-neutral-07 leading-5 tracking-[0] transition-all hover:drop-shadow-custom'>
                        <p>
                            Width: 20 " Height: 1 ½ " Length: 21 ½ " <br />  Weight: 7 lb 8 oz <br /> Package(s): 1
                        </p>
                    </div>
                </div>
            </div>ّ
        </>
    )
}

export default AdditionalInfo;
