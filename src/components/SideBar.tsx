// src/components/FilterSidebar.jsx
"use client";
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { DatePickerWithRange } from './ui/datepicker';


const FilterSidebar = () => {
    const [dateRange, setDateRange] = useState(['', '']);
    return (
        <div className="w-72 lg:w-[24rem] lg:max-h-[850px] bg-white shadow-md rounded-lg">
            {/* Date Range Selector */}
            <div className="mb-6 h-52 bg-[#EB662B] p-6 flex justify-center items-center flex-col rounded-t-xl ">
                <label className="block text-lg font-semibold mb-2 text-center py-2 rounded-lg text-white">
                    When are you traveling?
                </label>
                <DatePickerWithRange
                    defaultValue={dateRange}
                    // ignore this error
                    onChange={(event: React.FormEvent<HTMLInputElement>) => setDateRange((event.currentTarget as HTMLInputElement).value as unknown as string[])}
                    className="w-full mt-2 text-center bg-white rounded-lg text-black md:text-lg xl:text-xl 2xl:text-2xl font-semibold"
                />
            </div>

            {/* Tour Type Filter */}
            <div className="mb-4 pl-6 pb-5">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Tour Type</h3>
                    <ul className='space-y-2 pl-2' >
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="nature">
                                Nature Tours
                            </label>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="adventure">
                                Adventure Tours
                            </label>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="cultural">
                                Cultural Tours
                            </label>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="">
                                Food Tours
                            </label>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="">
                                City Tours
                            </label>
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Checkbox />
                            <label htmlFor="">
                                Cruises Tours
                            </label>
                        </li>
                    </ul>
                    <button className="text-blue-500 text-sm mt-2">See More</button>
                </div>
                {/* Additional Filters */}
                <div className="space-y-4">
                    <div className='pt-3'>
                        <h3 className="text-lg font-semibold py-3 border-t">Filter Price</h3>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold py-3 border-t">Duration</h3>

                    </div>
                    <div>
                        <h3 className="text-lg font-semibold py-3 border-t">Language</h3>

                    </div>
                    <div>
                        <h3 className="text-lg font-semibold py-3 border-t">Rating</h3>

                    </div>
                    <div>
                        <h3 className="text-lg font-semibold py-3 border-t">Specials</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
