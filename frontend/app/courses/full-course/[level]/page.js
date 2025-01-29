'use client'; // For client-side rendering

import React from 'react';
import {useParams} from 'next/navigation';
import {useSelector,useDispatch} from "react-redux";
import {toggleLoginRegister} from "@/app/store/globalSlice";

export default function FullCourseDetailPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const {level} = params; // The dynamic level parameter from URL
    const user = useSelector(state => state.user); // Access the modal state from Redux

    // Example course data for Full Courses
    const courseData = {
        A1: {
            title: "Full Course - A1",
            materials: ["Textbook: German for Beginners", "Audio files", "Grammar guide"],
            schedule: "Monday, Wednesday, Friday - 10:00 AM to 12:00 PM",
            location: "Room 101, Language Center",
            teacher: "John Doe",
            plan: [
                "Week 1: Basic Vocabulary",
                "Week 2: Simple Sentences",
                "Week 3: Basic Conversations",
                "Week 4: Grammar Introduction",
            ],
        },
        A2: {
            title: "Full Course - A2",
            materials: ["Textbook: Intermediate German", "Practice Sheets", "Audio Files"],
            schedule: "Tuesday, Thursday - 11:00 AM to 1:00 PM",
            location: "Room 102, Language Center",
            teacher: "Jane Smith",
            plan: [
                "Week 1: Complex Sentences",
                "Week 2: Advanced Grammar",
                "Week 3: Writing Skills",
                "Week 4: Speaking Skills",
            ],
        },
        // Other levels like B1, B2 can be added similarly
    };

    const course = courseData[level];

    if (!course) {
        return <p>Course not found for level {level}</p>;
    }

    const handleRegister = () => {
        if (user.loggedIn) {

        } else {
            dispatch(toggleLoginRegister());
        }
    };

    return (
        <div className="p-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg mb-6">Course Description and Details</p>
            </div>

            <div className="space-y-6">
                {/* Materials Section */}
                <section>
                    <h2 className="text-2xl font-semibold">Materials</h2>
                    <ul className="list-disc ml-8">
                        {course.materials.map((material, index) => (
                            <li key={index} className="text-lg">{material}</li>
                        ))}
                    </ul>
                </section>

                {/* Schedule Section */}
                <section>
                    <h2 className="text-2xl font-semibold">Schedule</h2>
                    <p className="text-lg">{course.schedule}</p>
                    <p className="text-lg">{course.location}</p>
                </section>

                {/* Teacher Section */}
                <section>
                    <h2 className="text-2xl font-semibold">Teacher</h2>
                    <p className="text-lg">Instructor: {course.teacher}</p>
                </section>

                {/* Teaching Plan Section */}
                <section>
                    <h2 className="text-2xl font-semibold">Teaching Plan</h2>
                    <ul className="list-disc ml-8">
                        {course.plan.map((week, index) => (
                            <li key={index} className="text-lg">{week}</li>
                        ))}
                    </ul>
                </section>

                {/* Register Button */}
                <div className="text-center mt-6">
                    <button
                        onClick={handleRegister}
                        className="py-2 px-6 text-white bg-secondary hover:text-gray-200 rounded-md text-xl"
                    >
                        Register for this class
                    </button>
                </div>
            </div>
        </div>
    );
}
