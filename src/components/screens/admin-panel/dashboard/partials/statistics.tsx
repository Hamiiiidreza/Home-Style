import { Truck, User, Handbag, TrendingUp, MoveUpRight, LucideIcon } from 'lucide-react';

type StatItem = {
    title: string;
    count: number;
    icon: LucideIcon;
    desc: string;
};

const items: StatItem[] = [
    { title: 'محصولات فعال', count: 246, icon: Truck, desc: '5% نسبت به ماه قبل' },
    { title: 'مشتریان جدید', count: 92, icon: User, desc: '15% نسبت به ماه قبل' },
    { title: 'سفارشات جدید', count: 158, icon: Handbag, desc: '8% نسبت به ماه قبل' },
    { title: 'مجموع فروش', count: 2485000000, icon: TrendingUp, desc: '12% نسبت به ماه قبل' },
];

const Statistics = () => {
    return (
        <div className="mb-6 mt-3 grid grid-cols-2 gap-3 sm:mb-10 sm:mt-5 sm:gap-5 xl:grid-cols-4">
            {items.map((box, i) => {
                const Icon = box.icon;
                return (
                    <div
                        key={i}
                        className="flex items-start gap-3 rounded-md border bg-white p-3 shadow-sm transition-all hover:drop-shadow-custom sm:gap-4 sm:p-5"
                    >
                        <div className="bg-neutral-01 text-secondary-color-blue flex size-10 shrink-0 items-center justify-center rounded-full sm:size-12">
                            <Icon size={20} />
                        </div>
                        <div className="flex min-w-0 flex-col gap-1">
                            <span className="text-neutral-07 font-VazirMedium truncate text-[10px] sm:text-xs">
                                {box.title}
                            </span>
                            <span className="text-neutral-07 font-VazirBold text-sm sm:text-base">
                                {box.count.toLocaleString('fa-ir')}
                            </span>
                            <span className="text-secondary-color-green font-VazirRegular mt-1 hidden items-center gap-1 text-[10px] sm:flex">
                                <MoveUpRight size={10} />
                                {box.desc}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Statistics;
