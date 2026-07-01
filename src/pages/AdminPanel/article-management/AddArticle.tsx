import React, { useMemo, useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    Upload,
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    Image as ImageIcon,
    Link,
    AlignRight,
    FileText,
    Undo2,
    Redo2,
    HelpCircle,
    Settings,
    FolderOpen,
    User,
    Send,
} from "lucide-react";

import PageHierarchy from "../../../components/modules/Page-Hierarchy/page-hierarchy";
import CustomInput from "../../../components/ui/custom-input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

const AddArticle: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        category: "",
        author: "",
    });

    const wordCount = useMemo(() => {
        if (!formData.content.trim()) return 0;
        return formData.content.trim().split(/\s+/).length;
    }, [formData.content]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div
            className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom"
            dir="rtl"
        >
            {/* Header */}
            <div className="flex flex-col mb-8">
                <h1 className="flex items-center text-2xl font-VazirBold text-neutral-07">
                    افزودن مقاله جدید
                </h1>

                <div className="flex items-center">
                    <PageHierarchy
                        items={["مدیریت و بررسی مقالات", "افزودن مقاله جدید"]}
                    />

                    <button className="flex items-center gap-2 px-6 py-2 bg-white border border-main rounded-md text-gray-700 hover:bg-main hover:text-white transition-all shadow-sm cursor-pointer">
                        <ChevronLeft size={16} />
                        بازگشت
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-8 items-start bg-white rounded-2xl p-6 shadow-sm border max-w-5xl mx-auto">
                {/* RIGHT COLUMN */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    {/* Article Title */}
                    <CustomInput
                        label="عنوان مقاله *"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="عنوان مقاله را وارد کنید..."
                        wrapperClassName="w-full"
                        inputClassName="w-full px-3 py-5 border rounded-xl text-sm"
                    />

                    {/* Editor */}
                    <div>
                        <label className="block text-xs font-bold text-neutral-07 mb-2">
                            محتوای مقاله <span className="text-red-500">*</span>
                        </label>

                        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                            {/* Toolbar */}
                            <div className="flex flex-wrap items-center justify-between p-2.5 bg-gray-50 border-b border-gray-150">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <Underline className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <Italic className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <Bold className="w-4 h-4" />
                                    </button>

                                    <div className="w-px h-4 bg-gray-300 mx-1"></div>

                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <HelpCircle className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <ImageIcon className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <Link className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <Settings className="w-4 h-4" />
                                    </button>

                                    <div className="w-px h-4 bg-gray-300 mx-1"></div>

                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <ListOrdered className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <List className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600">
                                        <AlignRight className="w-4 h-4" />
                                    </button>

                                    <div className="w-px h-4 bg-gray-300 mx-1"></div>

                                    <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-white border border-gray-200 px-2.5 py-1 rounded-md cursor-pointer hover:bg-gray-50">
                                        <span>Normal</span>
                                        <ChevronDown className="w-3 h-3 text-gray-400" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400">
                                        <Undo2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400">
                                        <Redo2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Textarea */}
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="متن مقاله را بنویسید..."
                                className="w-full h-40 p-4 bg-transparent outline-none resize-none text-sm text-gray-700 leading-7 placeholder-gray-300"
                            />

                            {/* Word Count */}
                            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 text-[10px] text-gray-400 text-left">
                                تعداد کلمات: {wordCount}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="space-y-2">
                        <label className="block text-xs font-bold text-neutral-07">
                            تصویر شاخص
                        </label>
                        <p className="text-[10px] text-gray-400">
                            تصویری که به عنوان نمای اصلی مقاله نمایش داده می‌شود.
                        </p>

                        <div className="bg-white border rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-secondary-color-blue transition-colors group">
                            <div className="w-12 h-12 bg-neutral-01 rounded-full flex items-center justify-center text-secondary-color-blue mb-4 group-hover:scale-105 transition-transform">
                                <Upload className="size-5" />
                            </div>
                            <p className="text-xs font-bold text-gray-800 mb-2">
                                برای آپلود تصویر کلیک کنید یا تصویر را بکشید و رها کنید
                            </p>
                            <p className="text-[10px] text-gray-400">
                                فرمت‌های مجاز: JPG, PNG - حداکثر اندازه: 10MB - نسبت پیشنهادی: 16:9
                            </p>
                        </div>
                    </div>
                </div>

                {/* LEFT SIDEBAR */}
                <div className="col-span-12 lg:col-span-4 h-full bg-white border border-gray-200 rounded-2xl p-5 space-y-6 flex flex-col justify-between shadow-sm min-h-[500px]">
                    <div className="space-y-6">

                        {/* Category */}
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-gray-800">
                                <FolderOpen className="size-4 text-secondary-color-blue" />
                                <span className="text-xs font-VazirBold">
                                    دسته‌بندی
                                </span>
                            </div>

                            <Select
                                dir='rtl'
                                value={formData.category}
                                onValueChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        category: value,
                                    }))
                                }
                            >
                                <SelectTrigger className="w-full h-[38px] text-xs border focus:ring-0 focus:border-secondary-color-blue">
                                    <SelectValue placeholder="انتخاب دسته‌بندی" />
                                </SelectTrigger>

                                <SelectContent className="text-right">
                                    <SelectItem value="tech">تکنولوژی</SelectItem>
                                    <SelectItem value="design">طراحی</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Author */}
                        <CustomInput
                            label="نویسنده"
                            labelIcon={<User className="size-4 text-secondary-color-blue" />}
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder="نام نویسنده را وارد کنید..."
                            wrapperClassName="w-full space-y-2.5"
                            labelClassName="text-xs font-bold text-gray-800"
                            inputClassName="w-full px-3 py-2.5 bg-white border border rounded-lg text-xs outline-none focus:border-[#9A6B3D]"
                        />
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-gray-100 flex justify-between">

                        <button className="px-6 py-3 bg-main hover:bg-main/90 text-white rounded-md text-xs font-VazirBold transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                            <Send size={16} />
                            انتشار
                        </button>

                        <button className="px-4 py-2 bg-white border text-gray-600 rounded-md text-xs font-VazirBold transition-colors hover:bg-main hover:text-white flex items-center justify-center gap-1.5 cursor-pointer">
                            <FileText size={16} />
                            پیش‌نویس
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddArticle;



