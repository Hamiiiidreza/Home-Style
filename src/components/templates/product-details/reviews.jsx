import React, { useState, useCallback } from 'react';
import CustomRating from '../../ui/custom-rating';
import Comments from './Comments';
import ButtonCard from '../../ui/button-card';

const REVIEWS_DATA = [
    {
        id: 1,
        name: "Sofia Harvetz",
        avatar: "/Images/avatar_1.svg",
        rating: 5,
        comment: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
        time: "about 1 hour ago"
    },
    {
        id: 2,
        name: "Nicolas Jensen",
        avatar: "/Images/avatar_2.svg",
        rating: 5,
        comment: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
        time: "about 1 hour ago"
    },
    {
        id: 3,
        name: "Nicolas Jensen",
        avatar: "/Images/avatar_3.svg",
        rating: 5,
        comment: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
        time: "about 1 hour ago"
    },
    {
        id: 4,
        name: "Nicolas Jensen",
        avatar: "/Images/avatar_4.svg",
        rating: 5,
        comment: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
        time: "about 1 hour ago"
    },
    {
        id: 5,
        name: "Nicolas Jensen",
        avatar: "/Images/avatar_5.svg",
        rating: 5,
        comment: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
        time: "about 1 hour ago"
    },
];

function Reviews({ product, reviews }) {
    const [rating, setRating] = useState(4);

    const handleRating = useCallback((rate) => {
        setRating(rate);
    }, []);

    const ReviewInput = () => (
        <div className="flex flex-col w-full items-end justify-center gap-10">
            <form className="flex w-full items-center justify-between pl-6 pr-4 py-4 h-18 relative bg-white rounded-2xl border-2 border-neutral-03 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <input
                    type="text"
                    placeholder="Share your thoughts"
                    className="relative w-fit font-InterMedium text-neutral-05 text-base tracking-normal leading-relaxed bg-transparent border-0 outline-0 flex-1 transition-all hover:drop-shadow-custom"
                    aria-label="Write your review"
                />
                <div className="inline-flex items-center justify-center gap-4">
                    <button type="button" className="relative w-6 h-6" aria-label="Add emoji">
                        <img
                            className="absolute top-0.5 left-0.5 w-5 h-5 text-blue-500"
                            src="/Images/Emoji.svg"
                            alt="Emoji"
                        />
                    </button>
                    <button
                        type="submit"
                        className="box-border inline-flex items-center justify-center gap-2 max-sm:px-0 px-10 max-sm:h-10 h-10 max-sm:w-10 w-44 bg-neutral-07 rounded-full transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    >
                        <div className="max-sm:hidden text-white font-InterMedium text-base text-center tracking-button-s leading-7 whitespace-nowrap transition-all hover:drop-shadow-custom">
                            Write Review
                        </div>
                        <img
                            src="/Images/arrow-right-2.svg"
                            alt="Send"
                            className="hidden max-sm:block"
                        />
                    </button>
                </div>
            </form>
        </div>
    );

    return (
        <section className="flex flex-col items-start gap-12 bg-white w-full px-4 py-12">
            {/* Reviews Header */}
            <div className="relative w-full">
                <div className="flex flex-col mb-8 items-center justify-center gap-6">
                    <h2 className="self-stretch font-PoppinsMedium text-[#23262F] text-2xl tracking-headline-6 leading-[34px] transition-all hover:drop-shadow-custom">
                        Customer Reviews
                    </h2>
                    <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 relative -mt-2" role="img" aria-label="4 out of 5 stars">
                                <CustomRating
                                    initialValue={rating}
                                    onRatingChange={handleRating}
                                    size={20}
                                    SVGstyle={{ display: "inline-block" }}
                                    className='transition-all hover:drop-shadow-custom'
                                />
                            </div>
                            <div className="font-InterRegular text-xs text-neutral-07 tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                11 Reviews
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-InterRegular text-base text-gray-600 tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                                Be the first to review
                            </p>
                            <div className="font-InterSemiBold text-base text-[#23262F] tracking-[0] leading-[26px] whitespace-nowrap transition-all hover:drop-shadow-custom">
                                {product?.name || 'Tray Table'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10 w-full items-end justify-center">
                    <ReviewInput />
                </div>
            </div>

            {/* Reviews List */}
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-4">
                    <h3 className="font-PoppinsMedium text-black text-2xl tracking-headline-6 leading-[34px] relative w-fit whitespace-nowrap transition-all hover:drop-shadow-custom">
                        11 Reviews
                    </h3>
                    <div className="flex w-64 items-center justify-between relative rounded-lg overflow-hidden border-2 border-gray-300 transition-all hover:shadow-md max-sm:w-full">
                        <select
                            className="flex-1 cursor-pointer font-InterSemiBold text-neutral-07 text-base tracking-[0] leading-[26px] bg-transparent border-0 outline-0 appearance-none pl-4 pr-10 py-3"
                            aria-label="Sort reviews"
                        >
                            <option className="p-2" value="newest">Newest</option>
                            <option className="p-2" value="oldest">Oldest</option>
                            <option className="p-2" value="highest">Highest Rated</option>
                            <option className="p-2" value="lowest">Lowest Rated</option>
                        </select>
                        <img
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                            src="/Images/arrow-down.svg"
                            alt="Dropdown arrow"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 relative w-full">
                    {REVIEWS_DATA.map((review) => (
                        <Comments key={review.id} review={review} />
                    ))}

                    <ButtonCard
                        title="Load more"
                        className="font-InterMedium text-neutral-07 text-base text-center leading-7 tracking-button-s whitespace-nowrap box-border inline-flex items-center justify-center gap-2 px-10 py-1.5 rounded-full border border-neutral-07 transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Reviews;
