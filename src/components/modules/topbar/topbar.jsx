import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

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
            <button
              className="inline-flex items-center gap-0.5 hover:drop-shadow-custom transition-all border-b border-secondary-color-blue"
              aria-label="Shop now for 30% off"
            >
              <div className="inline-flex items-center text-secondary-color-blue gap-1">
                <Link
                  to="/Shop"
                  className="font-button-XS text-blue">
                  Shop Now
                </Link>
                <GoArrowRight
                  className="relative size-4.5"
                />
              </div>
            </button>
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
