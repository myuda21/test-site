"use client"

import { useState } from "react";

const CommentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    return (
        <div className="bg-white p-6 rounded-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
            <form className="space-y-4">
                {/* Nama & Email */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Nama */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>


                {/* Comment */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Comment"
                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
