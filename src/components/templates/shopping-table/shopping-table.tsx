import React from 'react'
import Stepper from '../../modules/stepper/stepper';
import { useNavigate } from 'react-router-dom';
import { CartItems } from '../../../types/cart.types';
import { Button } from '../../ui/button';
import { Trash } from 'lucide-react';
import CustomInput from '../../ui/custom-input';

const ShoppingTable: React.FC = () => {
    const navigate = useNavigate();

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
            quantity: 1,
            image: "/Images/product-2.png",
        },
    ];

    const handleCkeckout = () => {
        navigate('/checkout')
    }

    return (
        <div className=''>
            <div className="flex flex-col items-center py-20 relative bg-white">
                <Stepper
                    title="سبد خرید"
                    currentStep={1}
                />

                <div className="flex flex-col xl:flex-row gap-8 w-full py-20">
                    <div className="flex flex-col gap-10 flex-1 order-1">
                        <div className="flex flex-col gap-10">
                            <div className="hidden sm:flex flex-col items-start w-full">
                                <div className="grid w-full grid-cols-[168px_1fr] border-b border-solid border-[#6c7174] pb-6">
                                    <div className="font-VazirBold text-black-900 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                        محصول
                                    </div>

                                    <div className="grid grid-cols-3 text-center font-VazirBold text-base text-black-900 tracking-[0] leading-6.5 whitespace-nowrap">
                                        <div className="transition-all hover:drop-shadow-custom">تعداد</div>
                                        <div className="transition-all hover:drop-shadow-custom">قیمت</div>
                                        <div className="transition-all hover:drop-shadow-custom">جمع</div>
                                    </div>
                                </div>

                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="grid w-full grid-cols-[168px_1fr] items-center border-b border-solid border-neutral-03 py-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-neutral-02">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-24 object-cover mix-blend-multiply transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div className="font-VazirBold text-neutral-07 text-sm tracking-[0] leading-5.5 transition-all hover:drop-shadow-custom">
                                                    {item.name}
                                                </div>

                                                <div className="font-VazirRegular text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                                    رنگ: {item.color}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 items-center text-center">
                                            <div className="flex justify-center">
                                                <div className="flex items-center border border-neutral-04 rounded w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                                    <button>
                                                        <img src="/Images/Minus.svg" alt="minus" />
                                                    </button>

                                                    <span className="text-xs font-VazirBold text-black-900">
                                                        {item.quantity.toLocaleString('fa-IR')}
                                                    </span>

                                                    <button>
                                                        <img src="/Images/Add.svg" alt="add" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="font-VazirRegular text-black-900 text-xs leading-7.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                                {item.price.toLocaleString('fa-IR')} تومان
                                            </div>

                                            <div className="flex items-center justify-center gap-2 font-VazirBold text-black-900 text-base leading-7.5 whitespace-nowrap">
                                                <span className='transition-all hover:drop-shadow-custom'>
                                                    {(item.price * item.quantity).toLocaleString('fa-IR')} تومان
                                                </span>

                                                <button
                                                    type="button"
                                                    className="flex items-center justify-center bg-red-500 size-6 rounded-sm cursor-pointer transition-all hover:drop-shadow-custom"
                                                    onClick={() => console.log('remove item', item.id)}
                                                    aria-label="حذف محصول"
                                                >
                                                    <Trash className="size-3 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="block sm:hidden flex-1 bg-white overflow-y-auto scrollbar-custom">
                                <div className="w-full border-b border-solid border-[#6c7174] pb-4 mb-6">
                                    <h2 className="font-VazirBold text-black-900 tracking-[0] leading-6.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                        محصول
                                    </h2>
                                </div>

                                <div className="space-y-6">
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
                                                    <h2 className="font-VazirBold text-sm text-neutral-07 leading-[22px] transition-all hover:drop-shadow-custom">
                                                        {item.name}
                                                    </h2>

                                                    <p className="font-VazirRegular text-neutral-04 text-xs leading-[20px] transition-all hover:drop-shadow-custom">
                                                        رنگ: {item.color}
                                                    </p>

                                                    <div className="flex items-center border border-neutral-04 rounded mt-2 w-20 h-8 justify-between px-2 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                                                        <button>
                                                            <img src="/Images/Minus.svg" alt="minus" />
                                                        </button>

                                                        <span className="text-xs font-VazirBold text-black/900">
                                                            {item.quantity.toLocaleString('fa-IR')}
                                                        </span>

                                                        <button>
                                                            <img src="/Images/Add.svg" alt="add" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end gap-2">
                                                    <span className="font-VazirBold text-sm leading-[22px] text-black/900 transition-all hover:drop-shadow-custom">
                                                        {item.price.toLocaleString('fa-IR')} تومان
                                                    </span>

                                                    <button className="w-6 h-6 cursor-pointer transition-all hover:drop-shadow-custom">
                                                        <img src="/Images/Close.svg" alt="Remove" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 order-2">
                            <div className="flex flex-col items-start gap-[7px] self-stretch w-full">
                                <div className="font-VazirMedium text-xl text-neutral-07 leading-7 tracking-[0] self-stretch transition-all hover:drop-shadow-custom">
                                    کد تخفیف دارید؟
                                </div>
                                <p className="font-VazirRegular text-base text-neutral-04 leading-6.5 tracking-[0] self-stretch transition-all hover:drop-shadow-custom">
                                    کد خود را وارد کنید تا تخفیف اعمال شود
                                </p>
                            </div>

                            <form className="flex items-center justify-between h-[54px] px-4 py-0 border border-solid border-neutral-04">
                                <div className="flex items-center gap-2 flex-1 grow">
                                    <img
                                        className="size-6 text-neutral-04 transition-all hover:drop-shadow-custom"
                                        src="/Images/ticket-percent.svg"
                                    />
                                    <CustomInput
                                        type="text"
                                        placeholder="کد تخفیف"
                                        inputClassName="flex-1 w-full font-VazirMedium text-base text-neutral-04 leading-7 tracking-button-s transition-all hover:drop-shadow-custom focus:outline-none placeholder:text-neutral-04 border-0 shadow-none pl-10 h-auto"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="all-[unset] box-border inline-flex border-0 border-none items-center font-VazirMedium text-base text-neutral-07 leading-7 tracking-button-s whitespace-nowrap transition-all hover:drop-shadow-custom cursor-pointer"
                                >
                                    اعمال
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="w-full xl:w-[35%] order-3 xl:order-2">
                        <div className="flex flex-col w-full items-start gap-4 p-6 bg-white rounded-md border border-solid border-neutral-04 transition-all hover:drop-shadow-custom">
                            <div className="font-VazirMedium self-stretch text-neutral-07 text-xl leading-7 transition-all hover:drop-shadow-custom">
                                خلاصه سبد خرید
                            </div>

                            <div className="flex flex-col items-start self-stretch w-full">
                                <div className="flex flex-col items-start pt-0 pb-8 self-stretch w-full">
                                    <div className="flex flex-col items-start gap-3 pb-4 self-stretch w-full">
                                        <div className="flex items-center justify-between bg-neutral-02 border border-neutral-07 w-full px-4 py-[13px] rounded transition-all hover:drop-shadow-custom">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center size-4.5 rounded-full border border-black-900">
                                                    <div className="size-2.5 bg-main rounded-full"></div>
                                                </div>
                                                <div className="font-VazirRegular text-neutral-07 text-base">
                                                    ارسال با تیپاکس
                                                </div>
                                            </div>
                                            <div className="font-VazirRegular text-neutral-07 text-base">
                                                120 تومان
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between bg-white border border-neutral-07 w-full px-4 py-[13px] rounded transition-all hover:drop-shadow-custom">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center size-4.5 rounded-full border border-black-900">
                                                    <div className="size-2.5 bg-white rounded-full"></div>
                                                </div>
                                                <div className="font-VazirRegular text-neutral-07 text-base">
                                                    ارسال با پست
                                                </div>
                                            </div>
                                            <div className="font-VazirRegular text-neutral-07 text-base transition-all hover:drop-shadow-custom">
                                                50 تومان
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between bg-white border border-neutral-07 w-full px-4 py-[13px] rounded transition-all hover:drop-shadow-custom">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center size-4.5 rounded-full border border-black-900">
                                                    <div className="size-2.5 bg-white rounded-full"></div>
                                                </div>
                                                <div className="font-VazirRegular text-neutral-07 text-base transition-all hover:drop-shadow-custom">
                                                    مراجعه حضوری
                                                </div>
                                            </div>
                                            <div className="font-VazirRegular text-neutral-07 text-base transition-all hover:drop-shadow-custom">
                                                0 تومان
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between py-[13px] w-full">
                                        <div className="font-VazirBold text-xl text-neutral-07 transition-all hover:drop-shadow-custom">
                                            مجموع
                                        </div>
                                        <div className="font-VazirBold text-xl text-neutral-07 transition-all hover:drop-shadow-custom">
                                            ۱٬۳۴۵٬۰۰۰ تومان
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleCkeckout}
                                    className="all-[unset] box-border flex w-full justify-center px-[26px] py-4 h-10 transition-all bg-main hover:bg-main/90 rounded-lg items-center font-VazirMediumtext-lg text-white leading-8 cursor-pointer"
                                >
                                    ادامه فرایند خرید
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingTable;

