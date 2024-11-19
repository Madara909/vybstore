import React from "react";
import Image from "next/image";
const HeroSection = () => {
    return (
        <div className=' text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-5'>
            <div className='flex flex-col gap-7 text-left w-full md:w-[45%]'>
                {/* Headline Section */}

                <h1 className='text-3xl sm:text-[4rem] font-bold leading-[1.1] tracking-normal'>
                    <div className='mb-6'>
                        {" "}
                        <span className='texteff'>One</span>{" "}
                        <span className='texteff'>Stop</span>
                    </div>
                    <div className='mb-6'>
                        <span className='texteff'>Marketplace</span>
                    </div>
                    <div className='mb-6'>
                        <span className='texteff'>For</span>{" "}
                        <span className='texteff bg-green-500'>
                            Influencers
                        </span>
                    </div>
                </h1>

                {/* Subtitle */}
                <p className='text-lg sm:text-2xl lg:text-5xl font-bold mb-8 '>
                    Unleash Your Influence: Sell Itineraries, Build Your Brand,
                    Create Merch, and Share Content – All in One Hub.
                </p>

                {/* Buttons */}
                <div className='flex gap-4'>
                    <button className='bg-green-500 text-black font-semibold py-4 px-6 rounded-2xl hover:bg-green-400'>
                        Demo Store
                    </button>
                    <button className='border-2 border-red-500 text-red-500 font-semibold py-2 px-6 rounded hover:bg-red-500 hover:text-black'>
                        Join Waitlist
                    </button>
                </div>
            </div>
            <div className='relative w-full md:w-[50%] flex  justify-center lg:justify-end'>
                <Image
                    src='/iamge.png' // Replace with the actual path to your image
                    alt='Descriptive text for the image'
                    width={595}
                    height={350}
                    className='object-cover'
                    style={{
                        height: "100%",
                    }}
                />
            </div>
        </div>
    );
};

export default HeroSection;
