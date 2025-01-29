

export default function Home() {
    return (
        <section className="bg-gradient-to-r min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center p-6">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Master German at Your Own Pace
                </h1>
                <p className="text-lg mb-6 max-w-lg mx-auto">
                    Learn German through interactive lessons, quizzes, and practice exercises. Start your language
                    journey today!
                </p>
                <a
                    href="/courses"
                    className="bg-primary text-white px-6 py-3 rounded-full text-xl font-semibold hover:text-gray-300 transition duration-300"
                >
                    Get Started
                </a>
            </div>

            {/* Features Section */}
            <div className="mt-16 space-y-12">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Learn German?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl text-center mt-4">
                        Unlock a world of opportunities! Learning German can help you advance in your career, travel,
                        and connect with millions of people worldwide.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row  justify-center gap-12 mt-8">
                    <div className="text-center bg-primary text-white rounded-full p-5 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold">Global Communication</h3>
                        <p className="mt-2">Join over 100 million native speakers and connect with people
                            across the globe.</p>
                    </div>

                    <div  className="text-center bg-primary text-white rounded-full p-2 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold">Career Advancement</h3>
                        <p className="mt-2">German is essential for business in Europe and many
                            international companies.</p>
                    </div>

                    <div  className="text-center bg-primary text-white rounded-full p-2 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold">Interactive Lessons</h3>
                        <p className="mt-2">Enjoy learning with fun and engaging interactive lessons that
                            keep you motivated!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
