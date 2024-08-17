import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const TourGalleryInfo: React.FC = () => {
    const images = [
        '/assets/images/phuketGallery1.jpg',
        '/assets/images/phuketGallery2.jpg',
        '/assets/images/phuketGallery3.jpg',
        '/assets/images/phuketGallery4.jpg',
    ];

    return (
        <div className="grid grid-cols-4 gap-2 my-4 mx-32">
            <div className="col-span-3 relative">
                <Image
                    src={images[0]}
                    alt="Main beach"
                    className="w-full h-full object-cover rounded-lg"
                    width={770}
                    height={520}
                />
            </div>
            <div className="col-span-1 space-y-2">
                <Image
                    src={images[1]}
                    alt="Beach view"
                    className="w-full h-[240px] object-cover rounded-lg"
                    width={700}
                    height={400}
                />
                <Image
                    src={images[2]}
                    alt="Swing"
                    className="w-full h-[120px] object-cover rounded-lg"
                    width={400}
                    height={400}
                />
                <div className="relative">
                    <Image
                        src={images[3]}
                        alt="Windmill"
                        className="w-full h-[200px] object-cover rounded-lg"
                        width={400}
                        height={500}
                    />
                    <Button
                        variant="secondary"
                        size="sm"
                        className="absolute bottom-2 right-2 text-xs bg-[#05073C] text-white hover:bg-[#6267ff]"
                    >
                        See all photos
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TourGalleryInfo;