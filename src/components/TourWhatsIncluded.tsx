import React from 'react';

const IncludedItem = ({ text, included }: { text: string; included: boolean }) => (

    <div className="flex items-center gap-4 space-x-2 mb-3">
        <div
            className={`h-6 w-6 rounded-full ${included ? 'bg-[#EFF7F1]' : 'bg-[#FFE5E5]'}`}
        ></div>
        <span className="text-sm">{text}</span>
    </div>

);

const WhatsIncluded = () => {
    const includedItems = [
        "Beverages, drinking water, morning tea and buffet lunch",
        "Local taxes",
        "Hotel pickup and drop-off by air-conditioned minivan",
        "InsuranceTransfer to a private pier",
        "Soft drinks",
        "Tour Guide"
    ];

    const notIncludedItems = [
        "Towel",
        "Tips",
        "Alcoholic Beverages"
    ];

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 ">
            <h2 className="text-3xl font-bold mb-7 text-navy-900">What&rsquo;s included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    {includedItems.map((item, index) => (
                        <IncludedItem key={index} text={item} included={true} />
                    ))}
                </div>
                <div>
                    {notIncludedItems.map((item, index) => (
                        <IncludedItem key={index} text={item} included={false} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatsIncluded;