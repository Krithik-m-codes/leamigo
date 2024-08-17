import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalResults: number;
    resultsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    totalResults,
    resultsPerPage,
}) => {
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Always display pages 1 to 4
        for (let i = 1; i <= 4; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    variant={i === currentPage ? "default" : "ghost"}
                    className={`mx-2 ${i === currentPage ? "bg-orange-500 text-white rounded-full" : "text-gray-800"
                        }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Button>
            );
        }

        // Add ellipsis if there are more than 5 pages
        if (totalPages > 5) {
            pageNumbers.push(
                <span key="ellipsis" className="mx-2 text-gray-600">
                    ...
                </span>
            );

            // Display the last page number
            pageNumbers.push(
                <Button
                    key={totalPages}
                    variant={totalPages === currentPage ? "default" : "ghost"}
                    className={`mx-2 ${totalPages === currentPage ? "bg-orange-500 text-white rounded-full" : "text-gray-800"
                        }`}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </Button>
            );
        }

        return pageNumbers;
    };

    const startResult = (currentPage - 1) * resultsPerPage + 1;
    const endResult = Math.min(currentPage * resultsPerPage, totalResults);

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    className="mx-1"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                {renderPageNumbers()}
                <Button
                    variant="ghost"
                    className="mx-1"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
            <div className="text-sm text-gray-600">
                Showing results {startResult}-{endResult} of {totalResults}
            </div>
        </div>
    );
};

export default Pagination;
