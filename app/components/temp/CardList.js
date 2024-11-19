"use client";
import React, { useEffect, useRef, useState } from "react";

const Card = ({ image, title, description, index, totalCards }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const cardInner = card.querySelector(".card__inner");
        const nextCard = card.nextElementSibling;

        const handleScroll = () => {
            if (nextCard) {
                const { top } = nextCard.getBoundingClientRect();
                const percentageY = 1 - top / window.innerHeight;
                const toScale = 1 - (totalCards - 1 - index) * 0.1;

                cardInner.style.transform = `scale(${
                    1 - percentageY * (1 - toScale)
                })`;
                cardInner.style.filter = `brightness(${1 - percentageY * 0.4})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [index, totalCards]);

    return (
        <div className='card' ref={cardRef} data-index={index}>
            <div className='card__inner flex flex-col sm:flex-row overflow-hidden bg-white rounded-lg shadow-lg'>
                <div className='card__image-container flex-shrink-0 w-full sm:w-2/5'>
                    <img
                        className='card__image w-full h-full object-cover aspect-w-1 aspect-h-1'
                        src={image}
                        alt='Card'
                    />
                </div>
                <div className='card__content p-6 sm:p-10 flex flex-col'>
                    <h1 className='card__title text-2xl sm:text-5xl font-semibold text-gray-800'>
                        {title}
                    </h1>
                    <p className='card__description text-base sm:text-lg text-gray-800 leading-6 mt-4'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const CardList = () => {
    const [cards] = useState([
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
        {
            image: "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
            title: "Card Title 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique.",
        },
    ]);

    return (
        <div className='space space--small'>
            <div className='cards flex flex-col gap-10 max-w-4xl mx-auto'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        index={index}
                        totalCards={cards.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardList;
