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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-5 border-b">
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
                                <label className="block font-VazirMedium text-sm mb-2 text-neutral-07">
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
                                                className={`w-full px-3 py-5.5 border rounded-md flex flex-row-reverse ${errors.category ? "border-red-500" : ""
                                                    }`}
                                            >
                                                <SelectValue placeholder="انتخاب دسته‌بندی" />
                                            </SelectTrigger>

                                            <SelectContent className='font-VazirMedium text-sm' dir="rtl">
                                                <SelectItem value="necklace">اتاق نشیمن</SelectItem>
                                                <SelectItem value="bracelet">اتاق خواب</SelectItem>
                                                <SelectItem value="earring">آشپزخانه</SelectItem>
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
                            <label className="block font-VazirMedium text-sm mb-2 text-neutral-07">
                                تصویر محصول
                            </label>

                            <div className="border-2 border-dashed border-gray-200 rounded-md p-8 bg-[#F3F6FC] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all min-h-[250px]">
                                <Camera className="text-gray-400" size={32} />
                                <p className="text-sm font-VazirBold text-gray-800 mt-4">
                                    برای آپلود تصویر کلیک کنید
                                </p>
                                <p className="text-sm font-VazirMedium font-base text-gray-500 mt-4">
                                    یا تصویر را بکشید و رها کنید
                                </p>
                                <p className="text-sm font-VazirMedium font-base text-gray-500 mt-4">
                                    فرمت های مجاز: PNG, JPG
                                </p>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="aspect-square border border-gray-200 rounded-md flex items-center justify-center bg-[#F3F6FC] border-dashed cursor-pointer hover:border-secondary-color-blue transition-all"
                                    >
                                        <Plus size={20} className="text-main" />
                                    </div>
                                ))}
                            </div>
                            <p className="flex justify-center font-VazirMedium text-sm text-gray-400 mt-4">تصویر اصلی در نتایج و صفحه محصول نمایش داده خواهد شد.</p>
                        </div>
                    </div>

                    {/* Discount */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">

                        <div>
                            <CustomInput
                                placeholder="مثال: ۲۰"
                                digits="fa"
                                dir="rtl"
                                register={register("discount")}
                                readOnly={!hasDiscount}
                                leftElement={<span>%</span>}
                                wrapperClassName="w-full"
                                inputClassName={`w-full font-vazirMedium px-3 py-5.5 border rounded-md ${!hasDiscount
                                    ? "opacity-50"
                                    : ""
                                    } ${errors.discount ? "border-red-500" : "border-gray-200"}`}
                            />

                            {errors.discount && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.discount.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="font-VazirRegular text-sm">تخفیف دارد؟</span>

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...register("hasDiscount")}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 rounded-full 
                                               peer-checked:bg-main transition-colors
                                               after:content-[''] after:absolute after:top-0.5 after:right-[2px]
                                               after:bg-white after:border after:rounded-full after:h-5 after:w-5
                                               after:transition-all peer-checked:after:-translate-x-5">
                                </div>
                            </label>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="mt-8 relative">
                        <label className="block font-VazirMedium text-sm mb-2 text-neutral-07">
                            توضیحات محصول
                        </label>

                        <textarea
                            {...register("description")}
                            rows={5}
                            maxLength={500}
                            placeholder="توضیحات محصول را وارد کنید..."
                            className="w-full p-4 bg-white border border-gray-200 rounded-md outline-none resize-none"
                        />

                        <span className="absolute bottom-4 left-4 text-[10px] text-gray-400">
                            ۵۰۰ / {description.length}
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-10 mt-12">
                        <button
                            type="submit"
                            className="w-40 font-VazirBold py-3 bg-main text-white rounded-md font-bold hover:bg-main/90 transition-all shadow-md cursor-pointer"
                        >
                            ثبت محصول
                        </button>

                        <button
                            type="button"
                            className="w-40 font-VazirBold py-3 bg-white text-neutral-07 border rounded-md font-bold hover:bg-main hover:text-white transition-all shadow-md cursor-pointer"
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


