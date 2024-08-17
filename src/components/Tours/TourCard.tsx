
import Image from 'next/image';
import React from 'react';

type TourCardProps = {
    image: string;
    location: string;
    title: string;
    rating: number;
    reviews: number;
    days: number;
    price: number;
};

const TourCard: React.FC<TourCardProps> = ({
    image,
    location,
    title,
    rating,
    reviews,
    days,
    price,
}) => {
    return (
        <div className="border rounded-lg w-[300px] h-[412.31px] p-4 shadow-lg">
            <Image src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" width={256} height={160} />
            <div className="p-4 ">
                <p className="text-gray-600 text-sm">{location}</p>
                <h3 className="font-bold text-[15.6px] my-2 text-wrap">{title}</h3>
                <p className="flex items-center text-sm text-gray-500">
                    {rating} ({reviews})
                </p>
                <div className="flex justify-between items-center my-2 text-sm text-gray-600">
                    <span>{days} days</span>
                    <span>
                        From <span className="font-bold">${price}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TourCard;
