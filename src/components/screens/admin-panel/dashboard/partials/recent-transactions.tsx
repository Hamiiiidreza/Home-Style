import { ChevronLeft } from 'lucide-react';
import { Skeleton } from '../../../../ui/skeleton';
import { AdminDashboardOrder } from '../../../../../types/admin-dashboard.types';
import { localAssetsUrl } from '../../../../../utils/constants';
import { toJalaliDate } from '../../../../../utils/helpers';

type RecentTransactionsProps = {
    data: AdminDashboardOrder[];
    isPending: boolean;
};

const getStatusMeta = (status: string) => {
    switch (status.toLowerCase()) {
        case 'successfull':
        case 'successful':
            return {
                text: 'تکمیل شده',
                className: 'bg-emerald-50 text-emerald-600',
            };
        case 'pending':
        case 'processing':
            return {
                text: 'در حال پردازش',
                className: 'bg-blue-50 text-blue-600',
            };
        case 'unsucessfull':
        case 'unsuccessful':
        case 'failed':
            return {
                text: 'ناموفق',
                className: 'bg-rose-50 text-rose-600',
            };
        default:
            return {
                text: status || 'نامشخص',
                className: 'bg-gray-100 text-gray-600',
            };
    }
};

const getImageUrl = (image?: string) => {
    if (!image) {
        return '/Images/img-placeholder-1.png';
    }

    if (image.startsWith('http')) {
        return image;
    }

    return image.startsWith('/') ? `${localAssetsUrl}${image}` : `${localAssetsUrl}/${image}`;
};

const getCustomerName = (order: AdminDashboardOrder) => {
    return (
        order.user?.name ||
        `${order.information?.firstName || ''} ${order.information?.lastName || ''}`.trim() ||
        'کاربر'
    );
};

const getProductName = (order: AdminDashboardOrder) => {
    return order.products[0]?.product?.name || 'بدون محصول';
};

const RecentTransactions = ({ data, isPending }: RecentTransactionsProps) => {
    return (
        <div className="overflow-hidden rounded-md border bg-white shadow-sm transition-all hover:drop-shadow-custom">
            <div className="flex items-center justify-between border-b border-gray-50 p-4 sm:p-6">
                <h3 className="text-sm font-VazirBold text-neutral-07 sm:text-base">آخرین تراکنش‌ها</h3>
                <button
                    type="button"
                    disabled
                    className="flex shrink-0 cursor-not-allowed items-center gap-1.5 text-xs font-VazirMedium text-secondary-color-blue opacity-60"
                >
                    مشاهده همه
                    <ChevronLeft size={14} />
                </button>
            </div>

            {isPending ? (
                <div className="flex flex-col divide-y divide-gray-100 sm:hidden">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex flex-col gap-3 p-4">
                            <Skeleton className="h-10 w-full" />
                            <Skeleton className="h-4 w-1/2" />
                            <Skeleton className="h-4 w-1/3" />
                        </div>
                    ))}
                </div>
            ) : data.length === 0 ? (
                <div className="px-4 py-16 text-center text-sm font-VazirMedium text-neutral-04">
                    تراکنشی برای نمایش وجود ندارد
                </div>
            ) : (
                <>
                    <div className="flex flex-col divide-y divide-gray-100 sm:hidden">
                        {data.map((item) => {
                            const product = item.products[0]?.product;
                            const status = getStatusMeta(item.status);

                            return (
                                <div key={item._id} className="flex flex-col gap-3 p-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={getImageUrl(product?.images?.[0])}
                                            className="size-10 shrink-0 rounded-md object-cover"
                                            alt={getProductName(item)}
                                            loading="lazy"
                                        />
                                        <div className="min-w-0">
                                            <p className="truncate text-xs font-VazirMedium text-neutral-04">
                                                {getProductName(item)}
                                            </p>
                                            <p className="text-[11px] font-VazirMedium text-gray-400">
                                                #{item.trackingCode || item._id}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm font-VazirBold text-neutral-07">{getCustomerName(item)}</p>

                                    <p className="text-sm font-VazirBold text-neutral-07">
                                        {item.totalPrice.toLocaleString('fa-IR')}{' '}
                                        <span className="text-[10px] font-VazirRegular text-neutral-04">تومان</span>
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-VazirMedium text-gray-400">
                                            {toJalaliDate(item.createdAt)}
                                        </span>
                                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-VazirBold ${status.className}`}>
                                            {status.text}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="hidden overflow-x-auto sm:block">
                        <table className="w-full min-w-[600px] text-center">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50 text-xs font-VazirMedium text-neutral-07">
                                    <th className="whitespace-nowrap px-3 py-3">شماره سفارش</th>
                                    <th className="whitespace-nowrap px-3 py-3">مشتری</th>
                                    <th className="whitespace-nowrap px-3 py-3">محصول</th>
                                    <th className="whitespace-nowrap px-3 py-3">مبلغ</th>
                                    <th className="whitespace-nowrap px-3 py-3">وضعیت</th>
                                    <th className="whitespace-nowrap px-3 py-3">تاریخ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => {
                                    const product = item.products[0]?.product;
                                    const status = getStatusMeta(item.status);

                                    return (
                                        <tr key={item._id} className="border-b border-gray-50 transition-colors hover:bg-gray-50">
                                            <td className="whitespace-nowrap px-3 py-3 text-xs font-VazirMedium">
                                                {item.trackingCode || item._id}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-sm font-VazirBold text-neutral-07">
                                                {getCustomerName(item)}
                                            </td>
                                            <td className="px-3 py-3">
                                                <div className="flex items-center justify-center gap-2">
                                                    <img
                                                        src={getImageUrl(product?.images?.[0])}
                                                        className="size-9 shrink-0 rounded-md object-cover"
                                                        alt={getProductName(item)}
                                                        loading="lazy"
                                                    />
                                                    <span className="line-clamp-1 max-w-[180px] text-right text-xs font-VazirMedium text-neutral-04">
                                                        {getProductName(item)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-sm font-VazirBold text-neutral-07">
                                                {item.totalPrice.toLocaleString('fa-IR')}{' '}
                                                <span className="text-[10px] font-VazirRegular text-neutral-04">تومان</span>
                                            </td>
                                            <td className="px-3 py-3">
                                                <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-VazirBold ${status.className}`}>
                                                    {status.text}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 text-[11px] font-VazirMedium text-gray-400">
                                                {toJalaliDate(item.createdAt)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default RecentTransactions;
