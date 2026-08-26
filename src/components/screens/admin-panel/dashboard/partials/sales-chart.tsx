import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui/select';

type SalesData = { name: string; sales: number };

const colors = {
    primary: '#2d397e',
    text: '#6c7275',
};

const salesData: SalesData[] = [
    { name: '۲۴ فروردین', sales: 400000000 },
    { name: '۲۸ فروردین', sales: 300000000 },
    { name: '۵ اردیبهشت', sales: 500000000 },
    { name: '۹ اردیبهشت', sales: 685000000 },
    { name: '۱۳ اردیبهشت', sales: 420000000 },
    { name: '۱۷ اردیبهشت', sales: 650000000 },
    { name: '۲۱ اردیبهشت', sales: 600000000 },
];

const formatYAxis = (value: number): string => {
    if (value === 0) return '۰';
    return `${Math.round(value / 1000000).toLocaleString('fa-ir')}M`;
};

const CustomTooltipSales = ({ active, payload }: TooltipProps<ValueType, NameType> & { payload?: any }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="rounded-md border bg-white p-3 text-center shadow-md">
            <p className="text-neutral-04 font-VazirRegular mb-1 text-[10px]">{payload[0].payload.name}</p>
            <p className="font-VazirBold text-neutral-07 text-sm font-bold">
                {Number(payload[0].value).toLocaleString('fa-ir')}{' '}
                <span className="font-VazirMedium text-[10px]">تومان</span>
            </p>
        </div>
    );
};

const SalesChart = () => {
    return (
        <div className="order-1 rounded-md border bg-white p-4 shadow-sm transition-all hover:drop-shadow-custom sm:p-6 xl:order-2">
            <div className="mb-4 flex items-center justify-between gap-2 sm:mb-8">
                <h3 className="font-VazirBold text-neutral-07 shrink-0 text-sm sm:text-base">نمودار میزان فروش</h3>
                <Select defaultValue="30">
                    <SelectTrigger className="border-main text-neutral-04 font-VazirBold hover:bg-main h-[30px] w-[110px] cursor-pointer rounded-md px-3 text-[11px] transition-all hover:text-white sm:w-[120px]">
                        <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="30">۳۰ روز اخیر</SelectItem>
                        <SelectItem value="90">۹۰ روز اخیر</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="h-[220px] w-full sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colors.primary} stopOpacity={0.2} />
                                <stop offset="95%" stopColor={colors.primary} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: colors.text, fontSize: 9 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: colors.text, fontSize: 9 }} tickFormatter={formatYAxis} />
                        <Tooltip content={<CustomTooltipSales />} cursor={{ stroke: colors.primary, strokeWidth: 1, strokeDasharray: '5 5' }} />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke={colors.primary}
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorSales)"
                            activeDot={{ r: 6, fill: colors.primary, stroke: '#fff', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;
