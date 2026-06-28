import React, { useState, useEffect } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import CustomInput from "../../../components/ui/custom-input";
import { ProductDetail } from "../../../types/productDetail.types";

type ProductFeaturesProps = {
    value: ProductDetail[];               // لیست ویژگی‌ها از والد
    onChange: (details: ProductDetail[]) => void;  // ارسال تغییرات به والد
};

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ value, onChange }) => {
    const [detailTitle, setDetailTitle] = useState("");
    const [detailValue, setDetailValue] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [details, setDetails] = useState<ProductDetail[]>(value || []);

    // اگر مقدار از بیرون تغییر کرد (مثلاً از API لود شد)
    useEffect(() => {
        setDetails(value || []);
    }, [value]);

    // هر بار لیست تغییر کرد، به والد اطلاع بده
    useEffect(() => {
        onChange(details);
    }, [details]);

    const addOrUpdateDetail = () => {
        if (!detailTitle.trim() || !detailValue.trim()) return;

        if (editingId !== null) {
            setDetails((prev) =>
                prev.map((item) =>
                    item.id === editingId
                        ? { ...item, title: detailTitle, value: detailValue }
                        : item
                )
            );
            setEditingId(null);
        } else {
            const newDetail: ProductDetail = {
                id: Date.now(),
                title: detailTitle,
                value: detailValue,
            };
            setDetails((prev) => [...prev, newDetail]);
        }

        setDetailTitle("");
        setDetailValue("");
    };

    const removeDetail = (id: number) => {
        setDetails((prev) => prev.filter((item) => item.id !== id));
    };

    const editDetail = (item: ProductDetail) => {
        setEditingId(item.id);
        setDetailTitle(item.title);
        setDetailValue(item.value);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setDetailTitle("");
        setDetailValue("");
    };

    return (
        <div className="mt-10 p-6 bg-gray-50 rounded-md border transition-all hover:drop-shadow-custom">
            <h3 className="font-VazirBold text-gray-700 mb-4">
                ویژگی‌های محصول
            </h3>

            {/* Inputs */}
            <div className="flex gap-4 items-end flex-col md:flex-row">
                <div className="flex-1 w-full">
                    <CustomInput
                        label="عنوان ویژگی"
                        placeholder="مثال: رنگ"
                        value={detailTitle}
                        onChange={(e) => setDetailTitle(e.target.value)}
                        wrapperClassName="w-full"
                        inputClassName="w-full px-3 py-5.5 border rounded-md"
                        
                    />
                </div>

                <div className="flex-1 w-full">
                    <CustomInput
                        label="مقدار"
                        placeholder="مثال: طوسی"
                        value={detailValue}
                        onChange={(e) => setDetailValue(e.target.value)}
                        wrapperClassName="w-full"
                        inputClassName="w-full px-3 py-5.5 border rounded-md"
                    />
                </div>

                <button
                    type="button"
                    onClick={addOrUpdateDetail}
                    className="flex items-center justify-center w-20 bg-main text-white px-6 py-3 rounded-md hover:bg-main/90 transition-all cursor-pointer"
                >
                    {editingId !== null ? "ذخیره" : <Plus size={20} />}
                </button>

                {editingId !== null && (
                    <button
                        type="button"
                        onClick={cancelEdit}
                        className="flex items-center justify-center w-20 font-VazirBold bg-white text-neutral-07 border px-6 py-3 rounded-md hover:bg-main hover:text-white transition-all cursor-pointer"
                    >
                        انصراف
                    </button>
                )}
            </div>

            {/* List */}
            <div className="mt-6 space-y-3">
                {details.length > 0 ? (
                    details.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-white border rounded-md shadow-sm"
                        >
                            <div className="flex gap-2">
                                <span className="font-VazirBold text-sm text-gray-600">
                                    {item.title}:
                                </span>
                                <span className="font-VazirMedium text-sm text-gray-500">
                                    {item.value}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => editDetail(item)}
                                    className="text-secondary-color-blue text-sm cursor-pointer transition-all hover:text-gray-600"
                                >
                                    <Pencil size={16} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => removeDetail(item.id)}
                                    className="text-red-700 text-sm cursor-pointer transition-all hover:text-gray-600"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="font-VazirMedium text-sm text-gray-500">
                        هنوز ویژگی‌ای ثبت نشده است.
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductFeatures;
