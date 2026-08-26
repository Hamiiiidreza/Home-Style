import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

type GrowthData = { name: string; a: number; b: number };

const colors = {
    secondary: '#141718',
    accent: '#2F6BFF',
    text: '#6c7275',
};

const growthData: GrowthData[] = [
    { name: '04/7/1', a: 2500, b: 4200 },
    { name: '04/8/1', a: 4000, b: 4400 },
    { name: '04/9/1', a: 4800, b: 5200 },
    { name: '04/10/1', a: 3900, b: 5100 },
    { name: '04/11/1', a: 4200, b: 3800 },
    { name: '04/12/1', a: 4500, b: 4100 },
];

const CustomTooltipGrowth = ({ active, payload }: TooltipProps<ValueType, NameType> & { payload?: any }) => {
    if (!active || !payload?.length) return null;
    const data = payload[0].payload as GrowthData;
    return (
        <div className="font-VazirRegular rounded-md border bg-white p-3 text-center shadow-md">
            <p className="text-neutral-04 mb-1 text-[10px]">{data.name}</p>
            <div className="font-VazirBold text-neutral-07 space-y-1 text-sm">
                <p className="flex justify-between gap-4">
                    <span className="text-secondary-color-blue">گروه الف:</span>
                    <span>{data.a.toLocaleString('fa-ir')}</span>
                </p>
                <p className="flex justify-between gap-4">
                    <span className="text-neutral-07">گروه ب:</span>
                    <span>{data.b.toLocaleString('fa-ir')}</span>
                </p>
            </div>
        </div>
    );
};

const GrowthChart = () => {
    return (
        <div className="order-2 rounded-md border bg-white p-4 shadow-sm transition-all hover:drop-shadow-custom sm:p-6 xl:order-1">
            <div className="mb-4 flex items-center justify-between gap-2 sm:mb-8">
                <h3 className="font-VazirBold text-neutral-07 shrink-0 text-sm sm:text-base">تحلیل رشد ماهانه</h3>
                <div className="flex gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="bg-secondary-color-blue size-2.5 shrink-0 rounded-full"></div>
                        <span className="text-secondary-color-blue text-[10px] sm:text-xs">گروه الف</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="bg-neutral-07 size-2.5 shrink-0 rounded-full"></div>
                        <span className="text-[10px] text-gray-500 sm:text-xs">گروه ب</span>
                    </div>
                </div>
            </div>
            <div className="h-[220px] w-full sm:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colors.accent} stopOpacity={0.2} />
                                <stop offset="95%" stopColor={colors.accent} stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={colors.secondary} stopOpacity={0.1} />
                                <stop offset="95%" stopColor={colors.secondary} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: colors.text, fontSize: 9 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: colors.text, fontSize: 9 }} />
                        <Tooltip content={<CustomTooltipGrowth />} />
                        <Area type="monotone" dataKey="a" stroke={colors.accent} strokeWidth={2} fillOpacity={1} fill="url(#colorA)" />
                        <Area type="monotone" dataKey="b" stroke={colors.secondary} strokeWidth={2} fillOpacity={1} fill="url(#colorB)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default GrowthChart;
