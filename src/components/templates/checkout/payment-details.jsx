import React, { useState } from 'react'
import Stepper from '../../modules/stepper/stepper';
import ButtonCard from '../../ui/button-card';
import { useNavigate } from 'react-router-dom';

const cartItems = [
  {
    id: 1,
    name: "Tray Table",
    color: "Black",
    price: 19.19,
    quantity: 2,
    image: "/Images/product-5.png",
  },
  {
    id: 2,
    name: "Tray Table",
    color: "Red",
    price: 19.19,
    quantity: 2,
    image: "/Images/product-5-2.svg",
  },
  {
    id: 3,
    name: "Table lamp",
    color: "Gold",
    price: 39.0,
    quantity: 2,
    image: "/Images/product-2.png",
  },
];

function PaymentDetails() {

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/order-complete')
  }

  return (
    <>
      <div className="inline-flex flex-col items-center py-20 relative container">
        <Stepper
          title="Check Out"
          currentStep={2}
        />
        <div className="inline-flex items-start gap-16 px-0 py-20 relative">
          <div className="inline-flex gap-6 flex-col items-start">
            <div
              className="flex flex-col items-start w-[643px] gap-6 px-6 py-10 rounded border border-solid border-neutral-04 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div
                className="font-PoppinsMedium text-black text-xl leading-7 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
              >
                Contact Infomation
              </div>
              <div className="w-[595px] flex justify-between items-start">
                <div className="flex flex-col w-[285.5px] gap-3 items-start">
                  <label
                    className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    for="input-1">
                    FIRST NAME
                  </label>
                  <div
                    className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  >
                    <input
                      className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                      placeholder="First name"
                      type="text"
                      id="input-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[285.5px] gap-3 items-start">
                  <label
                    className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    for="input-2">
                    LAST NAME
                  </label>
                  <div
                    className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  >
                    <input
                      className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                      placeholder="Last name"
                      type="text"
                      id="input-2"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[595px] items-start gap-3">
                <label
                  className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  for="input-3">
                  PHONE NUMBER
                </label>
                <div
                  className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                >
                  <input
                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                    placeholder="Phone number"
                    type="tel"
                    id="input-3"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[595px] items-start gap-3">
                <label
                  className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  for="input-4">
                  EMAIL ADDRESS
                </label>
                <div
                  className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                >
                  <input
                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                    placeholder="Your Email"
                    type="tel"
                    id="input-4"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-start w-[643px] gap-6 px-6 py-10 rounded border border-solid border-neutral-04 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div
                className="font-PoppinsMedium text-black text-xl leading-7 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
              >
                Shipping Address
              </div>
              <div className="flex flex-col w-[595px] items-start gap-3">
                <label
                  className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  for="input-5">
                  STREET ADDRESS *
                </label>
                <div
                  className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                >
                  <input
                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                    placeholder="Stress Address"
                    type="tel"
                    id="input-5"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[595px] items-start gap-3">
                <label
                  className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  for="input-6">
                  COUNTRY *
                </label>
                <div
                  className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] cursor-pointer transition-all hover:drop-shadow-custom">
                  <select
                    className="flex-1 grow w-full outline-none font-InterRegular text-base text-neutral-04 tracking-[0] leading-6.5 p-0 appearance-none transition-all hover:drop-shadow-custom"
                  >
                    <option>Country</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>USA</option>
                  </select>
                  <img
                    src="/Images/arrow-down-big.svg"
                    className="size-6 pointer-events-none"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[595px] items-start gap-3">
                <label
                  className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  for="input-7">
                  TOWN / CITY *
                </label>
                <div
                  className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                >
                  <input
                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                    placeholder="Town / City"
                    type="tel"
                    id="input-7"
                  />
                </div>
              </div>
              <div className="w-[595px] flex justify-between items-start">
                <div className="flex flex-col w-[285.5px] gap-3 items-start">
                  <label
                    className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    for="input-8">
                    STATE
                  </label>
                  <div
                    className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  >
                    <input
                      className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                      placeholder="state"
                      type="text"
                      id="input-8"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[285.5px] gap-3 items-start">
                  <label
                    className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    for="input-9">
                    ZIP CODE
                  </label>
                  <div
                    className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  >
                    <input
                      className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                      placeholder="zip code"
                      type="text"
                      id="input-9"
                    />
                  </div>
                </div>
              </div>
              <div
                className="inline-flex items-center gap-3 cursor-pointer select-none group"
                onClick={() => setChecked(!checked)}
              >
                <div
                  className={`
                        relative size-6 rounded border-[1.5px] border-solid transition-all group-hover:drop-shadow-custom
                        ${checked ? "bg-neutral-07 border-neutral-07" : "bg-[#FCFCFD] border-neutral-04"}
                     `}
                >
                  {checked && (
                    <img
                      src="/Images/tick.svg"
                      alt="tick"
                      className="absolute inset-0 m-auto size-6"
                    />
                  )}
                </div>
                <p
                  className="font-InterRegular text-base text-neutral-04 leading-6.5 tracking-[0] transition-all group-hover:drop-shadow-custom"
                >
                  Use a different billing address (optional)
                </p>
              </div>
            </div>
            <div
              className="flex flex-col items-start w-[643px] gap-6 px-6 py-10 rounded border border-solid border-neutral-04 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              <div
                className="font-PoppinsMedium text-black text-xl leading-7 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
              >
                Payment method
              </div>
              <div className="inline-flex flex-col items-start gap-6">
                <div
                  className="inline-flex flex-col items-start gap-6 pt-0 pb-8 px-0 border-b border-solid border-neutral-04"
                >
                  <div
                    className="flex items-center justify-between flex-1 grow bg-neutral-02 border border-solid border-neutral-07 w-[595px] px-4 py-[13px] rounded cursor-pointer transition-all hover:drop-shadow-custom"
                  >
                    <div className="inline-flex items-center gap-3">
                      <div
                        className="flex items-center justify-center size-4.5 rounded-full border border-solid border-black-900 transition-all hover:drop-shadow-custom"
                      >
                        <div
                          className="size-2.5 bg-black-900 rounded-full"
                        ></div>
                      </div>
                      <div
                        className="font-InterRegular text-base text-neutral-07 leading-6.5 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                      >
                        Pay by Card Credit
                      </div>
                    </div>
                    <img
                      className="size-6 transition-all hover:drop-shadow-custom"
                      src="/Images/service-2.svg"
                    />
                  </div>
                  <div
                    className="flex items-center justify-between flex-1 grow border border-solid border-neutral-07 w-[595px] px-4 py-[13px] rounded cursor-pointer transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <div className="inline-flex items-center gap-3">
                      <div
                        className="flex items-center justify-center size-4.5 rounded-full border border-solid border-black-900 transition-all hover:drop-shadow-custom"
                      >
                      </div>
                      <div
                        className="font-InterRegular text-base text-neutral-07 leading-6.5 tracking-[0] whitespace-nowrap transition-all hover:drop-shadow-custom"
                      >
                        Paypal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[595px] items-start gap-3">
                  <label
                    className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    for="input-10">
                    CARD NUMBER
                  </label>
                  <div
                    className="h-10 bg-white flex items-center gap-2 px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                  >
                    <input
                      className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                      placeholder="1234 1234 1234"
                      type="tel"
                      id="input-10"
                    />
                  </div>
                </div>
                <div className="w-[595px] flex justify-between items-start">
                  <div className="flex flex-col w-[285.5px] gap-3 items-start">
                    <label
                      className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                      for="input-11">
                      Expiration date
                    </label>
                    <div
                      className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                    >
                      <input
                        className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                        placeholder="MM/YY"
                        type="text"
                        id="input-11"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-[285.5px] gap-3 items-start">
                    <label
                      className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                      for="input-12">
                      CVC
                    </label>
                    <div
                      className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                    >
                      <input
                        className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                        placeholder="CVC code"
                        type="text"
                        id="input-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ButtonCard
              className="all-[unset] box-border flex justify-center items-center gap-2 relative w-full font-InterMedium text-base text-white text-center leading-7 tracking-button-s whitespace-nowrap px-10 py-3 bg-neutral-07 rounded-lg cursor-pointer transition-all hover:drop-shadow-custom"
              title="Place Order"
              onClick={handleOrder}
            />
          </div>
          <div
            className="flex flex-col w-[413px] items-start gap-4 px-6 py-4 bg-white rounded-md border border-solid border-neutral-04 transition-all hover:drop-shadow-custom"
          >
            <div
              className="self-stretch font-PoppinsMedium text-[28px] text-black-900 leading-8.5 tracking-headline-6 transition-all hover:drop-shadow-custom"
            >
              Order summary
            </div>
            <div className="flex flex-col items-stretch gap-6 self-stretch w-full px-0 py-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-200 pb-6"
                >
                  <div className="bg-neutral-02">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                  <div className="flex justify-between flex-1 mx-4">
                    <div className="space-y-2">
                      <h2 className="font-InterSemiBold text-sm text-neutral-07 leading-[22px] transition-all hover:drop-shadow-custom">{item.name}</h2>
                      <p className="font-InterRegular text-neutral-04 text-xs leading-[20px] transition-all hover:drop-shadow-custom">Color: {item.color}</p>
                      <div className="flex items-center border border-neutral-04 rounded mt-2 w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                        <button className="text-black/900">
                          <img src="/Images/Minus.svg" alt="minus" />
                        </button>
                        <span className="text-xs font-InterSemiBold text-black/900">{item.quantity}</span>
                        <button className="text-black/900">
                          <img src="/Images/Add.svg" alt="add" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-InterSemiBold text-sm leading-[22px] text-black/900 transition-all hover:drop-shadow-custom">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3 self-stretch w-full">
                <div className="flex gap-2 flex-1 grow flex-col items-start transition-all hover:drop-shadow-custom">
                  <div
                    className="flex items-center gap-2 relative self-stretch w-full h-[52px] bg-white border border-solid border-[#cacaca] px-4 py-0 rounded-md overflow-hidden"
                  >
                    <input
                      className="flex-1 font-InterRegular text-base text-[#605F5F] placeholder:text-[#605F5F] tracking-[0] leading-6.5 outline-none p-0 transition-all hover:drop-shadow-custom"
                      placeholder="Input"
                      type="text"
                    />
                  </div>
                </div>
                <ButtonCard
                  className="relative inline-flex justify-center items-center gap-2 font-InterMedium text-base text-white text-center tracking-button-s leading-7 whitespace-nowrap all-[unset] box-border px-[26px] py-3 bg-neutral-07 rounded-lg cursor-pointer transition-all hover:drop-shadow-custom"
                  title='Apply'
                />
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch w-full">
              <div
                className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03"
              >
                <div className="inline-flex items-center gap-2 flex-1 grow">
                  <img
                    className="size-6 transition-all hover:drop-shadow-custom"
                    src="/Images/ticket-percent.svg"
                  />
                  <div
                    className="w-fit font-InterRegular text-base text-neutral-07 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                  >
                    JenkateMW
                  </div>
                </div>
                <div
                  className="font-InterSemiBold text-base text-secondary-color-green text-right tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                >
                  -$25.00 [Remove]
                </div>
              </div>
              <div
                className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03"
              >
                <div
                  className="font-InterRegular text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                  Shipping
                </div>
                <div
                  className="font-InterSemiBold text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                  Free
                </div>
              </div>
              <div
                className="flex items-center justify-between px-0 py-[13px] self-stretch w-full border-b border-solid border-neutral-03"
              >
                <div
                  className="font-InterRegular text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                  Subtotal
                </div>
                <div
                  className="font-InterSemiBold text-base text-neutral-07 leading-6.5 tracking-[0] transition-all hover:drop-shadow-custom">
                  $99.00
                </div>
              </div>
              <div
                className="flex items-center justify-between px-0 py-[13px] self-stretch w-full"
              >
                <div
                  className="font-PoppinsMedium text-xl text-neutral-07 leading-7 tracking-[0] transition-all hover:drop-shadow-custom">
                  Total
                </div>
                <div
                  className="font-PoppinsMedium text-xl text-neutral-07 leading-7 tracking-[0] transition-all hover:drop-shadow-custom">
                  $234.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDetails;
