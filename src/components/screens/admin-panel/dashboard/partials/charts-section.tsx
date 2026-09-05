import {
    AdminDashboardGrowthPoint,
    AdminDashboardSalesPoint,
} from '../../../../../types/admin-dashboard.types';

import GrowthChart from './growth-chart';
import SalesChart from './sales-chart';

type ChartsSectionProps = {
    growthData: AdminDashboardGrowthPoint[];
    salesData: AdminDashboardSalesPoint[];
    isPending: boolean;
};

const ChartsSection = ({ growthData, salesData, isPending }: ChartsSectionProps) => {
    return (
        <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-10 sm:gap-6 xl:grid-cols-2">
            <GrowthChart data={growthData} isPending={isPending} />
            <SalesChart data={salesData} isPending={isPending} />
        </div>
    );
};

export default ChartsSection;
