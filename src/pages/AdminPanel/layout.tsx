import React from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/screens/admin-panel/Sidebar";
import AdminMobileSidebar from "../../components/screens/admin-panel/mobile-sidebar";
import { ChevronLeft, LogOut, Menu } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../components/ui/sheet";

const AdminPanelLayout: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleLogout = () => {
        Cookies.remove("token");
        queryClient.setQueryData(["me"], null);
        navigate("/");
    };

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <div className="flex bg-neutral-03 min-h-screen">
            {/* desktop aside */}
            <aside className="hidden lg:flex lg:sticky lg:top-0 w-[280px] lg:w-[18%] flex-col shrink-0 z-50 overflow-y-auto scrollbar-minimal h-screen hide-scrollbar bg-white border-r border-neutral-02 p-5">
                <Link to="/" className="flex justify-center">
                    <img src="/Images/logo-3.png" alt="" className="w-30 h-16" />
                </Link>

                <Sidebar />

                <div className="bg-[url('/Images/banner-1.jpg')] w-full h-56 bg-cover bg-[position:50%_100%] sm:bg-[position:50%_90%] rounded-2xl mt-6 overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-xs text-neutral-07 font-VazirBold mb-1">
                            مدیریت هوشمند، فروش بیشتر
                        </h3>
                        <p className="text-xs text-neutral-04 font-VazirRegular mb-3">
                            با تحلیل داده ها، تصمیم های بهتری بگیرید
                        </p>
                        <Link to={'/p-admin/dashboard'} className="inline-flex gap-2 text-xs text-white font-VazirRegular bg-main hover:bg-main/90 transition rounded-lg px-3 py-2 cursor-pointer">
                            مشاهده گزارش ها
                            <ChevronLeft size={14} />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* mobile aside */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent
                    side="right"
                    className="z-[9999] w-[280px] border-none bg-transparent p-0 shadow-none"
                >
                    <AdminMobileSidebar />
                </SheetContent>

                <section className="w-full p-2">
                    <div className="p-4 sm:p-6 bg-white border border-neutral-02 shadow-sm rounded-md">
                        <header className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <SheetTrigger>
                                    <button
                                        type="button"
                                        aria-label="باز کردن منوی مدیریت"
                                        className="lg:hidden"
                                    >
                                        <Menu />
                                    </button>
                                </SheetTrigger>

                                <Link to="/" className="flex justify-center lg:hidden">
                                    <img
                                        src="/Images/logo.jpg"
                                        alt="لوگوی سایت"
                                        className="h-8 w-30 object-contain"
                                    />
                                </Link>

                                <div className="hidden lg:block">
                                    <h2 className="text-base md:text-xl font-VazirBold text-neutral-07">
                                       سلام مدیریت محترم
                                    </h2>
                                    <p className="font-VazirMedium text-neutral-04 text-xs md:text-sm mt-2">
                                        خوش آمدید! در اینجا نمای کلی از عملکرد فروشگاه را مشاهده میکنید.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    aria-label="خروج از حساب"
                                    onClick={handleLogout}
                                    className="text-neutral-07 transition-colors hover:text-main cursor-pointer"
                                >
                                    <LogOut size={20} />
                                </button>
                            </div>
                        </header>

                        <Outlet />
                    </div>
                </section>
            </Sheet>
        </div>
    );
};

export default AdminPanelLayout;
