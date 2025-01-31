'use client'
import React, { useRef } from 'react'
import ProductCard from '../Common/ProductCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const HeroSecond: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='lg:mt-40 mt-10'>
            <div className='w-full h-fit flex'>
                <h1 className='w-full lg:text-6xl text-2xl text-black font-semibold flex justify-start'>
                    New <br /> This Week
                </h1>
                <p className='w-full flex justify-end items-end text-gray-700 underline lg:text-lg hover:text-blue-500'>See All</p>
            </div>

            <div className="lg:mt-10">
                <div
                    ref={containerRef}
                    className='flex overflow-x-hidden scrollbar-hide w-full px-4 gap-6'
                >
                    {/* Product Cards */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className='flex-shrink-0 w-96'><ProductCard /></div>
                    ))}
                </div>

                {/* Scroll Buttons  */}
                <div className='w-full flex justify-center gap-2 mt-4'>
                    <div className="">
                        <button
                            onClick={scrollLeft}
                            className="btn rounded-sm bordered border-2 border-gray-500 text-2xl font-extralight"
                        >
                            <FaAngleLeft />
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={scrollRight}
                            className="btn rounded-sm bordered border-2 border-gray-500 text-2xl font-extralight"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSecond