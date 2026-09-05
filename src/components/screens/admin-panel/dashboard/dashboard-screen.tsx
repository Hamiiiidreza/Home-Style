import Statistics from './partials/statistics';
import ChartsSection from './partials/charts-section';
import RecentTransactions from './partials/recent-transactions';
import useAdminDashboard from '../../../../endpoints/useAdminDashboard';

const DashboardScreen = () => {
    const { data, error, isError, isPending, refetch } = useAdminDashboard();

    if (isError) {
        return (
            <div className="flex min-h-[500px] items-center justify-center bg-white p-3 font-VazirRegular sm:p-6" dir="rtl">
                <div className="w-full max-w-md rounded-md border border-red-100 bg-red-50 p-6 text-center">
                    <p className="font-VazirMedium text-red-600">
                        {error instanceof Error ? error.message : 'دریافت اطلاعات داشبورد با خطا مواجه شد'}
                    </p>
                    <button
                        type="button"
                        onClick={() => refetch()}
                        className="mt-4 rounded-md bg-main px-5 py-2 text-sm font-VazirBold text-white transition-colors hover:bg-main/90"
                    >
                        تلاش مجدد
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-3 font-VazirRegular sm:p-6" dir="rtl">
            <Statistics data={data?.overview} isPending={isPending} />
            <ChartsSection
                growthData={data?.growthChart ?? []}
                salesData={data?.salesChart ?? []}
                isPending={isPending}
            />
            <RecentTransactions data={data?.lastOrders ?? []} isPending={isPending} />
        </div>
    );
};

export default DashboardScreen;
