import { Handbag, LucideIcon, TrendingUp, Truck, User } from 'lucide-react';

import { Skeleton } from '../../../../ui/skeleton';
import { AdminDashboardOverview } from '../../../../../types/admin-dashboard.types';

type StatItem = {
    key: keyof AdminDashboardOverview;
    title: string;
    icon: LucideIcon;
    isCurrency?: boolean;
};

const items: StatItem[] = [
    { key: 'activeProducts', title: 'محصولات فعال', icon: Truck },
    { key: 'newCustomers', title: 'مشتریان جدید', icon: User },
    { key: 'newOrders', title: 'سفارش‌های جدید', icon: Handbag },
    { key: 'totalSales', title: 'مجموع فروش', icon: TrendingUp, isCurrency: true },
];

type StatisticsProps = {
    data: AdminDashboardOverview | undefined;
    isPending: boolean;
};

const Statistics = ({ data, isPending }: StatisticsProps) => {
    return (
        <div className="mb-6 mt-3 grid grid-cols-2 gap-3 sm:mb-10 sm:mt-5 sm:gap-5 xl:grid-cols-4">
            {items.map((box) => {
                const Icon = box.icon;
                const value = data?.[box.key];

                return (
                    <div
                        key={box.key}
                        className="flex items-start gap-3 rounded-md border bg-white p-3 shadow-sm transition-all hover:drop-shadow-custom sm:gap-4 sm:p-5"
                    >
                        <div className="bg-neutral-01 text-secondary-color-blue flex size-10 shrink-0 items-center justify-center rounded-full sm:size-12">
                            <Icon size={20} />
                        </div>
                        <div className="flex min-w-0 flex-col gap-1">
                            <span className="text-neutral-07 truncate text-[10px] font-VazirMedium sm:text-xs">
                                {box.title}
                            </span>
                            {isPending ? (
                                <Skeleton className="mt-1 h-5 w-20" />
                            ) : (
                                <span className="text-neutral-07 text-sm font-VazirBold sm:text-base">
                                    {(value ?? 0).toLocaleString('fa-IR')}
                                    {box.isCurrency && (
                                        <span className="mr-1 text-[8px] font-VazirRegular text-neutral-04">
                                            تومان
                                        </span>
                                    )}
                                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Statistics;
