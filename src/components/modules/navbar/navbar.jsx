import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { LuTicketPercent } from "react-icons/lu";

function Navbar() {

  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <header className="relative flex items-center justify-end w-full h-10 bg-neutral-02">
          <div className="inline-flex items-center justify-center gap-3 absolute top-2 left-0 right-0">
            <div className="inline-flex items-center justify-center gap-3 relative">
              <LuTicketPercent
              className="relative size-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              />
              <p className="font-InterSemiBold text-neutral-05 leading-[22px] text-center">
                30% off storewide — Limited time!
              </p>
            </div>
            <button
              className="inline-flex items-center gap-0.5 border-b border-secondary-color-blue"
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
        </header>
      )}
    </>
  )
}

export default Navbar;
