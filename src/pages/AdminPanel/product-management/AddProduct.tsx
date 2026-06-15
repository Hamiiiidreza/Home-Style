import React, { useState } from 'react';
import { Camera, ChevronLeft, Plus, ChevronDown } from 'lucide-react';
import PageHierarchy from '../../../components/modules/Page-Hierarchy/page-hierarchy';
import CustomInput from '../../../components/ui/custom-input'; 

const AddProduct = () => {
    const [description, setDescription] = useState("");
    const [hasDiscount, setHasDiscount] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        discount: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom">

            {/* Header */}
            <div className='flex flex-col mb-8'>
                <h1 className="flex items-center text-2xl font-VazirBold text-neutral-07">
                    افزودن محصول جدید
                </h1>
                <div className="flex items-center">
                    <PageHierarchy items={["مدیریت و بررسی محصولات", "افزودن محصول جدید"]} />
                    <button className="flex items-center gap-2 px-6 py-2 bg-white border border-main rounded-md text-gray-700 hover:bg-main hover:text-white transition-all shadow-sm cursor-pointer">
                        <ChevronLeft size={16} />
                        بازگشت
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm border  max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* ✅ Right Column */}
                    <div className="space-y-6 order-2 lg:order-1">

                        {/* Product Name */}
                        <CustomInput
                            label="نام محصول *"
                            name="name"
                            value={formData.name}
                            placeholder="نام محصول را وارد کنید"
                            onChange={handleChange}
                            wrapperClassName="w-full"
                            inputClassName="w-full px-3 py-5.5 bg-white border rounded-md outline-none font-VazirRegular text-sm"
                        />

                        {/* Category (چون select هست فعلاً همون قبلی می‌مونه) */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                دسته‌بندی *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={(e) =>
                                    setFormData({ ...formData, category: e.target.value })
                                }
                                className="w-full p-3 bg-[#f9f9f9] border border-gray-200 rounded-xl appearance-none focus:ring-2 focus:ring-[#b08953]/20 focus:border-[#b08953] outline-none transition-all text-sm text-gray-500"
                            >
                                <option value="">انتخاب دسته‌بندی</option>
                                <option value="necklace">گردنبند</option>
                                <option value="bracelet">دستبند</option>
                                <option value="earring">گوشواره</option>
                            </select>
                            <ChevronDown className="absolute left-3 top-[42px] text-gray-400" size={18} />
                        </div>

                        {/* Price */}
                        <CustomInput
                            label="قیمت (تومان) *"
                            name="price"
                            value={formData.price}
                            placeholder="قیمت محصول را وارد کنید"
                            onChange={handleChange}
                            digits="fa"
                            dir="rtl"
                            leftElement={<span className="font-VazirRegular text-sm">تومان</span>}
                            wrapperClassName="w-full"
                            inputClassName="w-full px-3 py-5.5 bg-white border rounded-md outline-none font-VazirRegular text-sm"
                        />
                    </div>

                    {/* ✅ Left Column - Image Upload (بدون تغییر) */}
                    <div className="order-1 lg:order-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            تصویر محصول
                        </label>

                        <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 bg-[#fdfbf7] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all min-h-[250px]">
                            <Camera className="text-gray-400" size={32} />
                            <p className="text-sm font-bold text-gray-800 mt-4">
                                برای آپلود تصویر کلیک کنید
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="aspect-square border border-gray-200 rounded-xl flex items-center justify-center bg-[#f9f9f9] border-dashed cursor-pointer hover:border-[#b08953] transition-all"
                                >
                                    <Plus size={20} className="text-gray-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ Discount Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">

                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-700">
                            تخفیف دارد؟
                        </span>

                        <input
                            type="checkbox"
                            checked={hasDiscount}
                            onChange={() => setHasDiscount(!hasDiscount)}
                        />
                    </div>

                    <CustomInput
                        name="discount"
                        placeholder="مثال: ۲۰"
                        value={formData.discount}
                        onChange={handleChange}
                        digits="fa"
                        dir="rtl"
                        readOnly={!hasDiscount}
                        leftElement={<span>%</span>}
                        wrapperClassName="w-full"
                        inputClassName={`w-full p-3 bg-[#f9f9f9] border border-gray-200 rounded-xl outline-none transition-all text-sm ${!hasDiscount
                                ? "opacity-50"
                                : "focus:ring-2 focus:ring-[#b08953]/20 focus:border-[#b08953]"
                            }`}
                    />
                </div>

                {/* ✅ Description */}
                <div className="mt-8 relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        توضیحات محصول
                    </label>
                    <textarea
                        rows={5}
                        maxLength={500}
                        placeholder="توضیحات محصول را وارد کنید..."
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-4 bg-[#f9f9f9] border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#b08953]/20 focus:border-[#b08953] outline-none transition-all text-sm resize-none"
                    />
                    <span className="absolute bottom-4 right-4 text-[10px] text-gray-400">
                        {description.length} / ۵۰۰
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-12">
                    <button className="flex-1 py-3 bg-[#b08953] text-white rounded-xl font-bold hover:bg-[#967344] transition-all shadow-md shadow-[#b08953]/20">
                        ثبت محصول
                    </button>
                    <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-all">
                        انصراف
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;


