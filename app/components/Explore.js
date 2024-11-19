import React from 'react'
import Image from 'next/image';

const Explore = () => {
    const frames = [
        {img: "/frames/Frame1.png", creator:"Samira Hadid", location:"Delhi", tittle:"Delhi Itinerary"},
        {img: "/frames/Frame2.png", creator:"Samira Hadid", location:"Kerala", tittle:"Munnar Itinerary"},
        {img: "/frames/Frame3.png", creator:"Samira Hadid", location:"West Bengal", tittle:"Darjeeling Itinerary"},
        {img: "/frames/Frame1.png", creator:"Samira Hadid", location:"Delhi", tittle:"Delhi Itinerary"},
        {img: "/frames/Frame2.png", creator:"Samira Hadid", location:"Kerala", tittle:"Munnar Itinerary"},
        {img: "/frames/Frame3.png", creator:"Samira Hadid", location:"West Bengal", tittle:"Darjeeling Itinerary"},
        {img: "/frames/Frame1.png", creator:"Samira Hadid", location:"Delhi", tittle:"Delhi Itinerary"},
        {img: "/frames/Frame2.png", creator:"Samira Hadid", location:"Kerala", tittle:"Munnar Itinerary"},
        {img: "/frames/Frame3.png", creator:"Samira Hadid", location:"West Bengal", tittle:"Darjeeling Itinerary"},
    ];
  return (
      <div className='w-full'>
          <h2 className='text-center text-xl md:text-4xl font-bold m-7 md:mb-14'>
              Explore Our Curated Travel Itineraries
          </h2>
          <div className='overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide px-5'>
              <div className='flex gap-4'>
                  {frames.map((frame, index) => (
                      <div
                          key={index}
                          className='relative flex-shrink-0 w-[153px] h-[272px] md:w-64 md:h-[400px]'
                      >
                          <Image
                              src={frame.img}
                              alt={`Frame ${index + 1}`}
                              width={256}
                              height={400}
                              className='rounded-2xl object-cover w-full h-full'
                          />
                          {/* Add overlay text */}
                          <div className='absolute bottom-4 left-0 right-0 text-white text-center'>
                              <h3 className='font-bold text-sm md:text-web-h4'>
                                  {frame.tittle}
                              </h3>
                              <p className='font-bold text-sm md:text-web-h4'>
                                  {frame.location}
                              </p>
                              <div className='text-xs md:text-sm mt-2 bg-white text-black px-2 py-1 w-max mx-auto font-bold rounded-full'>
                                  {frame.creator}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default Explore
