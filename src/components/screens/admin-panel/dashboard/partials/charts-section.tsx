import GrowthChart from './growth-chart';
import SalesChart from './sales-chart';

const ChartsSection = () => {
    return (
        <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-10 sm:gap-6 xl:grid-cols-2">
            <GrowthChart />
            <SalesChart />
        </div>
    );
};

export default ChartsSection;
