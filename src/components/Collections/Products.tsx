import React from 'react'
import ProductCard from '../Common/ProductCard'

const Products: React.FC = () => {
    return (
        <div className='px-10 flex flex-col gap-10'>
            <div>
                <h1 className='text-4xl font-bold my-4'>Products</h1>
                <label className="bg-[#d9d9d9] lg:h[50px] lg:w-[367px] input input-bordered rounded-sm flex items-center gap-2">
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
            </div>
            <div className='grid grid-cols-4 grid-flow-row gap-10'>
                {/* Product Cards */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className=''><ProductCard /></div>
                ))}
            </div>
        </div>
    )
}

export default Products
