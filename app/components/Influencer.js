import React from "react";
import Image from "next/image";

const Influencer = () => {
    const influencers = [
        {
            img: "/influencers/inf.png",
            hoverImg: "/influencers/inf2.png",
            mobileImg: "/influencers/inf3.jpg",
        },
        {
            img: "/influencers/influ.png",
            hoverImg: "/influencers/influ2.png",
            mobileImg: "/influencers/influ3.jpg",
        },
        {
            img: "/influencers/jay.png",
            hoverImg: "/influencers/jay2.png",
            mobileImg: "/influencers/jay3.jpg",
        },
        {
            img: "/influencers/samira.png",
            hoverImg: "/influencers/samira2.png",
            mobileImg: "/influencers/samira3.jpg",
        },
    ];

    return (
        <div className='py-8'>
            <h2 className='text-center text-xl md:text-4xl text-[#00DC82] font-bold mb-4'>
                Our Influencers
            </h2>
            <div className='flex sm:justify-center overflow-x-auto space-x-6 md:space-x-10 scrollbar-hide px-4 py-4 md:px-0'>
                {influencers.map((influencer, index) => (
                    <div
                        key={index}
                        className='relative w-24 h-24 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300'
                    >
                        {/* Desktop and Tablet */}
                        <div className='hidden md:block'>
                            <Image
                                src={influencer.img}
                                alt={`Influencer ${index + 1}`}
                                fill
                                className='object-cover'
                            />
                            <div className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300'>
                                <Image
                                    src={influencer.hoverImg}
                                    alt={`Hover Influencer ${index + 1}`}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className='block md:hidden'>
                            <Image
                                src={influencer.mobileImg}
                                alt={`Mobile Influencer ${index + 1}`}
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Influencer;
