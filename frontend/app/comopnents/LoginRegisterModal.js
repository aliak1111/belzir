'use client'

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {closeLoginRegister} from "@/app/store/globalSlice";
import {loginUser} from "@/app/store/authSlice";

const LoginRegisterModal = () => {
    const dispatch = useDispatch();

    // State for handling form data
    const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        mobile: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCloseModal = () => {
        dispatch(closeLoginRegister());
    }

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the login or registration logic here
        if (isRegistering) {

        } else {
            dispatch(loginUser(formData))
        }

        console.log('Form submitted:', formData);
    };

    return (
        (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg p-8 w-96 relative">
                    {/* Close button */}
                    <button onClick={handleCloseModal} className="absolute top-5 right-10 text-gray-600">
                        X
                    </button>

                    <h2 className="text-2xl font-semibold text-center mb-6">
                        {isRegistering ? 'Register' : 'Login'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        {isRegistering && (
                            <>
                                {/* First Name */}
                                <div>
                                    <label className="block text-sm font-medium">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="block text-sm font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label className="block text-sm font-medium">Mobile</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </>
                        )}

                        <div className="flex justify-center space-x-4">
                            <button
                                type="submit"
                                className="w-full py-2 bg-primary text-white rounded-md"
                            >
                                {isRegistering ? 'Register' : 'Login'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            {isRegistering ? 'Already have an account?' : 'Need an account?'}
                            <button
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="text-blue-500 ml-2"
                            >
                                {isRegistering ? 'Login' : 'Register'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default LoginRegisterModal;
