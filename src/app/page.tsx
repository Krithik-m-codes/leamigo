"use client";
import { useState } from "react";
import FilterSidebar from "@/components/SideBar";
import TourPlanCard from "@/components/TourPlanCard";
import Pagination from "@/components/Pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const totalResults = 1415;
  const resultsPerPage = 30;

  const tourPlans = [{
    imageUrl: "/assets/images/tour1.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  {
    imageUrl: "/assets/images/tour2.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  {
    imageUrl: "/assets/images/tour3.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  {
    imageUrl: "/assets/images/tour4.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  {
    imageUrl: "/assets/images/tour5.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  {
    imageUrl: "/assets/images/tour6.jpg",
    discount: 20,
    title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
    rating: 4.8,
    reviewsCount: 269,
    description: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
    duration: "2 Days 1 Nights",
    originalPrice: 1200,
    discountedPrice: 114
  },
  ];


  return (
    <main className='w-full min-h-screen max-h-max px-20 py-10'>
      {/* Navigation  */}
      <div className=' h-28 md:h-[118.13px] flex flex-col gap-4'>
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
        <div>
          <h1 className='text-4xl font-bold' >
            Explore all things to do in Phuket
          </h1>
        </div>
      </div>

      {/* Tours main content */}
      <div className='flex'>
        {/* Filter sidebar */}
        <FilterSidebar />
        {/* Tours list */}
        <div className='w-full'>
          <div className="flex justify-between items-center px-16 py-3 border-slate-500 text-black" >
            <p >1234 results</p>
            <p >Sort By
              <select className='bg-transparent border-none'>
                <option>Popularity</option>
                <option>Price</option>
                <option>Rating</option>
              </select>
            </ p>
          </div>
          <div className='flex flex-wrap flex-col gap-4 px-10 py-6'>
            {tourPlans.map((tourPlan, index) => (
              <TourPlanCard key={index} {...tourPlan} />
            ))}
          </div>
          {/* Pagination */}
          <div className='w-full flex items-center justify-center p-6'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
