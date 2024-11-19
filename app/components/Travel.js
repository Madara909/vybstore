"use client"
import { useState } from "react";
import Image from "next/image";
import Explore from "./Explore";
import HowToList from "./HowToList";

export default function Travel() {
    const [selected, setSelected] = useState(0);

    const options = ["Travel", "Digital", "Brand", "Merch"];

    return (
        <div className="px-4">
            <div className='flex justify-between items-center space-x-4 mx-auto bg-black px-6 py-9 rounded-3xl mb-9'>
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(index)}
                        className={`relative py-2  text-base sm:text-mobile-h2 md:text-4xl font-bold hover:text-gray-400 cursor-pointer transition duration-200`}
                    >
                        {option}
                        {selected === index && (
                            <span className='absolute -bottom-1 left-0 right-0 h-1 bg-green-500 rounded-md'></span>
                        )}
                    </div>
                ))}
            </div>
            <div className='bg-black rounded-3xl  mx-auto overflow-hidden flex flex-col gap-16'>
                <div className='relative'>
                    <Image
                        src='/mountain1.png'
                        alt=''
                        height={540}
                        width={1200}
                        className='object-contain'
                        style={{
                            width: "100%",
                        }}
                    />
                    <div className='text-center absolute top-[15%] left-0 right-0'>
                        <p className='text-[40px] md:text-[100px] lg:text-[180px] font-bold uppercase leading-tight'>
                            {options[selected]}
                        </p>
                        <p className='text-sm md:text-2xl lg:text-4xl font-bold w-[90%] sm:w-3/6 mx-auto leading-relaxed'>
                            Turn your travel experience into an itinerary,
                            travel package with VYB Store, and share it with
                            your true followers.
                        </p>
                    </div>
                </div>

                <Explore />
                <HowToList />
            </div>
        </div>
    );
}
