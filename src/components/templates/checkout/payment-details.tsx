import React, { useState } from 'react'
import Stepper from '../../modules/stepper/stepper';
import { useNavigate } from 'react-router-dom';
import { CartItems } from '../../../types/cart.types';
import { Button } from '../../ui/button';
import CustomInput from '../../ui/custom-input';

const cartItems: CartItems[] = [
  {
    id: 1,
    name: "میز سینی",
    color: "مشکی",
    price: 3070000,
    quantity: 2,
    image: "/Images/product-5.png",
  },
  {
    id: 2,
    name: "میز سینی",
    color: "قرمز",
    price: 3070000,
    quantity: 2,
    image: "/Images/product-5-2.svg",
  },
  {
    id: 3,
    name: "چراغ رومیزی",
    color: "طلایی",
    price: 6240000,
    quantity: 2,
    image: "/Images/product-2.png",
  },
];

const PaymentDetails: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOrder = (): void => {
    navigate('/order-complete')
  }

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center py-20 relative">
          <Stepper
            title="تکمیل خرید"
            currentStep={2}
          />
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_413px] gap-8 w-full py-20">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col items-start w-full xl:max-w-[643px] gap-6 px-6 py-10 rounded border border-solid border-neutral-04 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="font-VazirMedium text-black text-xl leading-7 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom">
                  اطلاعات تماس
                </div>

                <div className="w-full flex justify-between gap-3 items-start">
                  <CustomInput
                    label="نام"
                    type="text"
                    id="input-1"
                    placeholder="نام"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }}
                    wrapperClassName="flex flex-col w-full sm:w-1/2 gap-3"
                    labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  />

                  <CustomInput
                    label="نام خانوادگی"
                    type="text"
                    id="input-2"
                    placeholder="نام خانوادگی"
                    wrapperClassName="flex flex-col w-full sm:w-1/2 gap-3"
                    labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  />
                </div>

                <CustomInput
                  label="شماره تلفن"
                  type="tel"
                  id="input-3"
                  placeholder="شماره تلفن"
                  wrapperClassName="flex flex-col w-full gap-3"
                  labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                />

                <CustomInput
                  label="ایمیل (اختیاری)"
                  type="tel"
                  id="input-4"
                  placeholder="ایمیل شما"
                  wrapperClassName="flex flex-col w-full gap-3"
                  labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                />
              </div>

              <div className="flex flex-col items-start w-full xl:max-w-[643px] gap-6 px-6 py-10 rounded border border-solid border-neutral-04 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <div className="font-VazirMedium text-black text-xl leading-7 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom">
                  آدرس ارسال
                </div>

                <div className="w-full flex justify-between items-start gap-3">
                  <CustomInput
                    label="استان"
                    type="text"
                    id="input-8"
                    placeholder="استان"
                    wrapperClassName="flex flex-col w-full sm:w-1/2 gap-3"
                    labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  />

                  <CustomInput
                    label="شهر"
                    type="text"
                    id="input-9"
                    placeholder="شهر"
                    wrapperClassName="flex flex-col w-full sm:w-1/2 gap-3"
                    labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  />
                </div>

                <CustomInput
                  label="کد پستی"
                  type="tel"
                  id="input-5"
                  placeholder="کد پستی شما"
                  wrapperClassName="flex flex-col w-full gap-3"
                  labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                />

                <CustomInput
                  label="آدرس"
                  type="tel"
                  id="input-7"
                  placeholder="آدرس"
                  wrapperClassName="flex flex-col w-full gap-3"
                  labelClassName="font-VazirBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  inputClassName="flex-1 w-full outline-none font-VazirRegular text-base text-neutral-04 text-right placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 h-10 bg-white px-4 py-0 self-stretch rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                />
              </div>
            </div>

            <div className="w-full xl:w-[413px]">
              <div className="flex flex-1 flex-col w-full items-start gap-4 px-6 py-4 bg-white rounded-md border border-solid border-neutral-04 transition-all hover:drop-shadow-custom">
                <div className="self-stretch font-VazirMedium text-[28px] text-black-900 leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom">
                  خلاصه سفارش
                </div>
                <div className="flex flex-col items-start self-stretch w-full">
                  <div className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03">
                    <div className="inline-flex items-center gap-2 flex-1 w-full">
                      <div className="w-fit font-VazirRegular text-base text-neutral-07 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                        نحوه ارسال
                      </div>
                    </div>
                    <div className="font-VazirBold text-base text-secondary-color-green text-right tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                      رایگان
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03">
                    <div className="font-VazirRegular text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                      کد تخفیف
                    </div>
                    <div className="font-VazirBold text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                      asdfDD
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-0 py-[13px] self-stretch w-full">
                    <div className="font-VazirMedium text-xl text-neutral-07 leading-7 tracking-[0] transition-all hover:drop-shadow-custom">
                      صورت حساب
                    </div>
                    <div className="font-VazirMedium text-xl text-neutral-07 leading-7 tracking-[0] transition-all hover:drop-shadow-custom">
                      37440000 تومان
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-center mt-1'>
                <img
                  src="./Images/zarinpal-logo.png"
                  alt="zarinpal-logo"
                  className='w-60'
                />
              </div>

              <Button
                className="all-[unset] box-border mt-1 flex justify-center items-center gap-2 relative w-full font-VazirMedium text-base text-white text-center leading-7 tracking-button-s whitespace-nowrap px-10 py-3 h-12 bg-main transition-colors hover:bg-main/90 rounded-lg cursor-pointer xl:col-start-1"
                onClick={handleOrder}
              >
                ثبت سفارش
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDetails;

