import React from "react";

const TiltedCards = () => {
    return (
        <div className='bg-[#131212] text-beige pb-[20vh]'>
            <header className='w-[80vw] mx-auto grid place-items-center mb-20 h-[35vh]'>
                <div>
                    <h1 className='font-serif font-light text-3xl mb-4'>
                        Stacking Cards Animation
                    </h1>
                    <p className='font-light text-lg leading-relaxed'>
                        Scroll down to stack the cards. Scroll back up to
                        unstack them.
                    </p>
                </div>
            </header>

            <main className='w-[80vw] mx-auto'>
                <ul
                    id='cards'
                    className='list-none grid grid-rows-[repeat(4,_var(--card-height))] gap-[var(--card-margin)] pb-[calc(var(--numcards) * var(--card-top-offset))] mb-[var(--card-margin)]'
                >
                    <li
                        className='card sticky top-0 pt-[calc(var(--index)*var(--card-top-offset))]'
                        id='card-1'
                    >
                        <div className='card-content shadow-lg bg-[#fffaf2] text-[#131212] rounded-2xl overflow-hidden grid grid-cols-2 grid-rows-auto p-6'>
                            <div className='text-left w-[95%] max-w-[800px] place-self-center'>
                                <h2 className='font-serif font-bold text-3xl mb-2'>
                                    Card One
                                </h2>
                                <p className='font-light text-lg leading-relaxed'>
                                    This is the content of card one. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <figure className='overflow-hidden'>
                                <img
                                    src='https://assets.codepen.io/210284/flower-9.jpg'
                                    alt='card-one'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </figure>
                        </div>
                    </li>

                    <li
                        className='card sticky top-0 pt-[calc(var(--index)*var(--card-top-offset))]'
                        id='card-2'
                    >
                        <div className='card-content shadow-lg bg-[#fffaf2] text-[#131212] rounded-2xl overflow-hidden grid grid-cols-2 grid-rows-auto p-6'>
                            <div className='text-left w-[95%] max-w-[800px] place-self-center'>
                                <h2 className='font-serif font-bold text-3xl mb-2'>
                                    Card Two
                                </h2>
                                <p className='font-light text-lg leading-relaxed'>
                                    This is the content of card two. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <figure className='overflow-hidden'>
                                <img
                                    src='https://assets.codepen.io/210284/flower-8.jpg'
                                    alt='card-two'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </figure>
                        </div>
                    </li>

                    <li
                        className='card sticky top-0 pt-[calc(var(--index)*var(--card-top-offset))]'
                        id='card-3'
                    >
                        <div className='card-content shadow-lg bg-[#fffaf2] text-[#131212] rounded-2xl overflow-hidden grid grid-cols-2 grid-rows-auto p-6'>
                            <div className='text-left w-[95%] max-w-[800px] place-self-center'>
                                <h2 className='font-serif font-bold text-3xl mb-2'>
                                    Card Three
                                </h2>
                                <p className='font-light text-lg leading-relaxed'>
                                    This is the content of card three. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <figure className='overflow-hidden'>
                                <img
                                    src='https://assets.codepen.io/210284/flower-7.jpg'
                                    alt='card-three'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </figure>
                        </div>
                    </li>

                    <li
                        className='card sticky top-0 pt-[calc(var(--index)*var(--card-top-offset))]'
                        id='card-4'
                    >
                        <div className='card-content shadow-lg bg-[#fffaf2] text-[#131212] rounded-2xl overflow-hidden grid grid-cols-2 grid-rows-auto p-6'>
                            <div className='text-left w-[95%] max-w-[800px] place-self-center'>
                                <h2 className='font-serif font-bold text-3xl mb-2'>
                                    Card Four
                                </h2>
                                <p className='font-light text-lg leading-relaxed'>
                                    This is the content of card four. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <figure className='overflow-hidden'>
                                <img
                                    src='https://assets.codepen.io/210284/flower-6.jpg'
                                    alt='card-four'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </figure>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default TiltedCards;

// export default TiltedCards;
