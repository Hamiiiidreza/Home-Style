import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

const AdminMobileSidebar = () => {
    return (
        <aside className="fixed right-0 top-0 bottom-0 z-50 flex h-screen w-[280px] shrink-0 flex-col overflow-y-auto border-r border-neutral-02 bg-white p-5 scrollbar-minimal hide-scrollbar">
            <Link to="/" className="flex justify-center">
                <img src="/Images/logo-3.png" alt="لوگو" className="h-16 w-30" />
            </Link>

            <Sidebar />

            <div className="mt-6 h-56 w-full overflow-hidden rounded-2xl bg-[url('/Images/banner-1.jpg')] bg-cover bg-[position:50%_100%] sm:bg-[position:50%_90%]">
                <div className="p-4">
                    <h3 className="mb-1 text-sm font-VazirBold text-neutral-07">
                        مدیریت هوشمند، فروش بیشتر
                    </h3>
                    <p className="mb-3 text-xs font-VazirRegular text-neutral-04">
                        با تحلیل داده‌ها، تصمیم‌های بهتری برای فروشگاه بگیرید
                    </p>
                    <button
                        type="button"
                        className="flex cursor-pointer gap-2 rounded-lg bg-main px-3 py-2 text-xs font-VazirRegular text-white transition hover:bg-main/90"
                    >
                        مشاهده گزارش‌ها
                        <ChevronLeft size={14} />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default AdminMobileSidebar;
