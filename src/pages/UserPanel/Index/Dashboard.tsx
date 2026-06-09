import React from 'react';
import {
    Heart,
    Handbag,
    MessageCircle,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Plus,
    PencilIcon,
    Trash,
    User, Mail, Phone, CreditCard
} from 'lucide-react';

type DashboardItem = {
    title: string;
    count: number;
    icon: React.ReactNode;
    desc: string;
};

const Dashboard: React.FC = () => {

    const items: DashboardItem[] = [
        { title: "آدرس‌های من", count: 3, icon: <MapPin />, desc: "مدیریت آدرس ها" },
        { title: "پیام های من", count: 2, icon: <MessageCircle />, desc: "مشاهده پیام ها" },
        { title: "سفارش‌های من", count: 12, icon: <Handbag />, desc: "مشاهده همه" },
        { title: "علاقه‌مندی‌ها", count: 8, icon: <Heart />, desc: "مشاهده همه" },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 my-10 w-full" dir="rtl">
                {items.map((box, i) => (
                    <div
                        key={i}
                        className="bg-white border rounded-md px-6 py-4 flex items-start gap-4 shadow-sm transition-all hover:drop-shadow-custom"
                    >
                        <div className="size-14 flex items-center justify-center rounded-full bg-neutral-01 text-secondary-color-blue">
                            {box.icon}
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-neutral-07 text-sm font-VazirMedium">{box.title}</span>
                            <span className="text-neutral-07 text-2xl font-VazirBold">{box.count.toLocaleString('fa-ir')}</span>
                            <span className="text-neutral-04 text-xs font-VazirMedium">{box.desc}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col xl:flex-row gap-4 w-full mb-5" dir="rtl">
                {/* بخش آخرین سفارش‌ها */}
                <div className="w-full xl:w-[40%] bg-white rounded-md border shadow-sm px-6 py-6 transition-all hover:drop-shadow-custom">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-VazirBold text-base text-neutral-07 ml-2">آخرین سفارش ها</h2>
                        <h4 className="flex items-center gap-2 text-xs font-VazirMedium text-secondary-color-blue">
                            مشاهده همه
                            <ChevronLeft size={14} />
                        </h4>
                    </div>

                    <div className="space-y-3 text-xs text-neutral-04">
                        <div className="flex items-center gap-4 pb-3 border-b border-neutral-02">
                            <img
                                src="/Images/product-13.png"
                                alt="سفارش ۱۲۵۴۸"
                                className="w-30 h-15 rounded-md object-cover"
                            />
                            <div className="flex items-center justify-between flex-1">
                                <div className="flex flex-col gap-2 mb-1">
                                    <span className="block font-VazirBold text-neutral-07">
                                        مبل چند نفره کرم
                                    </span>
                                    <span className="block font-VazirRegular text-neutral-04">
                                        ۲۲ اردیبهشت ۱۴۰۳
                                    </span>
                                    <span className="font-VazirMedium text-neutral-07">
                                        ۸۵,۰۰۰,۰۰۰ تومان
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="px-3 py-2 rounded-md text-[10px] bg-green-100 text-green-700">
                                        در حال ارسال
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pb-3 border-b border-neutral-02">
                            <img
                                src="/Images/product-17.webp"
                                alt="سفارش ۱۲۵۴۸"
                                className="w-30 h-15 rounded-md object-cover"
                            />
                            <div className="flex items-center justify-between flex-1">
                                <div className="flex flex-col gap-2 mb-1">
                                    <span className="block font-VazirBold text-neutral-07">
                                        مبل راحتی سبز
                                    </span>
                                    <span className="block font-VazirRegular text-neutral-04">
                                        ۲۲ اردیبهشت ۱۴۰۳
                                    </span>
                                    <span className="font-VazirMedium text-neutral-07">
                                        ۸۵,۰۰۰,۰۰۰ تومان
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="px-3 py-2 rounded-md text-[10px] bg-green-100 text-green-700">
                                        تحویل داده شده
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pb-3">
                            <img
                                src="/Images/product-14.png"
                                alt="سفارش ۱۲۵۴۸"
                                className="w-30 h-15 rounded-md object-cover"
                            />
                            <div className="flex items-center justify-between flex-1">
                                <div className="flex flex-col gap-2 mb-1">
                                    <span className="block font-VazirBold text-neutral-07">
                                        مبل چند نفره کرم
                                    </span>
                                    <span className="block font-VazirRegular text-neutral-04">
                                        ۲۲ اردیبهشت ۱۴۰۳
                                    </span>
                                    <span className="font-VazirMedium text-neutral-07">
                                        ۸۵,۰۰۰,۰۰۰ تومان
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="px-3 py-2 rounded-md bg-secondary-color-red/10 text-[10px] text-secondary-color-red ">
                                        لغو شده
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* بخش محصولات محبوب شما */}
                <div className="w-full xl:w-[60%] bg-white rounded-md border shadow-sm px-4 py-6 transition-all hover:drop-shadow-custom">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-VazirBold text-base text-neutral-07 ml-2">محصولات محبوب شما</h2>
                        <h4 className="flex items-center gap-2 text-xs font-VazirMedium text-secondary-color-blue cursor-pointer">
                            مشاهده همه
                            <ChevronLeft size={14} />
                        </h4>
                    </div>

                    <div className="relative">
                        <button className="group absolute -right-7 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center rounded-full bg-white shadow-md border text-gray-500 cursor-pointer transition-all hover:bg-main hover:text-white">
                            <ChevronRight size={16} className="inline-block text-xl leading-none transition-all hover:group-hover:text-white" />
                        </button>
                        <button className="absolute -left-7 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center rounded-full bg-white shadow-md border text-gray-500 cursor-pointer transition-all hover:bg-main hover:text-white">
                            <ChevronLeft size={16} className="inline-block text-xl leading-none transition-all hover:group-hover:text-white" />
                        </button>

                        <div className="grid grid-cols-4 gap-2">
                            <div className="bg-white overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/Images/product-19.webp"
                                        alt="میز ناهارخوری گلدیس"
                                        className="w-full h-34 object-cover rounded-md"
                                    />
                                    <button className="absolute top-2 left-1.5 size-6 rounded-full bg-white flex items-center justify-center shadow-sm border cursor-pointer">
                                        <Heart size={16} className="text-secondary-color-red fill-secondary-color-red" />
                                    </button>
                                </div>
                                <div className="px-1 py-3">
                                    <p className="font-VazirBold text-xs text-neutral-07 mb-2">
                                        میز ناهارخوری گلدیس
                                    </p>
                                    <p className="font-VazirRegular text-xs text-neutral-07">۳۴,۰۰۰,۰۰۰ تومان</p>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/Images/product-18.webp"
                                        alt="میز ناهارخوری گلدیس"
                                        className="w-full h-34 object-cover rounded-md"
                                    />
                                    <button className="absolute top-2 left-1.5 size-6 rounded-full bg-white flex items-center justify-center shadow-sm border cursor-pointer">
                                        <Heart size={16} className="text-secondary-color-red fill-secondary-color-red" />
                                    </button>
                                </div>
                                <div className="px-1 py-3">
                                    <p className="font-VazirBold text-xs text-neutral-07 mb-2">
                                        مبل تک نفره ونیز
                                    </p>
                                    <p className="font-VazirRegular text-xs text-neutral-07">۲۸,۰۰۰,۰۰۰ تومان</p>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/Images/product-15.png"
                                        alt="میز ناهارخوری گلدیس"
                                        className="w-full h-34 object-cover rounded-md"
                                    />
                                    <button className="absolute top-2 left-1.5 size-6 rounded-full bg-white flex items-center justify-center shadow-sm border cursor-pointer">
                                        <Heart size={16} className="text-secondary-color-red fill-secondary-color-red" />
                                    </button>
                                </div>
                                <div className="px-1 py-3">
                                    <p className="font-VazirBold text-xs text-neutral-07 mb-2">
                                        مبل چستر - سبز
                                    </p>
                                    <p className="font-VazirRegular text-xs text-neutral-07">۶۲,۰۰۰,۰۰۰ تومان</p>
                                </div>
                            </div>

                            <div className="bg-white overflow-hidden">
                                <div className="relative">
                                    <img
                                        src="/Images/product-16.webp"
                                        alt="میز ناهارخوری گلدیس"
                                        className="w-full h-34 object-cover rounded-md"
                                    />
                                    <button className="absolute top-2 left-1.5 size-6 rounded-full bg-white flex items-center justify-center shadow-sm border cursor-pointer">
                                        <Heart size={16} className="text-secondary-color-red fill-secondary-color-red" />
                                    </button>
                                </div>
                                <div className="px-1 py-3">
                                    <p className="font-VazirBold text-xs text-neutral-07 mb-2">
                                        مبل ال نیایر - مدل ونیز
                                    </p>
                                    <p className="font-VazirRegular text-xs text-neutral-07">۸۵,۰۰۰,۰۰۰ تومان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[75%] mx-auto flex-1 bg-white rounded-md border shadow-sm py-6 px-12 transition-all hover:drop-shadow-custom">
                <div className="flex items-center gap-4">
                    <div className='flex items-center justify-center size-8 text-white bg-main rounded-full cursor-pointer'>
                        <PencilIcon size={14} />
                    </div>
                    <h2 className="font-VazirBold text-base text-neutral-07 ml-2">اطلاعات حساب کاربری</h2>
                </div>

                <div className="">
                    <div className="flex items-center justify-between py-5 border-b border-neutral-02">
                        <div className="flex items-center gap-4 text-neutral-04">
                            <div className="flex items-center justify-center size-8 rounded-full bg-neutral-01 text-secondary-color-blue">
                                <User size={20} />
                            </div>
                            <span className="font-VazirMedium text-sm text-neutral-07">نام و نام خانوادگی</span>
                        </div>
                        <span className='font-VazirBold text-sm text-neutral-07'>سینا یوسفی</span>
                    </div>

                    <div className="flex items-center justify-between py-5 border-b border-neutral-02">
                        <div className="flex items-center gap-4 text-neutral-04">
                            <div className="flex items-center justify-center size-8 rounded-full bg-neutral-01 text-secondary-color-blue">
                                <Mail size={20} />
                            </div>
                            <span className="font-VazirMedium text-sm text-neutral-07">ایمیل</span>
                        </div>
                        <span className='font-VazirBold text-sm text-neutral-07'>sina.yousefi@example.com</span>
                    </div>

                    <div className="flex items-center justify-between py-5 border-b border-neutral-02">
                        <div className="flex items-center gap-4 text-neutral-04">
                            <div className="flex items-center justify-center size-8 rounded-full bg-neutral-01 text-secondary-color-blue">
                                <Phone size={20} />
                            </div>
                            <span className="font-VazirMedium text-sm text-neutral-07">شماره تماس</span>
                        </div>
                        <span className='font-VazirBold text-sm text-neutral-07'>09121234578</span>
                    </div>

                    <div className="flex items-center justify-between py-5">
                        <div className="flex items-center gap-4 text-neutral-04">
                            <div className="flex items-center justify-center size-8 rounded-full bg-neutral-01 text-secondary-color-blue">
                                <CreditCard size={20} />
                            </div>
                            <span className="font-VazirMedium text-sm text-neutral-07">کد ملی</span>
                        </div>
                        <span className='font-VazirBold text-sm text-neutral-07'>__</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;




