import React from 'react';

interface ItineraryItemProps {
    day: number;
    title: string;
    isFirst: boolean;
    isLast: boolean;
    description: string | undefined;
}

const ItineraryItem = ({ day, title, isFirst, isLast, description }: ItineraryItemProps) => (
    <div className="flex">
        <div className="flex flex-col items-center">
            <div className={` w-[30px] h-[34px] rounded-full ${isFirst || isLast ? 'bg-orange-500' : 'border-2 border-orange-500'}`} />
            {!isLast && <div className="w-0.5 h-full bg-orange-300 my-1" />}
        </div>
        <div className="ml-4 pb-8">
            <p className=" font-medium text-sm">{`Day ${day}: ${title}`}</p>
            {description || <p className="text-sm text-gray-600 font-normal mt-1">{description}</p>}
        </div>
    </div>
);

const TourItinerary = () => {
    const itineraryData = [
        { day: 1, title: 'Airport Pick Up', isFirst: true },
        { day: 2, title: 'Temples & River Cruise' },
        { day: 3, title: 'Massage & Overnight Train', description: 'Like on all of our trips, we can collect you from the airport when you land and take you directly to your hotel. The first Day is just a check-in Day so you have this freedom to explore the city and get settled in.' },
        { day: 4, title: 'Khao Sok National Park' },
        { day: 5, title: 'Travel to Koh Phangan' },
        { day: 6, title: 'Morning Chill & Muay Thai Lesson' },
        { day: 7, title: 'Island Boat Trip', isLast: true },
    ];

    return (
        <div className="max-w-md mx-32 py-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
            <div className="space-y-2">
                {itineraryData.map((item, index) => (
                    <ItineraryItem
                        key={item.day}
                        day={item.day}
                        title={item.title}
                        isFirst={index === 0}
                        isLast={index === itineraryData.length - 1}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default TourItinerary;