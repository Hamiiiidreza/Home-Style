import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import ButtonCard from '../../ui/button-card';

function Topbar() {

  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="relative flex items-center justify-end w-full h-10 bg-neutral-02">
          <div className="inline-flex items-center justify-center gap-3 absolute top-2 left-0 right-0">
            <div className="inline-flex items-center justify-center gap-3 relative">
              <img src='/Images/ticket-percent.svg'
                className="relative size-6 hover:drop-shadow-custom transition-all"
              />
              <p className="font-InterSemiBold text-neutral-05 leading-[22px] text-center">
                30% off storewide — Limited time!
              </p>
            </div>
            <ButtonCard
              title="Shop Now"
              textColor="text-secondary-color-blue"
              borderColor="border-secondary-color-blue"
            />
          </div>
          <button
            aria-label="Close banner"
            onClick={() => setShowBanner(false)}
          >
            <IoCloseOutline
              className="absolute size-5 top-2 right-10 cursor-pointer"
            />
          </button>
        </div>
      )}
    </>
  )
}

export default Topbar;
