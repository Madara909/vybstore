import React from 'react'
import Image from 'next/image';

const HowToList = () => {
  return (
      <div className='w-full relative'>
          <h2 className='text-center text-xl md:text-4xl font-bold m-7 md:mb-14'>
              How to list?
          </h2>
          <Image
              src='/how.png'
              alt=''
              height={414}
              width={1200}
              className='object-contain'
              style={{
                  width: "100%",
                  position: "absolute",
              }}
          />
          <div className='w-96 h-96 bg-[#4885FFD6] rounded-full opacity-40 blur-[80px] absolute -right-36 top-32'></div>
          <div className='w-96 h-96 bg-[#FF5FD2] rounded-full opacity-40 blur-[80px] absolute -left-36 top-32'></div>
          <Image
              src='/mountain2.png'
              alt=''
              height={414}
              width={1200}
              className='object-contain z-10'
              style={{
                  width: "100%",
              }}
          />
          <h2 className='text-center text-lg md:text-4xl font-bold m-2 md:mb-4 z-20'>
              You Curate Experience,We Make It Happen
          </h2>
      </div>
  );
}

export default HowToList
