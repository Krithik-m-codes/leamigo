import React from 'react';
import BookingPanel from './TourBookingPanel';
import WhatsIncluded from './TourWhatsIncluded';

const TourDetails = () => {
    const tourDetails: { [key: string]: string } = {
        'Duration': '8 hours',
        'Group Size': '35 people',
        'Ages': '18-99 yrs',
        'Languages': 'English, Japanese',
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6 " >
            {
                Object.keys(tourDetails).map((key, index) => (
                    <div key={index} className="flex gap-4">
                        <div className='h-10 w-10 border rounded'></div>
                        <div className="flex flex-col">
                            <span className=' font-normal text-sm' >{key}</span>
                            <span className='text-[#717171]' >{tourDetails[key]}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

const TourOverview = () => (
    <div className="mb-6 ">
        <h2 className="text-2xl font-bold my-6 mb-10">Tour Overview</h2>
        <p className='text-[#05073C] font-normal text-sm '>The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
            Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
            Maya Bay, immortalized in &quot;The Beach.&quot; Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
            and drop-off all included.</p>
    </div>
);

const TourHighlights = () => (
    <div className="mb-6">
        <h2 className="text-xl font-medium mb-4">Tour Highlights</h2>
        <ul className="list-disc list-inside flex flex-col gap-2 pl-3">
            <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
            <li>Be amazed by the variety of marine life in the archepelago</li>
            <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
            <li>Feel the comfort of a tour limited to 35 passengers</li>
            <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
        </ul>
    </div>
);


const TourBookingPage = () => (
    <div className="mx-32 py-5 text-[#05073C]">
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3 flex flex-col gap-5 ">
                <TourDetails />
                <TourOverview />
                <TourHighlights />
                <div className='h-[1px] w-full bg-gray-300'></div>
                <WhatsIncluded />
            </div>
            <div className="lg:w-1/3">
                <BookingPanel />
            </div>
        </div>
    </div>
);

export default TourBookingPage;