import React from 'react'
import Products from './Products'
import Filters from './Filters'

const Collections = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <div className='bordered border-2 border-black h-full w-full'>
                        <Products />
                    </div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open Sidebar
                    </label>
                </div>
                <div className="drawer-side bordered border-2 border-black">
                    <div className='w-96'>
                        <Filters />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections
