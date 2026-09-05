import {
    Area,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis,
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { Skeleton } from '../../../../ui/skeleton';
import { AdminDashboardGrowthPoint } from '../../../../../types/admin-dashboard.types';

const colors = {
    sales: '#2F6BFF',
    orders: '#141718',
    customers: '#10B981',
    text: '#6c7275',
};

type GrowthChartProps = {
    data: AdminDashboardGrowthPoint[];
    isPending: boolean;
};

const formatMonth = (month: string) => {
    const date = new Date(`${month}-01T00:00:00`);

    if (Number.isNaN(date.getTime())) {
        return month;
    }

    return new Intl.DateTimeFormat('fa-IR', { month: 'short' }).format(date);
};

const formatSales = (value: number): string => {
    if (value === 0) {
        return '۰';
    }

    return `${Math.round(value / 1_000_000).toLocaleString('fa-IR')}M`;
};

const CustomTooltipGrowth = ({
    active,
    payload,
}: TooltipProps<ValueType, NameType> & { payload?: any }) => {
    if (!active || !payload?.length) {
        return null;
    }

    const data = payload[0].payload as AdminDashboardGrowthPoint;

    return (
        <div className="rounded-md border bg-white p-3 text-center font-VazirRegular shadow-md">
            <p className="mb-1 text-[10px] text-neutral-04">{formatMonth(data.month)}</p>
            <div className="space-y-1 text-sm font-VazirBold text-neutral-07">
                <p className="flex justify-between gap-4">
                    <span style={{ color: colors.sales }}>فروش:</span>
                    <span>{data.sales.toLocaleString('fa-IR')} تومان</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span style={{ color: colors.orders }}>سفارش:</span>
                    <span>{data.orders.toLocaleString('fa-IR')}</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span style={{ color: colors.customers }}>مشتری:</span>
                    <span>{data.customers.toLocaleString('fa-IR')}</span>
                </p>
            </div>
        </div>
    );
};

const GrowthChart = ({ data, isPending }: GrowthChartProps) => {
    return (
        <div className="order-2 rounded-md border bg-white p-4 shadow-sm transition-all hover:drop-shadow-custom sm:p-6 xl:order-1">
            <div className="mb-4 flex items-center justify-between gap-2 sm:mb-8">
                <h3 className="shrink-0 font-VazirBold text-sm text-neutral-07 sm:text-base">
                    تحلیل رشد ماهانه
                </h3>
                <div className="flex flex-wrap justify-end gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: colors.sales }} />
                        <span className="text-[10px] text-secondary-color-blue sm:text-xs">فروش</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: colors.orders }} />
                        <span className="text-[10px] text-gray-500 sm:text-xs">سفارش</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: colors.customers }} />
                        <span className="text-[10px] text-gray-500 sm:text-xs">مشتری</span>
                    </div>
                </div>
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
                        <ComposedChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorGrowthSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colors.sales} stopOpacity={0.2} />
                                    <stop offset="95%" stopColor={colors.sales} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: colors.text, fontSize: 9 }}
                                tickFormatter={formatMonth}
                                dy={10}
                            />
                            <YAxis
                                yAxisId="sales"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: colors.text, fontSize: 9 }}
                                tickFormatter={formatSales}
                            />
                            <YAxis
                                yAxisId="count"
                                orientation="right"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: colors.text, fontSize: 9 }}
                                allowDecimals={false}
                            />
                            <Tooltip content={<CustomTooltipGrowth />} />
                            <Area
                                yAxisId="sales"
                                type="monotone"
                                dataKey="sales"
                                stroke={colors.sales}
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorGrowthSales)"
                            />
                            <Line
                                yAxisId="count"
                                type="monotone"
                                dataKey="orders"
                                stroke={colors.orders}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                            <Line
                                yAxisId="count"
                                type="monotone"
                                dataKey="customers"
                                stroke={colors.customers}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default GrowthChart;
