import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Phone } from 'lucide-react';

const locations = [
    {
        city: 'Sathupally',
        desc: 'Serving customers with cakes, desserts, celebration products, and more.',
        phone: '9977884479'
    },
    {
        city: 'Tanuku',
        desc: 'A destination for cakes, celebrations, desserts, and delicious treats.',
        phone: '9988866616'
    },
    {
        city: 'Kakinada',
        desc: 'Experience the Cake Box range for birthdays, celebrations, and everyday cravings.',
        phone: '9993999528'
    }
];

export default function Locations() {
    return (
        <div className="flex-grow bg-white">
            {/* Page Heading */}
            <div className="text-center px-4 max-w-4xl mx-auto mb-4 mt-2 lg:mt-8 pt-6 lg:pt-24">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight">
                    Our Locations
                </h1>
            </div>

            {/* Locations List */}
            <div className="pt-8 pb-24 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col gap-8">
                    {locations.map((loc, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4 mb-6 md:mb-0 text-left">
                                <MapPin className="w-8 h-8 text-[#022f24] shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Cake Box — {loc.city}</h3>
                                    <p className="text-gray-600 mb-3">{loc.desc}</p>
                                    <div className="flex items-center gap-2 font-medium text-[#022f24]">
                                        <Phone size={18} />
                                        <a href={`tel:${loc.phone}`} className="hover:underline">{loc.phone}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-medium transition-colors">
                                    <Navigation size={18} /> Get Directions
                                </button>
                                <a href={`tel:${loc.phone}`} className="inline-flex items-center justify-center gap-2 bg-[#022f24] hover:bg-[#034233] text-white px-6 py-3 rounded-full font-medium transition-colors">
                                    <Phone size={18} /> Contact Store
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Franchise Callout */}
            <div className="bg-[#022f24] text-white py-24 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">We're Growing</h2>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                        We're building the Cake Box journey one location at a time. If you don't currently have a Cake Box near you, you could be the one to bring it to your city.
                    </p>
                    <div className="mb-16">
                        <Link to="/partner">
                            <button className="bg-[#e2933f] hover:bg-[#cf8332] text-white px-8 py-4 rounded-full font-medium transition-colors">
                                Become a Franchise Partner &rarr;
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mt-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-serif font-bold mb-4">Want Cake Box in Your City?</h3>
                        <p className="text-white/70 mb-8">Your City Could Be Next. If you're interested in opening a Cake Box franchise in your city, we'd love to hear from you.</p>
                        <Link to="/partner">
                            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors">
                                Bring Cake Box to My City
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
