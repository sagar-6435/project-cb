import React from 'react';
import { TrendingUp, Star, Headset, BookOpen, Megaphone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
    {
        icon: <TrendingUp className="w-8 h-8 text-[#e2933f]" />,
        title: 'Proven Business Model',
        description: 'Our established formula for success minimizes risk and maximizes your return on investment.'
    },
    {
        icon: <Star className="w-8 h-8 text-[#e2933f]" />,
        title: 'Premium Quality Products',
        description: 'We are renowned for our artisanal, egg-free cakes that meet the highest standards of taste and presentation.'
    },
    {
        icon: <BookOpen className="w-8 h-8 text-[#e2933f]" />,
        title: 'Comprehensive Training',
        description: 'No baking experience? No problem. We provide extensive training for you and your staff before launch.'
    },
    {
        icon: <Headset className="w-8 h-8 text-[#e2933f]" />,
        title: 'Ongoing Support',
        description: 'From operations to quality control, our dedicated franchise team is there to assist you every step of the way.'
    },
    {
        icon: <Megaphone className="w-8 h-8 text-[#e2933f]" />,
        title: 'Marketing Power',
        description: 'Benefit from our national marketing campaigns, social media presence, and brand recognition.'
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-[#e2933f]" />,
        title: 'Exclusive Territories',
        description: 'We offer protected territories to ensure you have the best possible market for your Cake Box store.'
    }
];

export default function WhyCakeBox() {
    return (
        <div className="flex-grow bg-white">
            {/* Hero Section */}
            <div className="bg-[#022f24] text-white py-24 px-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e2933f]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <p className="text-[#e2933f] font-semibold tracking-widest uppercase text-sm mb-4">The Cake Box Advantage</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        Why Choose Cake Box?
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Join one of the fastest-growing bakery franchises. We provide all the ingredients for a successful, profitable business.
                    </p>
                </div>
            </div>

            {/* Reasons Grid */}
            <div className="max-w-7xl mx-auto px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        A Recipe for Success
                    </h2>
                    <div className="w-24 h-1 bg-[#e2933f] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#e4e2dd] py-20 px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divider-x divide-gray-300">
                    <div className="px-4">
                        <div className="text-5xl font-serif font-bold text-[#022f24] mb-2">200+</div>
                        <div className="text-gray-700 font-medium">Locations Nationwide</div>
                    </div>
                    <div className="px-4 sm:border-l sm:border-gray-300">
                        <div className="text-5xl font-serif font-bold text-[#022f24] mb-2">15 yrs</div>
                        <div className="text-gray-700 font-medium">Industry Experience</div>
                    </div>
                    <div className="px-4 sm:border-l sm:border-gray-300">
                        <div className="text-5xl font-serif font-bold text-[#022f24] mb-2">100%</div>
                        <div className="text-gray-700 font-medium">Egg-Free Guarantee</div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 px-8 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                    Take the first step towards owning a thriving bakery business today.
                </p>
                <Link to="/partner">
                    <button className="bg-[#022f24] hover:bg-[#034233] text-white px-10 py-4 rounded-full font-medium transition-colors text-lg shadow-md hover:shadow-xl">
                        Request Franchise Information
                    </button>
                </Link>
            </div>
        </div>
    );
}
