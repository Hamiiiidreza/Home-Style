import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { Skeleton } from '../../../../ui/skeleton';
import { AdminDashboardSalesPoint } from '../../../../../types/admin-dashboard.types';

const colors = {
    primary: '#2d397e',
    text: '#6c7275',
};

type SalesChartProps = {
    data: AdminDashboardSalesPoint[];
    isPending: boolean;
};

const formatDate = (dateValue: string) => {
    const date = new Date(`${dateValue}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateValue;
    }

    return new Intl.DateTimeFormat('fa-IR', {
        month: 'short',
        day: 'numeric',
    }).format(date);
};

const formatYAxis = (value: number): string => {
    if (value === 0) {
        return '۰';
    }

    return `${Math.round(value / 1_000_000).toLocaleString('fa-IR')}M`;
};

const CustomTooltipSales = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType> & { payload?: any }) => {
    if (!active || !payload?.length) {
        return null;
    }

    const data = payload[0].payload as AdminDashboardSalesPoint;

    return (
        <div className="rounded-md border bg-white p-3 text-center shadow-md">
            <p className="mb-1 font-VazirRegular text-[10px] text-neutral-04">
                {formatDate(data.date)}
            </p>
            <p className="text-sm font-VazirBold text-neutral-07">
                {data.sales.toLocaleString('fa-IR')}{' '}
                <span className="text-[10px] font-VazirMedium">تومان</span>
            </p>
        </div>
    );
};

const SalesChart = ({ data, isPending }: SalesChartProps) => {
    return (
        <div className="order-1 rounded-md border bg-white p-4 shadow-sm transition-all hover:drop-shadow-custom sm:p-6 xl:order-2">
            <div className="mb-4 flex items-center justify-between gap-2 sm:mb-8">
                <h3 className="shrink-0 font-VazirBold text-sm text-neutral-07 sm:text-base">
                    نمودار میزان فروش
                </h3>
                <span className="rounded-md border border-main px-3 py-1 text-[10px] font-VazirBold text-neutral-04 sm:text-xs">
                    آمار فروش
                </span>
            </div>

            <div className="h-[220px] w-full sm:h-[300px]">
                {isPending ? (
                    <Skeleton className="h-full" />
                ) : data.length === 0 ? (
                    <div className="flex h-full items-center justify-center rounded-md bg-gray-50 text-sm text-neutral-04">
                        داده‌ای برای نمایش وجود ندارد
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorDashboardSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.2} />
                                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: colors.text, fontSize: 9 }}
                                tickFormatter={formatDate}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: colors.text, fontSize: 9 }}
                                tickFormatter={formatYAxis}
                            />
                            <Tooltip
                                content={<CustomTooltipSales />}
                                cursor={{ stroke: colors.primary, strokeWidth: 1, strokeDasharray: '5 5' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="sales"
                                stroke={colors.primary}
                                strokeWidth={2.5}
                                fillOpacity={1}
                                fill="url(#colorDashboardSales)"
                                activeDot={{ r: 6, fill: colors.primary, stroke: '#fff', strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default SalesChart;
