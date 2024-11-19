import React from "react";
import Image from "next/image";

const Stack = () => {
    const cards = [
        {
            color: "#A94949",
            header: "Sign Up and create your own store hassle-free.",
            content:
                "Join us via Google sign-in and verify your influencer status by entering your social media ID and unlock your store @ zero cost.",
            image: "/getStarted/1.png",
            tilt: "0deg",
        },
        {
            color: "#5ED46A",
            header: "Monetize your influencer status: Earn money adding real value to your true followers!",
            content:
                "Let VYB the money now! It's here, and you can withdraw it periodically.",
            image: "/getStarted/2.png",
            tilt: "-1deg",
        },
        {
            color: "#487FD7",
            header: "Call audience to your store. Easily integrate links into content.",
            content:
                "After setting up your products, it's time to go public. Put your store link in your Instagram bio and let's make your first post together!",
            image: "/getStarted/3.png",
            tilt: "1.5deg",
        },
        {
            color: "#5CAAB6",
            header: "Build & customize your store front.",
            content:
                "Simply fill in the details to build your digital store. Once done, start selling your products to your audience.",
            image: "/getStarted/4.png",
            tilt: "-1.5deg",
        },
    ];

    return (
        <div className='py-10 px-5 md:px-20'>
            <h2 className='text-center text-xl md:text-4xl text-[#00DC82] font-bold mb-10'>
                How to get started?
            </h2>
            <div className='flex flex-col gap-16 justify-center items-center'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className='rounded-3xl shadow-lg p-4 md:py-9 md:px-14 md:h-96 md:w-[52.5rem]  max-w-96 md:max-w-full card'
                        style={{
                            backgroundColor: card.color,
                            transform: `rotate(${card.tilt})`,
                        }}
                    >
                        <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:h-full'>
                            <div className="md:w-1/2 h-max">
                                <h3 className='text-base md:text-3xl text-white font-bold mb-2'>
                                    {card.header}
                                </h3>
                                <p className=' font-inter text-white font-medium text-xs md:text-base'>
                                    {card.content}
                                </p>
                            </div>
                            <div className='relative w-full md:w-1/2 h-40 md:h-full'>
                                <Image
                                    src={card.image}
                                    alt={card.header}
                                    layout='fill'
                                    className='rounded-lg object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stack;
