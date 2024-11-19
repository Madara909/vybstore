"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='px-6 py-4 bg-black text-white'>
            <nav className='flex justify-between items-center'>
                {/* Logo and Search Bar */}
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    {/* Logo */}
                    <Link href='/'>
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={144}
                            height={30}
                        />
                    </Link>

                    {/* Search Bar (visible on all screen sizes) */}
                    <div className='relative bg-white text-black px-2 flex-grow md:flex-grow-0 md:px-4 md:py-2 rounded-full flex items-center justify-center gap-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-5 w-5 text-gray-400'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z'
                            />
                        </svg>
                        <input
                            type='text'
                            placeholder='Search Creator/Product'
                            className='bg-white text-black px-4 py-2 rounded-full w-full md:w-[300px] outline-none'
                        />
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        className='text-white focus:outline-none'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-8 w-8'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 6h16M4 12h16m-7 6h7'
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className='hidden md:flex gap-8 items-center text-white lg:text-[27px] font-bold'>
                    <Link href='/'>
                        <span className='hover:text-gray-300'>
                            Fav Creators
                        </span>
                    </Link>
                    <Link href='/'>
                        <span className='hover:text-gray-300'>Merchandise</span>
                    </Link>
                    <Link href='/'>
                        <span className='hover:text-gray-300'>Brand</span>
                    </Link>
                    <Link href='/'>
                        <span className='hover:text-gray-300'>Digital</span>
                    </Link>
                </div>

                {/* Profile Icon */}
                <div className='hidden md:block relative'>
                    <button className='bg-white text-black p-2 rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='h-6 w-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0zm3 7.5v-.75a4.5 4.5 0 00-9 0v.75M12 3v.01'
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-gray-800 p-4 rounded-md mt-2'>
                    <div className='flex flex-col gap-4'>
                        <Link href='/'>
                            <span className='hover:text-gray-300'>
                                Fav Creators
                            </span>
                        </Link>
                        <Link href='/'>
                            <span className='hover:text-gray-300'>
                                Merchandise
                            </span>
                        </Link>
                        <Link href='/'>
                            <span className='hover:text-gray-300'>Brand</span>
                        </Link>
                        <Link href='/'>
                            <span className='hover:text-gray-300'>Digital</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
