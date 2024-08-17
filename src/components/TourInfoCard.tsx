import React from "react";

interface TourInfoProps {
    title: string;
    rating: number;
    reviewsCount: number;
    bookedCount: string;
    isBestseller: boolean;
    isFreeCancellation: boolean;
}

const TourInfo: React.FC<TourInfoProps> = ({
    title,
    rating,
    reviewsCount,
    bookedCount,
    isBestseller,
    isFreeCancellation,
}) => {
    return (
        <div className="space-y-2 flex flex-col gap-4 mx-32">
            {/* Labels */}
            <div className="flex space-x-2">
                {isBestseller && (
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                        Bestseller
                    </span>
                )}
                {isFreeCancellation && (
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        Free cancellation
                    </span>
                )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 line-clamp-2 w-2/3">
                {title}
            </h1>

            {/* Rating and Booking Info */}
            <div className="flex items-center space-x-2 text-gray-600">
                <span>{rating}</span>
                <span>({reviewsCount})</span>
                <span>•</span>
                <span>{bookedCount} booked</span>
            </div>

            {/* Share and Wishlist */}
            <div className="flex space-x-4 text-blue-800 font-medium self-end">
                <span className="cursor-pointer">Share</span>
                <span className="cursor-pointer">Wishlist</span>
            </div>
        </div>
    );
};

export default TourInfo;
