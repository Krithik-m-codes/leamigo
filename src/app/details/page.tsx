"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TourInfo from "@/components/TourInfoCard";
import TourGalleryInfo from "@/components/TourGallery";
import TourBooking from "@/components/TourBooking";
import TourItinerary from "@/components/TourItinerary";
import LeaveAReply from "@/components/TourCommentForm";
import TourFAQ from "@/components/TourFAQ";
import RatingsTable from "@/components/Review/Ratings";
import ReviewsList from "@/components/Review/ReviewList";
import TourMap from "@/components/TourMap";
import TourList from "@/components/Tours/TourList";
export default function DetailsPage() {
    const [FromDate, setFromDate] = useState<Date | undefined>(undefined);
    const [ToDate, setToDate] = useState<Date | undefined>(undefined);


    const tours = [
        {
            image: '/assets/images/tours/centipede.jpg',
            location: 'Paris, France',
            title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
            rating: 4.8,
            reviews: 243,
            days: 4,
            price: 189.25,
        },
        {
            image: '/assets/images/tours/molokini.jpg',
            location: 'New York, USA',
            title: 'Molokini and Turtle Town Snorkeling Adventure Aboard',
            rating: 4.8,
            reviews: 243,
            days: 4,
            price: 225,
        },
        {
            image: '/assets/images/tours/westminster.jpg',
            location: 'London, UK',
            title: 'Westminster Walking Tour & Westminster Abbey Entry',
            rating: 4.8,
            reviews: 243,
            days: 4,
            price: 943,
        },
        {
            image: '/assets/images/tours/circle-island.jpg',
            location: 'New York, USA',
            title: 'All Inclusive Ultimate Circle Island Day Tour with Lunch',
            rating: 4.8,
            reviews: 243,
            days: 4,
            price: 771,
        },
        {
            image: '/assets/images/tours/centipede.jpg',
            location: 'Paris, France',
            title: 'Centipede Tour - Guided Arizona Desert Tour by ATV',
            rating: 4.8,
            reviews: 243,
            days: 4,
            price: 189.25,
        }
    ];


    return (
        <div className="w-full min-h-screen max-h-max px-20 py-10">
            {/* Navigation  */}
            <div className='h-28 md:h-[118.13px] mx-32 '>
                <div className='flex px-3 text-lg justify-between'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/tours'>Tours</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Phuket</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className="text-base">THE 10 BEST Phuket Tours & Excursions</p>
                </div>
            </div>

            {/* Tour Info */}
            <TourInfo
                title="Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour"
                rating={4.8}
                reviewsCount={269}
                bookedCount="30K+"
                isBestseller={true}
                isFreeCancellation={true}
            />

            {/* Tour Gallery */}

            <TourGalleryInfo />

            {/* Tour Booking */}
            <TourBooking />

            <div className=" h-0.5 bg-gray-100 mx-32" ></div>

            {/* Tour Itinerary */}
            <TourItinerary />

            {/* Tour map*/}
            <TourMap />

            <div className=" h-0.5 bg-gray-100 mx-32" ></div>

            {/* Availability Calender */}
            <div className="mx-32 mt-20 mb-10">
                <h2 className="text-[29px] font-bold mb-6">Availability Calendar</h2>
                <div className="bg-white flex rounded-lg ">
                    <Calendar
                        mode="single"
                        selected={FromDate}
                        onSelect={setFromDate}
                        className="rounded-md border border-r-0"
                        classNames={{
                            months: "flex flex-row space-x-4",
                            month: "space-y-4",
                            caption: "flex justify-center pt-1 relative items-center",
                            caption_label: "text-sm font-medium",
                            nav: "space-x-1 flex items-center",
                            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                            nav_button_previous: "absolute left-1",
                            nav_button_next: "absolute right-1",
                            table: "w-full border-collapse space-y-1",
                            head_row: "flex",
                            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                            row: "flex w-full mt-2",
                            cell: "text-center text-sm p-0 rounded-full relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                            day_selected: "bg-#FFC107 rounded-full text-primary-foreground hover:bg-#ff9c07 hover:text-primary-foreground focus:bg-[#ffb007] focus:text-primary-foreground",
                            day_today: "bg-#FFC107 rounded-full text-accent-foreground",
                            day_outside: "text-muted-foreground opacity-50",
                            day_disabled: "text-muted-foreground opacity-50",
                            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                            day_hidden: "invisible",
                        }}
                        components={{
                            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" {...props} />,
                            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" {...props} />,
                        }}
                    />
                    <Calendar
                        mode="single"
                        selected={ToDate}
                        onSelect={setToDate}
                        className="rounded-md border border-l-0"
                        classNames={{
                            months: "flex flex-row space-x-4",
                            month: "space-y-4",
                            caption: "flex justify-center pt-1 relative items-center",
                            caption_label: "text-sm font-medium",
                            nav: "space-x-1 flex items-center",
                            nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                            nav_button_previous: "absolute left-1",
                            nav_button_next: "absolute right-1",
                            table: "w-full border-collapse space-y-1",
                            head_row: "flex",
                            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                            row: "flex w-full mt-2",
                            cell: "text-center text-sm p-0 relative rounded-full [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                            day_selected: "bg-#FFC107 rounded-full text-primary-foreground hover:bg-#ff9c07 hover:text-primary-foreground focus:bg-[#ffb007] focus:text-primary-foreground",
                            day_today: "bg-#FFC107 rounded-full text-accent-foreground",
                            day_outside: "text-muted-foreground opacity-50",
                            day_disabled: "text-muted-foreground opacity-50",
                            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                            day_hidden: "invisible",
                        }}
                        components={{
                            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" {...props} />,
                            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" {...props} />,
                        }}
                    />
                </div>
            </div>

            <div className=" h-0.5 bg-gray-100 mx-32" ></div>

            {/* FAQ  */}
            <TourFAQ />

            <div className=" h-0.5 bg-gray-100 mx-32" ></div>

            {/* Reviews */}
            <RatingsTable />

            {/* Comments */}
            <ReviewsList />

            {/* Comment Form */}
            <LeaveAReply />

            {/* Similar Tours */}
            <div className="mx-32 mt-20">
                <TourList tours={tours} />
            </div>
        </div >
    );
};
