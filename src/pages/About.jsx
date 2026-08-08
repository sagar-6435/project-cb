import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="flex-grow bg-white">
            {/* Page Heading */}
            <div className="text-center px-4 max-w-4xl mx-auto mb-4 mt-8 pt-24">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
                    About Us
                </h1>
            </div>

            {/* Our Story */}
            <div className="pt-8 pb-24 px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-[#e2933f] font-semibold uppercase tracking-widest text-sm mb-12">Where Every Celebration Begins</p>

                <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    <p>
                        At Cake Box, we believe a cake is more than just a dessert. It becomes part of birthdays, anniversaries, weddings, surprises, milestones, and countless happy memories.
                    </p>
                    <p>
                        Our focus is on creating delicious products while making every customer experience special.
                    </p>
                    <p>
                        From classic favourites to creative celebration cakes, Cake Box continues to bring freshness, creativity, and happiness to every occasion.
                    </p>
                </div>
            </div>

            {/* What We Do */}
            <div className="bg-[#022f24] py-24 px-8 text-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What We Do</h2>
                        <p className="text-[#e2933f] font-medium tracking-widest uppercase text-sm">Made for Every Occasion</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Birthday Celebrations</h3>
                            <p className="text-white/80">Make birthdays memorable with cakes designed to make the moment even sweeter.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Custom Cakes</h3>
                            <p className="text-white/80">Bring your ideas to life with cakes created around your celebration and personality.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Special Occasions</h3>
                            <p className="text-white/80">From anniversaries to weddings, create unforgettable moments with Cake Box.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Everyday Cravings</h3>
                            <p className="text-white/80">Because you don't always need an occasion to enjoy something delicious.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Philosophy */}
            <div className="py-24 px-8 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Philosophy</h2>
                <p className="text-[#e2933f] font-semibold uppercase tracking-widest text-sm mb-16">Taste. Creativity. Celebration.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div>
                        <div className="w-12 h-1 bg-[#022f24] mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Taste</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We focus on creating products that people love coming back for.
                        </p>
                    </div>
                    <div>
                        <div className="w-12 h-1 bg-[#022f24] mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Creativity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Every celebration is different. Our cakes and creations are designed to make each occasion unique.
                        </p>
                    </div>
                    <div>
                        <div className="w-12 h-1 bg-[#022f24] mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Celebration</h3>
                        <p className="text-gray-600 leading-relaxed">
                            At the heart of Cake Box is happiness. We want to be part of the moments people remember.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 border-t border-gray-200 py-24 px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                    Your Celebration Deserves a Cake Box
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    Whether you're celebrating a birthday, a milestone, or simply craving something delicious, Cake Box is here to make the moment sweeter.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/products">
                        <button className="bg-[#022f24] hover:bg-[#034233] text-white px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto">
                            Discover Our Products
                        </button>
                    </Link>
                    <Link to="/partner">
                        <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto">
                            Become a Franchise Partner
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
