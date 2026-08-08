import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Birthday Cakes',
        desc: 'Make birthdays extra special with cakes created for memorable celebrations.',
        image: '/cat_birthday.png'
    },
    {
        title: 'Customized Cakes',
        desc: 'Have an idea in mind? Explore creative cakes designed around your theme, occasion, personality, or celebration.',
        image: '/cat_custom.png'
    },
    {
        title: 'Fondant Cakes',
        desc: 'Beautifully designed cakes that combine detailed presentation with delicious flavour.',
        image: '/cat_fondant.png'
    },
    {
        title: 'Pinata Cakes',
        desc: 'Add an element of surprise to your celebration with fun and interactive pinata cakes.',
        image: '/cat_pinata.png'
    },
    {
        title: 'Wedding & Special Occasion Cakes',
        desc: 'Make your biggest moments even more memorable with elegant cakes created for special celebrations.',
        image: '/cat_wedding.png'
    },
    {
        title: 'Desserts & Sweet Treats',
        desc: 'A selection of delicious treats for those moments when you simply want something sweet.',
        image: '/cat_desserts.png'
    },
    {
        title: 'Party Products',
        desc: 'Make celebrations more complete with products and treats designed for parties and special occasions.',
        image: '/cat_party.png'
    },
    {
        title: 'Snacks & Savouries',
        desc: "Because Cake Box isn't only about cakes. Enjoy delicious savoury options alongside your favourite sweet treats.",
        image: '/cat_snacks.png'
    }
];

export default function Products() {
    return (
        <div className="flex-grow bg-white pt-24">

            {/* Page Heading */}
            <div className="text-center px-4 max-w-4xl mx-auto mb-4 mt-8">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
                    Our Products
                </h1>
            </div>

            {/* Categories Grid */}
            <div className="pt-8 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-4 md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{cat.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Philosophy */}
            <div className="bg-[#e4e2dd] py-24 px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Something for Every Craving</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                        We continuously explore new ideas, flavours, designs, and products to give customers more reasons to celebrate with Cake Box.
                    </p>
                    <Link to="/locations">
                        <button className="bg-[#022f24] hover:bg-[#034233] text-white px-8 py-4 rounded-full font-medium transition-colors">
                            Visit Cake Box
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
