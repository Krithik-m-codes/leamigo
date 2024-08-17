import React from 'react';

const RatingsTable = () => {
    return (
        <div className="mx-32 max-w-[850px] p-4 mt-16 shadow-sm bg-white">
            <h2 className="text-3xl font-semibold mb-6" >Customer Reviews</h2>
            <div className="flex h-[72px] justify-between items-center bg-[#eb662b1a] p-4 rounded-t-lg mb-1 ">
                <h3 className="text-lg font-semibold">Overall Rating</h3>
                <span className="text-lg font-semibold">5.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-b-lg">

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Amenities</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Food</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Price</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Rooms</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>

                <div className="flex h-[72px]  justify-between items-center bg-[#EB662B0A] p-4 ">
                    <h3 className="text-lg font-semibold">Tour Operator</h3>
                    <span className="text-lg font-semibold">Excellent 5.0</span>
                </div>
            </div>
        </div>
    );
};

export default RatingsTable;