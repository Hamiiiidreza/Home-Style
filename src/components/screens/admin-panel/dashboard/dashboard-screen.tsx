import Statistics from './partials/statistics';
import ChartsSection from './partials/charts-section';
import RecentTransactions from './partials/recent-transactions';

const DashboardScreen = () => {
    return (
        <div className="min-h-screen bg-white p-3 font-VazirRegular sm:p-6" dir="rtl">
            <Statistics />
            <ChartsSection />
            <RecentTransactions />
        </div>
    );
};

export default DashboardScreen;
