import { FC, useState } from "react";
import { Heart, Share2 } from "lucide-react";

const Details: FC = () => {
    const [selectedColor, setSelectedColor] = useState<"black" | "red">("black");

    return (
        <div className="w-full">

            <h1 className="text-2xl font-VazirBold mb-3">
                مبل 6 نفره ویکتوس 6
            </h1>

            <div className="flex items-center text-gray-500 gap-2 mb-4 font-VazirMedium">
                <span>10 دیدگاه</span>
            </div>

            <div className="mt-4">
                <p className="mb-2 font-VazirMedium">رنگ:</p>

                <div className="flex gap-3">

                    <div
                        className={`w-7 h-7 rounded-full cursor-pointer border ${selectedColor === "black" ? "ring-4 ring-black/20" : ""
                            }`}
                        style={{ background: "black" }}
                        onClick={() => setSelectedColor("black")}
                    />

                    <div
                        className={`w-7 h-7 rounded-full cursor-pointer border ${selectedColor === "red" ? "ring-4 ring-red-500/40" : ""
                            }`}
                        style={{ background: "red" }}
                        onClick={() => setSelectedColor("red")}
                    />

                </div>
            </div>

            <p className="text-gray-600 mt-6 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
                quas iusto culpa facere recusandae magnam! Inventore quaerat neque
                placeat fugiat praesentium obcaecati.
            </p>

            <div className="text-3xl font-VazirBold mt-6">
                ۱۲۳,۰۰۰ تومان
            </div>

            <button className="mt-6 bg-main text-white w-full py-3 rounded-lg transition-all hover:bg-main/90">
                افزودن به سبد خرید
            </button>

            <div className="flex gap-6 mt-6 text-gray-700">
                <Heart className="w-6 cursor-pointer" />
                <Share2 className="w-6 cursor-pointer" />
            </div>

        </div>
    );
};

export default Details;
