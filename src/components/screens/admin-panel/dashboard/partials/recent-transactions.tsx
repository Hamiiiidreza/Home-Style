import { ChevronLeft } from 'lucide-react';
import { localAssetsUrl } from '../../../../../utils/constants';

type TransactionStatus = 'تکمیل شده' | 'در حال پردازش' | 'در انتظار پرداخت';

type Transaction = {
    id: string;
    customer: string;
    product: string;
    price: string;
    status: TransactionStatus;
    date: string;
    img: string;
};

const statusStyles: Record<TransactionStatus, string> = {
    'تکمیل شده': 'bg-emerald-50 text-emerald-600',
    'در حال پردازش': 'bg-blue-50 text-blue-600',
    'در انتظار پرداخت': 'bg-rose-50 text-rose-600',
};

// نام فایل‌های عکس به صورت استاندارد و تمیز
const transactions: Transaction[] = [
    {
        id: '۱۲۵۴۸۷',
        customer: 'علی محمدی',
        product: 'مبل ال مدرن وینتر',
        price: '۶۵,۰۰۰,۰۰۰',
        status: 'تکمیل شده',
        date: '۲۲ اردیبهشت ۱۴۰۳',
        img: 'product-14.png',
    },
    {
        id: '۱۲۵۴۸۶',
        customer: 'سارا احمدی',
        product: 'میز ناهارخوری لوکس',
        price: '۶۲,۰۰۰,۰۰۰',
        status: 'در حال پردازش',
        date: '۲۲ اردیبهشت ۱۴۰۳',
        img: 'product-20.jpg',
    },
    {
        id: '۱۲۵۴۸۵',
        customer: 'محمد رضایی',
        product: 'مبل راحتی چستر',
        price: '۹۸,۰۰۰,۰۰۰',
        status: 'تکمیل شده',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        img: 'product-15.png',
    },
    {
        id: '۱۲۵۴۸۴',
        customer: 'زهرا حسینی',
        product: 'آینه قدی مدرن',
        price: '۲۴,۵۰۰,۰۰۰',
        status: 'در انتظار پرداخت',
        date: '۲۱ اردیبهشت ۱۴۰۳',
        img: 'product-14.png',
    },
];

const RecentTransactions = () => {
    return (
        <div className="overflow-hidden rounded-md border bg-white shadow-sm transition-all hover:drop-shadow-custom">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-50 p-4 sm:p-6">
                <h3 className="font-VazirBold text-neutral-07 text-sm sm:text-base">آخرین تراکنش‌ها</h3>
                <button
                    type="button"
                    className="text-secondary-color-blue font-VazirMedium flex shrink-0 cursor-pointer items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
                >
                    مشاهده همه
                    <ChevronLeft size={14} />
                </button>
            </div>

            {/* Mobile View (Cards) */}
            <div className="flex flex-col divide-y divide-gray-100 sm:hidden">
                {transactions.map((item, idx) => {
                    const imageSrc =
                        item.img.startsWith('http') || item.img.startsWith('/')
                            ? item.img
                            : `${localAssetsUrl}${item.img}`;

                    return (
                        <div key={idx} className="flex flex-col gap-3 p-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={imageSrc}
                                    className="size-10 shrink-0 rounded-md object-cover"
                                    alt={item.product}
                                    loading="lazy"
                                />
                                <div className="min-w-0">
                                    <p className="text-neutral-04 font-VazirMedium truncate text-xs">{item.product}</p>
                                    <p className="font-VazirMedium text-[11px] text-gray-400">#{item.id}</p>
                                </div>
                            </div>

                            <p className="font-VazirBold text-neutral-07 text-sm">{item.customer}</p>

                            <p className="font-VazirBold text-neutral-07 text-sm">
                                {item.price} <span className="font-VazirRegular text-neutral-04 text-[10px]">تومان</span>
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="font-VazirMedium text-[11px] text-gray-400">{item.date}</span>
                                <span
                                    className={`rounded-full px-2.5 py-1 text-[10px] font-VazirBold ${statusStyles[item.status]}`}
                                >
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop / Tablet View (Table) */}
            <div className="hidden overflow-x-auto sm:block">
                <table className="w-full min-w-[600px] text-center">
                    <thead>
                        <tr className="border-b border-gray-100 bg-gray-50 text-neutral-07 font-VazirMedium text-xs">
                            <th className="whitespace-nowrap px-3 py-3">شماره سفارش</th>
                            <th className="whitespace-nowrap px-3 py-3">مشتری</th>
                            <th className="whitespace-nowrap px-3 py-3">محصول</th>
                            <th className="whitespace-nowrap px-3 py-3">مبلغ</th>
                            <th className="whitespace-nowrap px-3 py-3">وضعیت</th>
                            <th className="whitespace-nowrap px-3 py-3">تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((item, idx) => {
                            const imageSrc =
                                item.img.startsWith('http') || item.img.startsWith('/')
                                    ? item.img
                                    : `${localAssetsUrl}${item.img}`;

                            return (
                                <tr key={idx} className="border-b border-gray-50 transition-colors hover:bg-gray-50">
                                    <td className="font-VazirMedium whitespace-nowrap px-3 py-3 text-xs">{item.id}</td>
                                    <td className="font-VazirBold text-neutral-07 whitespace-nowrap px-3 py-3 text-sm">
                                        {item.customer}
                                    </td>
                                    <td className="px-3 py-3">
                                        <div className="flex items-center justify-center gap-2">
                                            <img
                                                src={imageSrc}
                                                className="size-9 shrink-0 rounded-md object-cover"
                                                alt={item.product}
                                                loading="lazy"
                                            />
                                            <span className="text-neutral-04 font-VazirMedium line-clamp-1 max-w-[140px] text-right text-xs">
                                                {item.product}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="font-VazirBold text-neutral-07 whitespace-nowrap px-3 py-3 text-sm">
                                        {item.price}{' '}
                                        <span className="font-VazirRegular text-neutral-04 text-[10px]">تومان</span>
                                    </td>
                                    <td className="px-3 py-3">
                                        <span
                                            className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-VazirBold ${statusStyles[item.status]}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="font-VazirMedium whitespace-nowrap px-3 py-3 text-[11px] text-gray-400">
                                        {item.date}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentTransactions;

