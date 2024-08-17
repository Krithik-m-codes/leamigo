import React from "react";
import Image from "next/image";

interface TourPlanCardProps {
    imageUrl: string;
    discount: number;
    title: string;
    rating: number;
    reviewsCount: number;
    description: string;
    duration: string;
    originalPrice: number;
    discountedPrice: number;
}

const TourPlanCard: React.FC<TourPlanCardProps> = ({
    imageUrl,
    discount,
    title,
    rating,
    reviewsCount,
    description,
    duration,
    originalPrice,
    discountedPrice,
}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 flex max-w-4xl mx-auto bg-white">
            <div className="relative flex-shrink-0">
                <Image src={imageUrl} alt={title} width={200} height={200} className="rounded-lg" />
                {discount > 0 && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {discount}% OFF
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-between pl-4 w-full gap-2 p-4 max-w-4xl mx-auto text-center">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <div className="flex items-center justify-center text-sm text-gray-600">
                    <span className="mr-1">{rating}</span>
                    <span className="mr-1">({reviewsCount})</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
                <div className="text-center w-full flex items-center justify-center gap-5" >
                    <p className="text-xs text-orange-600 font-semibold">
                        Best Price Guarantee
                    </p>
                    <p className="ml-2 text-xs text-orange-600 font-semibold">
                        Free Cancellation
                    </p>
                </div>
            </div>
            <div className="flex items-center flex-col justify-between mt-4 w-[16rem] min-h-full">
                <div className="flex items-center justify-between flex-col h-full text-gray-600">
                    <p className="text-sm text-gray-600">{duration}</p>
                    <div className="flex flex-col items-center" >
                        <span className="line-through text-sm">${originalPrice}</span>
                        <span className="text-base font-bold ml-2">
                            From ${discountedPrice}
                        </span>
                    </div>
                </div>
                <button className="mt-2 border border-orange-600 text-orange-600 rounded-lg px-4 py-2 text-sm font-semibold">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default TourPlanCard;
