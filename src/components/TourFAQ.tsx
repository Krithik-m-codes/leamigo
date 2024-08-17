import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Can I get the refund?",
        answer: "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat"
    },
    {
        question: "Can I change the travel date?",
        answer: ""
    },
    {
        question: "When and where does the tour end?",
        answer: ""
    },
    {
        question: "Do you arrange airport transfers?",
        answer: ""
    }
];

const TourFAQ: React.FC = () => {
    return (
        <div className="max-w-2xl mt-10 mx-32 py-10">
            <h2 className="text-2xl font-bold mb-6 text-[#000080]">FAQ</h2>
            <Accordion type="single" collapsible>
                {faqData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className='p-4 rounded-md shadow-md'>
                        <AccordionTrigger>
                            <div className="flex items-center justify-between w-full">
                                <h3 className="text-lg font-semibold">{item.question}</h3>
                                {index === 0 && (
                                    <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0"></div>
                                )}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-600">{item.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default TourFAQ;
