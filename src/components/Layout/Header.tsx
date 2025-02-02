import Link from 'next/link'
import React from 'react'
import Image from "next/legacy/image"
import { FaRegHeart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { RiShoppingBag4Fill } from 'react-icons/ri';

const Header: React.FC = () => {
    const logo = '/assets/Logo.png';
    return (
        <div className="navbar bg-base-200 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/collections'}>Collections</Link></li>
                        <li><Link href={'/'}>New</Link></li>
                    </ul>
                </div>

                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/collections'}>Collections</Link></li>
                    <li><Link href={'/'}>New</Link></li>
                </ul>
            </div>
            <div className="navbar-center">
                <Link href={'/'} className="btn btn-ghost text-xl">
                    <Image src={logo} alt="Logo" height={35} width={35} />
                </Link>

            </div>
            <div className="lg:navbar-end lg:gap-4 lg:flex items-center">
                <div className="btn btn-neutral h-auto w-auto lg:h-[50px] lg:w-[50px] rounded-full flex items-center justify-center -rotate-45 font-bold text-md text-white">
                    <Link href={'/'}>
                        <FaRegHeart />
                    </Link>
                </div>
                <div className="flex items-center lg:gap-2">
                    <div className="btn btn-neutral h-auto w-auto lg:h-[50px] lg:w-[76px] rounded-full flex items-center justify-center font-bold text-md text-white">
                        <Link href={'/'}>
                            Cart
                        </Link>
                    </div>
                    <div className="btn btn-neutral h-auto w-auto lg:h-[50px] lg:w-[50px] rounded-full flex items-center justify-center font-bold text-lg text-white">
                        <Link href={'/'}>
                            <RiShoppingBag4Fill />
                        </Link>
                    </div>
                </div>
                <div className="btn btn-neutral h-auto w-auto lg:h-[50px] lg:w-[50px] rounded-full flex items-center justify-center font-bold text-lg text-white">
                    <Link href={'/'}>
                        <IoPersonOutline className='text-lg sm:text-xl' />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
