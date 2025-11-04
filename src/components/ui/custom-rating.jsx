// components/CustomRating.jsx
import React from 'react';
import { Rating } from 'react-simple-star-rating';

const CustomRating = ({
    initialValue = 0,
    onRatingChange,
    readonly = false,
    size = 20,
    showValue = false,
    className = "",
    ...props
}) => {
    return (
        <div className={`inline-flex items-center gap-2 ${className}`}>
            <div
                className="flex items-center gap-1 relative"
                role="img"
                aria-label={`${initialValue} out of 5 stars`}
            >
                <Rating
                    initialValue={initialValue}
                    onClick={onRatingChange}
                    readonly={readonly}
                    size={size}
                    fillColor="black"
                    allowFraction={false}
                    {...props}
                />
            </div>
            {showValue && (
                <span className="text-sm text-gray-600">
                    {initialValue}/5
                </span>
            )}
        </div>
    );
};

export default CustomRating;