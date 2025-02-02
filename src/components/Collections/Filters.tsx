import React from "react";

const Filters: React.FC = () => {
    return (
        <div className="p-6 flex flex-col gap-10">
            <h1 className="text-lg font-medium">Filters</h1>
            <div>
                <h2 className="text-lg font-medium">Size</h2>
                <div className="flex flex-row gap-2 mt-2">
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        XS
                    </button>
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        S
                    </button>
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        M
                    </button>
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        L
                    </button>
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        XL
                    </button>
                    <button className="btn btn-ghost w-[38px] h-[39px] bordered border-2 border-base-300 rounded-none">
                        2X
                    </button>
                </div>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div ><h2 className="text-lg font-medium">Availability</h2>
                <div className="flex flex-row gap-2 mt-2">
                    <input type="checkbox" id="availability" className="checkbox rounded-none" />
                    <label htmlFor="availability">Availability</label>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                    <input type="checkbox" id="outOfStack" className="checkbox rounded-none" />
                    <label htmlFor="availability">Out Of Stack</label>
                </div>
            </div>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div><h2 className="text-lg font-medium">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Category</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Colors</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Price Range</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Collections</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Tags</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">Ratings</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </h2></div>
        </div>
    );
};

export default Filters;
