import React from 'react';
import TourCard from './TourCard';

type Tour = {
    image: string;
    location: string;
    title: string;
    rating: number;
    reviews: number;
    days: number;
    price: number;
};

type TourListProps = {
    tours: Array<Tour>;
};

const TourList: React.FC<TourListProps> = ({ tours }) => {
    return (
        <div className="mt-8">
            <h2 className="text-[29px] font-bold mb-6">You might also like ...</h2>
            <div className="overflow-x-auto whitespace-nowrap space-x-4 flex">
                {tours.map((tour, index) => (
                    <TourCard key={index} {...tour} />
                ))}
            </div>
        </div>
    );
};

export default TourList;
