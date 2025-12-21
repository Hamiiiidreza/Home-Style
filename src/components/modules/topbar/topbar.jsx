import React, { useState, useEffect } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import ArrowLink from '../../ui/arrow-link';

function Topbar({ onClose, forceHide = false }) {

  const [showBanner, setShowBanner] = useState(true);
  // اگر صفحه از بیرون forceHide = true داد، Topbar نمایش داده نشود
  const [visible, setVisible] = useState(true);

  // هماهنگی با prop بیرونی
  useEffect(() => {
    if (forceHide) setVisible(false);
  }, [forceHide]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();  // اگر از بیرون تابع فرستاده شود آن را هم اجرا کن
  };

  if (!visible) return null;

  return (
    <>
      {showBanner && (
        <div className="relative flex items-center justify-end w-full h-10 bg-neutral-02 px-8 sm:px-0">
          <div className="inline-flex items-center justify-center gap-3 absolute top-2 left-[-200px] sm:left-0 right-0">
            <div className="inline-flex items-center justify-center gap-3 relative">
              <img src='/Images/ticket-percent.svg'
                className="relative size-6 hover:drop-shadow-custom transition-all"
              />
              <p className="font-InterSemiBold text-neutral-05 leading-[22px] text-center">
                30% off storewide — Limited time!
              </p>
            </div>
            <ArrowLink
              title="Shop Now"
              textColor="text-secondary-color-blue"
              borderColor="border-secondary-color-blue"
              to="/Shop"
            />
          </div>
          <button
            aria-label="Close banner"
            onClick={handleClose}
          >
            <IoCloseOutline
              className="absolute size-5 top-2 right-16 sm:right-10 cursor-pointer"
            />
          </button>
        </div>
      )}
    </>
  )
}

export default Topbar;
