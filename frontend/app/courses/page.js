'use client'; // Make sure to use this to enable client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation';

export default function CoursesPage() {
    const router = useRouter();

    // Handle button click for sublevel selection
    const handleButtonClick = (category, level) => {
        router.push(`/courses/${category}/${level}`);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
            {/* Description Section */}
            <div className="text-center mb-20">
                <h1 className="text-3xl font-bold mb-4">Welcome to the German Learning Platform!</h1>
                <p className="text-lg">Please select one of the options below to proceed.</p>
            </div>

            {/* Courses Section */}
            <div className="flex justify-around w-full">
                {/* Full Courses Category */}
                <div className="text-center border p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Full Courses</h2>
                    <div className="space-y-4">
                        {['A1', 'A2', 'B1', 'B2'].map((level) => (
                            <button
                                key={level}
                                onClick={() => handleButtonClick('full-course', level)}
                                className="w-full py-2 px-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300"
                            >
                                Level {level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tests Category */}
                <div className="text-center border p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Tests</h2>
                    <div className="space-y-4">
                        {['A1', 'A2', 'B1', 'B2'].map((level) => (
                            <button
                                key={level}
                                onClick={() => handleButtonClick('Test', level)}
                                className="w-full py-2 px-4 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded-md transition duration-300"
                            >
                                Level {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
