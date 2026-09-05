import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { AdminDashboardData, AdminDashboardResponse } from '../types/admin-dashboard.types';
import { localBackendUrl } from '../utils/constants';

const fetchAdminDashboard = async (): Promise<AdminDashboardData> => {
    const response = await fetch(`${localBackendUrl}/stats`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });

    const result = (await response.json().catch(() => null)) as AdminDashboardResponse | null;

    if (!response.ok) {
        if (response.status === 401) {
            Cookies.remove('token');
        }

        throw new Error('دریافت اطلاعات داشبورد با خطا مواجه شد');
    }

    if (!result?.success || !result.data) {
        throw new Error('ساختار پاسخ داشبورد معتبر نیست');
    }

    return result.data;
};

const useAdminDashboard = () => {
    return useQuery({
        queryKey: ['admin-dashboard'],
        queryFn: fetchAdminDashboard,
        retry: false,
    });
};

export default useAdminDashboard;
