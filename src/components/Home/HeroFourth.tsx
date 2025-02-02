import Image from "next/legacy/image";
import React from "react";
import heroFourOne from "../../../public/assets/heroFourOne.png";
import heroFourTwo from "../../../public/assets/heroFourTwo.png";
import heroFourThree from "../../../public/assets/heroFourThree.png";
import heroFourFour from "../../../public/assets/heroFourFour.jpg";

const HeroFourth: React.FC = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col lg:my-24">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-5xl">Our Approach to Fashion Design </h1>
                <p className="my-6 text-center text-xl font-thin">
                    at elegant vogue , we blend creativity with craftsmanship to create <br />
                    fashion that transcends trends and stands the test of time each <br /> design
                    is meticulously crafted, ensuring the highest quelity <br /> exqulsite finish
                </p>
            </div>
            <div className="lg:pt-10 grid justify-center items-center grid-flow-col gap-10 ">
                <div className="relative w-[317px] h-[389px] hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out">
                    <Image src={heroFourOne} alt={"Hero Image"} layout="fill" className="object-cover" />
                </div>
                <div className="relative top-20 w-[317px] h-[419px] hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out">
                    <Image src={heroFourTwo} alt={"Hero Image"} layout="fill" className="object-cover" />
                </div>
                <div className="relative w-[317px] h-[419px] hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out">
                    <Image src={heroFourThree} alt={"Hero Image"} layout="fill" className="object-cover" />
                </div>
                <div className="relative top-20 w-[317px] h-[389px] hover:scale-110 hover:shadow-2xl transition duration-500 ease-in-out">
                    <Image src={heroFourFour} alt={"Hero Image"} layout="fill" className="object-cover" />
                </div>

            </div>
        </div>
    );
};

export default HeroFourth;
