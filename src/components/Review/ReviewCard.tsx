import Image from "next/image";

interface ReviewCardProps {
    avatar: string;
    name: string;
    date: string;
    title: string;
    content: string;
    images: string[];
}

const ReviewCard: React.FC<ReviewCardProps> = ({ avatar, name, date, title, content, images }) => {
    return (
        <div className="bg-white p-4 rounded-lg border-gray-200">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        <Image src={avatar ?? ""} alt="alt" width={48} height={48} />
                    </div>
                    <div className="ml-4">
                        <div className="text-lg font-semibold">{name}</div>
                    </div>
                </div>
                <div className="text-gray-600">{date}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{content}</p>
            {images && (
                <div className="flex space-x-2 mb-4">
                    {images.map((src, index) => (
                        <Image key={index} src={src} alt="" className="w-24 h-24 object-cover rounded-lg" width={100} height={100} />
                    ))}
                </div>
            )}
            <div className="flex space-x-4 text-blue-600">
                <button className="hover:underline">Helpful</button>
                <button className="hover:underline text-gray-400">Not helpful</button>
            </div>
        </div>
    );
};

export default ReviewCard;
