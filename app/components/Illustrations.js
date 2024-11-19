import Image from 'next/image';
import React from 'react'

const Illustrations = () => {
    const features = [
        {
            title: "Trusted By Influencers",
            description: "A trusted platform for influencers to grow and earn.",
            image: "/illustrations/d.png", 
        },
        {
            title: "Secured Data",
            description:
                "Advanced security measures to protect your valuable data.",
            image: "/illustrations/c.png",
        },
        {
            title: "Authentic Payment Partner",
            description: "Reliable, fast, and secure payments you can trust.",
            image: "/illustrations/a.png",
        },
        {
            title: "Monetize Your Influence",
            description:
                "Seamlessly turn your influence into consistent revenue.",
            image: "/illustrations/b.png", 
        },
    ];
  return (
      <div className='px-4 mx-auto flex flex-col md:flex-row mt-8 md:gap-12'>
          <div className='md:w-2/5 flex justify-center items-center'>
              <h2 className='text-center text-xl md:text-4xl text-[#00DC82] font-bold m-7 md:mb-14'>
                  From Creation to Monetization: Vyb Store Has It All
              </h2>
          </div>
          <div className='flex gap-4 w-full md:w-3/5 min-h-[31.25rem] h-max'>
              <div className='flex flex-col gap-4 w-1/2 h-full'>
                  <div className='flex flex-col items-center text-center bg-black rounded-3xl shadow-lg h-[54%]'>
                      {/* Text Section */}
                      <div className='p-6'>
                          <h3 className='text-base font-bold mb-4 md:text-4xl'>
                              {features[0].title}
                          </h3>
                          <p className='font-medium md:font-bold text-sm md:text-lg font-inter'>
                              {features[0].description}
                          </p>
                      </div>

                      {/* Image Section */}
                      <div className='w-[80%] md:w-1/2 pb-3 px-3'>
                          <Image
                              src={features[0].image}
                              alt={features[0].title}
                              height={135}
                              width={112}
                              className='object-contain mx-auto'
                              style={{ width: "100%" }}
                          />
                      </div>
                  </div>
                  <div className='flex flex-col items-center text-center bg-black rounded-3xl shadow-lg h-[46%]'>
                      <div className='p-6'>
                          {/* Text Section */}
                          <h3 className='text-xl font-bold mb-4 md:text-4xl'>
                              {features[2].title}
                          </h3>
                          <p className='text-sm md:text-lg font-medium md:font-bold font-inter'>
                              {features[2].description}
                          </p>
                      </div>

                      {/* Image Section */}
                      <div className='w-[80%] md:w-1/2 pb-3 px-3'>
                          <Image
                              src={features[2].image}
                              alt={features[2].title}
                              height={89}
                              width={83}
                              className='object-contain mx-auto'
                              style={{ width: "100%" }}
                          />
                      </div>
                  </div>
              </div>
              <div className='flex flex-col gap-4 md:py-3 w-1/2 h-full'>
                  <div className='flex flex-col items-center text-center bg-black rounded-3xl shadow-lg h-[46%]'>
                      {/* Text Section */}
                      <div className='p-6'>
                          <h3 className='text-base font-bold mb-4 md:text-4xl'>
                              {features[1].title}
                          </h3>
                          <p className='font-medium md:font-bold text-sm md:text-lg font-inter'>
                              {features[1].description}
                          </p>
                      </div>

                      {/* Image Section */}
                      <div className='w-[80%] md:w-1/2 pb-3 px-3'>
                          <Image
                              src={features[1].image}
                              alt={features[1].title}
                              height={104}
                              width={112}
                              className='object-contain mx-auto'
                              style={{ width: "100%" }}
                          />
                      </div>
                  </div>
                  <div className='flex flex-col items-center text-center bg-black rounded-3xl shadow-lg h-[54%]'>
                      <div className='p-6'>
                          {/* Text Section */}
                          <h3 className='text-xl font-bold mb-4 md:text-4xl'>
                              {features[3].title}
                          </h3>
                          <p className='text-sm md:text-lg font-medium md:font-bold font-inter'>
                              {features[3].description}
                          </p>
                      </div>

                      {/* Image Section */}
                      <div className='w-[80%] md:w-1/2 pb-3 px-3'>
                          <Image
                              src={features[3].image}
                              alt={features[3].title}
                              height={92}
                              width={77}
                              className='object-contain mx-auto'
                              style={{ width: "100%" }}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Illustrations
