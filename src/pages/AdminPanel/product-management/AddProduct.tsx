import React, { useState, ChangeEvent } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Camera, ChevronLeft, Plus } from "lucide-react";
import PageHierarchy from "../../../components/modules/Page-Hierarchy/page-hierarchy";
import CustomInput from "../../../components/ui/custom-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"

interface FormData {
    name: string;
    category: string;
    price: string;
    discount: string;
}

const productSchema = z
    .object({
        name: z
            .string()
            .min(3, { message: "نام محصول حداقل باید ۳ کاراکتر باشد" }),

        category: z
            .string({ message: "انتخاب دسته‌بندی الزامی است" })
            .min(1, { message: "انتخاب دسته‌بندی الزامی است" }),

        price: z
            .string()
            .min(1, { message: "قیمت محصول الزامی است" })
            .refine((val) => !isNaN(Number(val.replace(/,/g, ""))), {
                message: "قیمت باید عدد باشد",
            }),

        hasDiscount: z.boolean(),

        discount: z.string().optional(),

        description: z
            .string()
            .max(500, { message: "توضیحات حداکثر ۵۰۰ کاراکتر است" })
            .optional(),
    })
    .refine(
        (data) => {
            if (data.hasDiscount) {
                if (!data.discount || data.discount.trim() === "") return false;
                return !isNaN(Number(data.discount));
            }
            return true;
        },
        {
            message: "درصد تخفیف معتبر وارد کنید",
            path: ["discount"],
        }
    );

type ProductFormValues = z.infer<typeof productSchema>;

const AddProduct: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            category: "",
            price: "",
            hasDiscount: false,
            discount: "",
            description: "",
        },
    });


    const hasDiscount = watch("hasDiscount");
    const description = watch("description") || "";

    const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
        console.log("Product Data:", data);

        reset();
    };

    return (
        <div className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom">

            {/* Header */}
            <div className="flex flex-col mb-8">
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white rounded-2xl p-10 shadow-sm border max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Right Column */}
                        <div className="space-y-6 order-2 lg:order-1">
                            {/* Name */}
                            <div>
                                <CustomInput
                                    label="نام محصول *"
                                    placeholder="نام محصول را وارد کنید"
                                    register={register("name")}
                                    wrapperClassName="w-full"
                                    inputClassName={`w-full px-3 py-5.5 border rounded-md text-sm ${errors.name ? "border-red-500" : "border-gray-200"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm mb-2">
                                    دسته‌بندی *
                                </label>

                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger
                                                className={`w-full px-3 py-5.5 border rounded-md ${errors.category ? "border-red-500" : ""
                                                    }`}
                                            >
                                                <SelectValue placeholder="انتخاب دسته‌بندی" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="necklace">گردنبند</SelectItem>
                                                <SelectItem value="bracelet">دستبند</SelectItem>
                                                <SelectItem value="earring">گوشواره</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {errors.category && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>

                            {/* Price */}
                            <div>
                                <CustomInput
                                    label="قیمت (تومان) *"
                                    placeholder="قیمت محصول را وارد کنید"
                                    digits="fa"
                                    dir="rtl"
                                    register={register("price")}
                                    leftElement={<span>تومان</span>}
                                    wrapperClassName="w-full"
                                    inputClassName={`w-full px-3 py-5.5 border rounded-md ${errors.price ? "border-red-500" : "border-gray-200"
                                        }`}
                                />
                                {errors.price && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.price.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Image Upload */}
                        <div className="order-1 lg:order-2">
                            <label className="block text-sm mb-2">
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

                    {/* Discount */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
                        <div className="flex items-center gap-4">
                            <span className="text-sm">تخفیف دارد؟</span>

                            <input
                                type="checkbox"
                                {...register("hasDiscount")}
                            />
                        </div>

                        <div>
                            <CustomInput
                                placeholder="مثال: ۲۰"
                                digits="fa"
                                dir="rtl"
                                register={register("discount")}
                                readOnly={!hasDiscount}
                                leftElement={<span>%</span>}
                                wrapperClassName="w-full"
                                inputClassName={`w-full p-3 border rounded-xl ${!hasDiscount
                                    ? "opacity-50"
                                    : "focus:ring-2 focus:ring-[#b08953]/20 focus:border-[#b08953]"
                                    } ${errors.discount ? "border-red-500" : "border-gray-200"}`}
                            />

                            {errors.discount && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.discount.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-8 relative">
                        <label className="block text-sm mb-2">
                            توضیحات محصول
                        </label>

                        <textarea
                            {...register("description")}
                            rows={5}
                            maxLength={500}
                            placeholder="توضیحات محصول را وارد کنید..."
                            className="w-full p-4 bg-[#f9f9f9] border border-gray-200 rounded-2xl outline-none resize-none"
                        />

                        <span className="absolute bottom-4 right-4 text-[10px] text-gray-400">
                            {description.length} / ۵۰۰
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-12">
                        <button
                            type="submit"
                            className="flex-1 py-3 bg-[#b08953] text-white rounded-xl font-bold hover:bg-[#967344] transition-all shadow-md"
                        >
                            ثبت محصول
                        </button>

                        <button
                            type="button"
                            className="flex-1 py-3 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-all"
                        >
                            انصراف
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;


