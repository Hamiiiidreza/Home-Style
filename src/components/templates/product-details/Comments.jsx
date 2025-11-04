import React from 'react';
import CustomRating from '../../ui/custom-rating';

const Comments = ({ review }) => (
    <div className="flex w-full items-start gap-10 pt-0 pb-6 px-0 relative border-b border-solid border-neutral-03">
        <img
            className="relative size-18 rounded-full bg-cover bg-[50%_50%] transition-all hover:drop-shadow-custom"
            src={review.avatar}
            alt={`${review.name} profile picture`}
        />
        <div className="flex flex-col items-start gap-6 flex-1 grow">
            <div className="flex flex-col w-full items-start gap-4">
                <div className="flex flex-col w-full items-start gap-4">
                    <div className="inline-flex items-center justify-center gap-1 transition-all hover:drop-shadow-custom">
                        <div className="font-InterSemiBold text-neutral-07 text-xl tracking-[0] leading-8 whitespace-nowrap">
                            {review.name}
                        </div>
                    </div>
                    <div className="inline-flex items-start gap-0.5 -mt-2" aria-label={`${review.rating} out of 5 stars`}>
                        <CustomRating
                            initialValue={review.rating}
                            readonly
                            size={20}
                            SVGstyle={{ display: "inline-block" }}
                            className='transition-all hover:drop-shadow-custom'
                        />
                    </div>
                </div>
                <p className="w-full font-InterRegular text-[#353945] text-base tracking-[0] leading-[26px] transition-all hover:drop-shadow-custom">
                    {review.comment}
                </p>
            </div>
            <div className="flex gap-4 self-stretch w-full items-center">
                <time
                    className="font-InterRegular text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    dateTime="2023-01-01T12:00:00"
                >
                    {review.time}
                </time>
                <button className="font-InterSemiBold text-xs text-[#23262F] tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                    Like
                </button>
                <button className="font-InterSemiBold text-xs text-[#23262F] tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                    Reply
                </button>
            </div>
        </div>
    </div>
);

export default Comments;
