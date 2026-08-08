import React from 'react';

export default function GenericPage({ title, description }) {
    return (
        <div className="flex-grow pt-32 pb-16 px-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">
                {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description || `Discover more about ${title.toLowerCase()} and how we bring artisanal excellence to every creation.`}
            </p>

            <div className="mt-12 w-24 h-1 bg-[#022f24] mx-auto rounded-full"></div>
        </div>
    );
}
