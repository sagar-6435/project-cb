import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';

export default function Home() {
    const galleryImages = [
        '/cat_wedding.png', '/cat_birthday.png', '/cat_custom.png',
        '/cat_desserts.png', '/cat_fondant.png', '/cat_snacks.png',
        '/cat_party.png', '/image.png'
    ];

    return (
        <div className="flex-grow bg-white flex flex-col">
            {/* 1. Hero */}
            <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-center items-center text-center px-4">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Cake Box Bakery" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12">
                    <p className="text-white text-sm font-bold tracking-[0.2em] mb-6 uppercase">
                        Cake Box
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
                        A Little More Happiness in Every Bite.
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
                        Freshly crafted cakes and delicious treats made to make your celebrations sweeter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <Link to="/products">
                            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto">
                                Explore Cake Box
                            </button>
                        </Link>
                        <Link to="/partner">
                            <button className="flex items-center justify-center gap-2 bg-[#022f24] hover:bg-[#034233] text-white px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto">
                                Become a Franchise Partner <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. Brand Statement */}
            <div className="py-24 px-8 text-center bg-[#e4e2dd]">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                        Made With Love.<br />Created to Celebrate.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                        At Cake Box, every creation is made to add something special to your moments.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        From a simple craving to a once-in-a-lifetime celebration, we're here to make every occasion a little sweeter.
                    </p>
                </div>
            </div>

            {/* 3. Visual Showcase */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-0">
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {galleryImages.map((src, i) => (
                            <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-xl">
                                <img style={{ height: `${Math.floor(Math.random() * (400 - 250 + 1) + 250)}px` }} src={src} alt="Cake Box Highlight" className="w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay text */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
                    <div className="bg-white/80 backdrop-blur-md px-10 py-5 rounded-full shadow-2xl border border-white/50 transform -translate-y-8">
                        <p className="font-serif text-2xl md:text-3xl font-bold text-[#022f24] shadow-sm">Sweet moments. Beautiful memories.</p>
                    </div>
                </div>
            </div>

            {/* 4. Short Brand Message */}
            <div className="py-24 px-8 text-center bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        Where Every Celebration Feels Special
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                        Whether it's a birthday, anniversary, wedding, surprise, or simply a day worth celebrating, Cake Box is made to be part of your happiest moments.
                    </p>
                    <Link to="/about">
                        <button className="flex justify-center flex-row items-center gap-2 bg-[#022f24] hover:bg-[#034233] text-white px-8 py-4 rounded-full font-bold transition-colors mx-auto">
                            Discover Our Story <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* 5. Franchise CTA */}
            <div className="bg-[#022f24] py-24 px-8 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[#e2933f] font-semibold tracking-widest uppercase text-sm mb-4">Bring Cake Box to Your City</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                        Your City. Your Cake Box.<br />Your Journey.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                        We're growing, and we're looking for passionate people who want to build something special with us.
                    </p>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
                        Interested in becoming a Cake Box franchise partner?
                    </p>
                    <Link to="/partner">
                        <button className="flex items-center flex-row justify-center gap-2 bg-white hover:bg-gray-100 text-[#022f24] px-8 py-4 rounded-full font-bold transition-colors mx-auto shadow-lg">
                            Become a Franchise Partner <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* 6. Instagram Section */}
            <div className="py-24 bg-white text-center">
                <div className="max-w-2xl mx-auto px-4 mb-12">
                    <div className="flex justify-center mb-6 text-[#022f24]">
                        <Camera size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">A Glimpse of Cake Box</h3>
                    <p className="text-gray-900 font-semibold mb-2">@cakeboxeatery</p>
                    <p className="text-gray-600">Follow us for cakes, celebrations, new creations, and everything Cake Box.</p>
                </div>

                {/* 6 IG Style Images */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
                        {galleryImages.slice(0, 6).map((src, i) => (
                            <a key={i} href="#" className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group block shadow-sm">
                                <img src={src} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                                    <Camera className="text-white w-8 h-8" />
                                </div>
                            </a>
                        ))}
                    </div>
                    <a href="#" className="inline-flex justify-center items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md">
                        Follow Us on Instagram <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* 7. Final CTA */}
            <div className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-center items-center text-center px-4 mt-auto">
                <div className="absolute inset-0 z-0">
                    <img src="/cat_wedding.png" alt="Cake Box Celebrations" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
                        Let's Make Life a<br />Little Sweeter.
                    </h2>
                    <p className="text-xl text-white/90 mb-12 font-medium tracking-wide">
                        Cake Box — Celebrate your Happiness.
                    </p>
                    <Link to="/partner">
                        <button className="flex justify-center items-center gap-2 bg-[#e2933f] hover:bg-[#d68532] text-white px-8 py-4 rounded-full font-bold transition-colors shadow-2xl">
                            Become a Franchise Partner <ArrowRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
