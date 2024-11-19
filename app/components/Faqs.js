"use client";
import React, { useState } from "react";

const Faqs = () => {
    const faqsList = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase as long as it is in its original condition. Please ensure you have the receipt or proof of purchase.",
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders. Delays may occur during holidays.",
        },
        {
            question: "Do you offer discounts for bulk orders?",
            answer: "Yes, we offer discounts for orders above a certain quantity. Please contact our sales team for more information about bulk pricing.",
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order is shipped, you will receive a tracking number via email that you can use to track your package.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit/debit cards, PayPal, Google Pay, and Apple Pay.",
        },
        {
            question: "How do I reset my password?",
            answer: "To reset your password, click on 'Forgot Password' on the login page. Follow the instructions sent to your registered email to reset your password.",
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, our customer support team is available 24/7 to assist you with any issues or inquiries. You can reach us via email, chat, or phone.",
        },
    ];

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        setSelected(selected === i ? null : i);
    };
    return (
        <div className='flex flex-col md:flex-row gap-4 w-full p-4 md:p-0 justify-center items-center mt-4'>
            <div className='md:w-[46.7%] px-20'>
                <h2 className='text-center md:text-left text-xl md:text-4xl text-[#00DC82] font-bold mb-4 pr-8'>
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className='text-center md:text-left font-medium text-base md:text-lg'>
                    Quick answers to questions you may have. Can’t find what
                    you&apos;re looking for?
                    <br /> Check out our full documentation
                </p>
            </div>
            <div className='md:w-[54.3%]'>
                {faqsList.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white px-5 py-[0.875rem] mb-4 rounded-2xl shadow-md transition-all duration-300`}
                        onClick={() => toggle(index)}
                    >
                        <div className='flex justify-between items-center cursor-pointer'>
                            <h3
                                className={`text-lg font-bold transition-all duration-300 text-black`}
                            >
                                {faq.question}
                            </h3>
                            <span
                                className={`text-2xl font-normal text-black transition-transform duration-300 ${
                                    selected === index
                                        ? "rotate-180"
                                        : "rotate-0"
                                }`}
                            >
                                {selected === index ? "-" : "+"}
                            </span>
                        </div>
                        <div
                            className={`text-black text-lg font-bold overflow-hidden transition-all duration-300 ${
                                selected === index
                                    ? "max-h-[500px] opacity-100 mt-2"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <hr className='mb-2' />
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
