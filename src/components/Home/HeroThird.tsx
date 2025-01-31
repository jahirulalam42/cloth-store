'use client'
import React, { useRef, useState } from 'react'
import ProductCard from '../Common/ProductCard'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HeroThird: React.FC = () => {

    const [showAll, setShowAll] = useState(false);
    const items = [...Array(10)];

    return (
        <div className='lg:mt-40 mt-10'>
            <div className='w-full h-fit flex'>
                <h1 className='w-full lg:text-6xl text-2xl text-black font-semibold flex justify-start'>
                    XIV <br /> Collections <br /> 24-25
                </h1>
                <p className='w-full flex justify-end items-end text-gray-700 underline lg:text-lg hover:text-blue-500'>See All</p>
            </div>

            <div className="lg:mt-10">
                {/* Cards Container */}
                <div className={`flex ${showAll ? 'flex-wrap' : 'overflow-x-hidden'} justify-center scrollbar-hide w-full px-4 gap-6`}>
                    {items.map((_, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 w-96 ${!showAll && i >= 4 ? 'hidden' : ''}`}
                        >
                            <ProductCard />
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {items.length > 3 && (
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-ghost"
                        >
                            {showAll ? (<div className='flex justify-center items-center flex-col gap-2'>Show Less <span><FaChevronUp /></span></div>) : (<div className='flex justify-center items-center flex-col gap-2'>Show More <span><FaChevronDown /></span></div>)}

                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeroThird