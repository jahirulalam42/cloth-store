import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2';

const HeroFirst: React.FC = () => {

    const slides = [
        {
            id: 1,
            img: "/assets/heroOne.jpg",
            prev: 4,
            next: 2
        },
        {
            id: 2,
            img: "/assets/heroTwo.jpg",
            prev: 1,
            next: 3
        },
        {
            id: 3,
            img: "/assets/heroThree.jpg",
            prev: 2,
            next: 1
        }
    ];

    return (
        <div className='max-h-fit max-w-full lg:flex lg:gap-2'>
            <div className='lg:w-[40%] flex-none'>
                <ul className="menu bg-base-200 w-full p-0 [&_li>*]:rounded-none">
                    <li><a>Men</a></li>
                    <li><a>Women</a></li>
                    <li><a>Kids</a></li>
                </ul>
                {/* Search */}
                <label className="bg-[#d9d9d9] input input-bordered rounded-none flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>

                {/* Carousel */}
                <div>
                    <div className="carousel w-full pt-6">
                        <div className="carousel w-full">
                            {slides.map(({ id, img, prev, next }) => (
                                <div
                                    key={id}
                                    id={`slide${id}`}
                                    className="carousel-item w-full h-[314px] relative"
                                >
                                    <Image
                                        src={img}
                                        layout='fill'
                                        className="w-full object-cover"
                                        alt={`Slide ${id}`}
                                    />
                                    <div className="absolute hidden lg:flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">

                                        <a href={`#slide${prev}`} className="btn carousel-prev">
                                            ❮
                                        </a>

                                        <a href={`#slide${next}`} className="btn carousel-next">
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center mt-2'>
                        <div className="btn btn-square w-[265px] h-[40px] bg-[#d9d9d9] flex flex-row items-center justify-center">
                            <Link href={'/'} className="flex items-center gap-2">
                                <span>Go To Shop</span>
                                <HiArrowLongRight className='text-2xl' />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            <div className='lg:w-fit flex items-end flex-1 lg:gap-2'>
                <div className='w-[366px] h-[376px] relative'>
                    <Image
                        src='/assets/heroFour.png'
                        layout='fill'
                        className="w-full object-cover"
                        alt={'ImageFour'}
                    />
                </div>
                <div className='w-[366px] h-[376px] relative'>
                    <Image
                        src='/assets/heroFive.png'
                        layout='fill'
                        className="w-full object-cover"
                        alt={'ImageFour'}
                    />
                </div>
                <div className='w-[366px] h-[376px] relative'>
                    <Image
                        src='/assets/heroSix.jpg'
                        layout='fill'
                        className="w-full object-cover"
                        alt={'ImageFour'}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroFirst
