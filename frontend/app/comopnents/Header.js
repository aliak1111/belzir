'use client'

import Link from "next/link";
import '@/app/comopnents/MainMenu'
import {MainMenu} from "@/app/comopnents/MainMenu";
import LoginRegisterModal from "@/app/comopnents/LoginRegisterModal";
import {useDispatch, useSelector} from "react-redux";
import {toggleLoginRegister} from "@/app/store/globalSlice";

export default function Header() {
    const dispatch = useDispatch();
    const showLoginRegisterModal = useSelector(state => state.global.showLoginRegister); // Access the modal state from Redux
    console.log(showLoginRegisterModal)

    const handleToggleLoginRegisterModal = () => {
        dispatch(toggleLoginRegister())
    }

    return (
        <header className="bg-white shadow-md sticky top-0">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-secondary flex space-x-3 items-center justify-center">
                    <img src="/images/logo.png" alt="logo" className='w-10 h-10'/>
                    <span className='text-5xl text-secondary'>Belzir</span>
                </Link>

                {/* Navigation Menu */}
                <div className={'hidden md:block'}>
                    <MainMenu mode={'horizontal'}></MainMenu>
                </div>

                {/* Login/Register */}
                <div className="hidden md:flex space-x-4 items-center">
                    <button onClick={handleToggleLoginRegisterModal} className="bg-primary text-white px-4 py-2 rounded-md hover:text-gray-200">Login /
                        Register
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {/* Display the modal if it's open */}
            {showLoginRegisterModal && <LoginRegisterModal/>}
        </header>
    );
}
