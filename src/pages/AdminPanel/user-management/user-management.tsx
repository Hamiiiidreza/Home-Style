import React, { useState } from 'react';
import { Users, FunnelPlus, Pencil, Trash2, RefreshCw, Ban } from 'lucide-react';
import CustomInput from '../../../components/ui/custom-input';
import CustomPagination from '../../../components/ui/custom-pagination';

const users = [
    { id: "۱۲۵۴۸۷", username: "ali_mohammadi", email: "ali.mohammadi@example.com", date: "۱۴۰۳/۰۲/۲۲", role: "مدیر" },
    { id: "۱۲۵۴۸۶", username: "sara_ahmadi", email: "sara.ahmadi@example.com", date: "۱۴۰۳/۰۲/۲۱", role: "کاربر" },
    { id: "۱۲۵۴۸۵", username: "reza_karimi", email: "reza.karimi@example.com", date: "۱۴۰۳/۰۲/۲۰", role: "کاربر" },
    { id: "۱۲۵۴۸۴", username: "mahta_rahimi", email: "mahta.rahimi@example.com", date: "۱۴۰۳/۰۲/۱۹", role: "کاربر" },
    { id: "۱۲۵۴۸۳", username: "hamed_naseri", email: "hamed.naseri@example.com", date: "۱۴۰۳/۰۲/۱۸", role: "کاربر" },
    { id: "۱۲۵۴۸۲", username: "paria_zarei", email: "paria.zarei@example.com", date: "۱۴۰۳/۰۲/۱۷", role: "کاربر" },
    { id: "۱۲۵۴۸۱", username: "mohsen_tavakoli", email: "mohsen.tavakoli@example.com", date: "۱۴۰۳/۰۲/۱۶", role: "کاربر" },
    { id: "۱۲۵۴۸۰", username: "neda_gholami", email: "neda.gholami@example.com", date: "۱۴۰۳/۰۲/۱۵", role: "کاربر" },
];

const UserManagement = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalProducts = 42;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    return (
        <section className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-start gap-3">
                    <div className="flex items-center justify-center size-9 rounded-md bg-neutral-01">
                        <Users className="text-secondary-color-blue" />
                    </div>
                    <h2 className="flex items-center text-2xl font-VazirBold text-neutral-07">
                        کاربران
                    </h2>
                </div>
                <p className="font-VazirRegular text-sm text-gray-500 mt-2">
                    لیست و مدیریت کابران فروشگاه را مشاهده و کنترل کنید.
                </p>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                    <CustomInput
                        type="text"
                        placeholder="جستجو بر اساس نام کاربری یا ایمیل..."
                        inputClassName="h-10 w-full rounded-md border bg-white px-4 font-VazirRegular text-sm outline-none transition-all placeholder:text-neutral-04 focus:border-neutral-04 sm:w-80 pl-10"
                    />
                    <button className="flex items-center justify-center gap-2 border px-4 h-10 font-VazirRegular rounded-md cursor-pointer transition-all hover:bg-main hover:text-white">
                        <FunnelPlus size={16} />
                        فیلتر
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-md shadow-sm border overflow-x-auto">
                <table className="w-full text-center border rounded-md overflow-hidden">
                    <thead className="bg-gray-50 border-b">
                        <tr className="bg-gray-50 text-neutral-07 font-VazirMedium text-xs border-b border-gray-100">
                            <th className="p-4">شناسه</th>
                            <th className="p-4">نام کاربری</th>
                            <th className="p-4">ایمیل</th>
                            <th className="p-4">تاریخ</th>
                            <th className="p-4">نقش</th>
                            <th className="p-4">عملیات</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border rounded-md shadow-sm overflow-hidden mt-1 border-gray-50 hover:bg-gray-50 transition-colors"
                            >
                                <td className="p-4 font-VazirMedium text-xs">{user.id}</td>

                                <td className="p-4 font-VazirMedium text-base">
                                    {user.username}
                                </td>

                                <td className="p-4 text-xs text-gray-600 font-VazirMedium">
                                    {user.email}
                                </td>

                                <td className="p-4 text-sm text-gray-600 font-VazirMedium">
                                    {user.date}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`flex items-center justify-center py-2 px-3 rounded-md text-xs font-VazirMedium ${user.role === "مدیر"
                                            ? "bg-orange-50 text-orange-600"
                                            : "bg-[#F3F6FC] text-secondary-color-blue"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>

                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-6">

                                        <div className="flex flex-col items-center cursor-pointer text-secondary-color-blue transition-all hover:text-gray-600">
                                            <Pencil size={18} />  
                                        </div>

                                        <div className="flex flex-col items-center cursor-pointer text-secondary-color-blue transition-all hover:text-gray-600">
                                            <RefreshCw size={18} />
                                        </div>

                                        <div className="flex flex-col items-center cursor-pointer text-red-700 transition-all hover:text-gray-600">
                                            <Trash2 size={18} />
                                        </div>

                                        <div className="flex flex-col items-center cursor-pointer text-red-700 transition-all hover:text-gray-600">
                                            <Ban size={18} />
                                        </div>

                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                totalItems={totalProducts}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                label="کاربر"
            />
        </section>
    );
};

export default UserManagement;

