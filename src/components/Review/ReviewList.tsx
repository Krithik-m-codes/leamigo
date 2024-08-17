// src/components/ReviewsList.tsx
import { Button } from '../ui/button';
import ReviewCard from './ReviewCard';

const ReviewsList = () => {
    const reviews = [
        {
            id: 1,
            avatar: "/assets/svg/review-icon.svg",
            name: "Ali Tufan",
            date: "April 2023",
            title: "Take this tour! It's fantastic!",
            content: "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
            images: [
                "/assets/images/reviews/review1.jpg",
                "/assets/images/reviews/review2.jpg",
                "/assets/images/reviews/review3.jpg",
            ],
        },
        {
            id: 2,
            avatar: "/assets/svg/review-icon.svg",
            name: "Ali Tufan",
            date: "April 2023",
            title: "Take this tour! It's fantastic!",
            content: "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
            images: [
                "/assets/images/reviews/review1.jpg",
                "/assets/images/reviews/review2.jpg",
                "/assets/images/reviews/review3.jpg",
            ],
        },
        {
            id: 3,
            avatar: "/assets/svg/review-icon.svg",
            name: "Ali Tufan",
            date: "April 2023",
            title: "Take this tour! It's fantastic!",
            content: "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
            images: [
                "/assets/images/reviews/review1.jpg",
                "/assets/images/reviews/review2.jpg",
                "/assets/images/reviews/review3.jpg",
            ],
        },

    ];

    return (
        <div className="mx-32 mt-16 space-y-6">
            {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
            ))}
            <Button className='p-4 rounded-lg bg-white text-orange-500 border-orange-400' variant="outline">
                See more reviews
            </Button>
        </div>
    );
};

export default ReviewsList;
