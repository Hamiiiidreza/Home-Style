import { FC } from "react";
import { Star } from "lucide-react";
import CustomInput from "../../ui/custom-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";

const Comments: FC = () => {
    return (
        <>
            <h2 className="text-xl font-semibold">نظر شما</h2>

            <div className="relative w-full mt-4">
                <CustomInput
                    placeholder="نظر خود را بنویسید"
                    inputClassName="w-full h-20 border rounded-xl p-4 pr-4 pl-40 outline-none focus:border-blue-500"
                />

                <div className="absolute left-3 bottom-5 flex items-center gap-3">
                    <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i: number) => (
                            <Star key={i} className="w-4" />
                        ))}
                    </div>

                    <button className="bg-black text-white px-6 py-2 rounded-2xl cursor-pointer">
                        ثبت نظر
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mt-12 mb-6">
                <h2 className="text-xl font-bold">
                    نظرات کاربران (11 نظر)
                </h2>

                <Select defaultValue="newest">
                    <SelectTrigger
                        className="w-[160px] font-VazirRegular text-base text-black-900 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-right"
                        dir="rtl"
                    >
                        <SelectValue placeholder="مرتب سازی" />
                    </SelectTrigger>

                    <SelectContent position="popper">
                        <SelectItem value="newest" className="font-VazirRegular">
                            جدیدترین
                        </SelectItem>
                        <SelectItem value="oldest" className="font-VazirRegular">
                            قدیمی‌ترین
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {Array.from({ length: 3 }).map((_, idx: number) => (
                <div
                    key={idx}
                    className="bg-white shadow-sm rounded-xl p-5 mb-4 border transition-all hover:drop-shadow-custom"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src="/Images/avatar_1.svg"
                            alt=""
                            className="w-12 h-12 bg-gray-300 rounded-full"
                        />

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-center gap-2">
                                <p className="font-VazirBold text-base inline-block">کاربر</p>
                                <span className="font-VazirRegular text-gray-500 text-sm">
                                    حدود ۲ ساعت پیش
                                </span>
                            </div>

                            <div className="flex gap-1 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i: number) => (
                                    <Star key={i} className="w-4" />
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="mt-3 text-gray-600 leading-7">
                        سه هفته پیش این محصول را خریدم و حالا برگشتم تا بگویم واقعا محصول
                        فوق‌العاده‌ای است. از استفاده از آن خیلی لذت می‌برم و کیفیت آن کاملاً
                        رضایت‌بخش است.
                    </p>
                </div>
            ))}
        </>
    );
};

export default Comments;

