/** src/components/LeaveAReply.tsx */

import React from "react";

const LeaveAReply: React.FC = () => {
    return (
        <div className="max-w-2xl mx-32 px-4 py-10">
            <h2 className="text-2xl font-bold mb-4">Leave a Reply</h2>
            <p className="mb-4">
                Your email address will not be published. Required fields are marked{" "}
                <span className="text-red-500">*</span>
            </p>
            {/* Labels */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <span className="text-lg">Location</span>
                <span className="text-lg">Amenities</span>
                <span className="text-lg">Food</span>
                <span className="text-lg">Room</span>
                <span className="text-lg">Price</span>
                <span className="text-lg">Tour Operator</span>
            </div>
            {/* Form */}
            <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border p-2 w-full rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Title"
                        className="border p-2 w-full rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Comment"
                        className="border p-2 w-full rounded h-32"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default LeaveAReply;
