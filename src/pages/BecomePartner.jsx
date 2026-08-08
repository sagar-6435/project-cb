import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const supportAreas = [
    {
        title: 'Branding',
        desc: 'Build your outlet around the Cake Box brand identity.'
    },
    {
        title: 'Store Setup',
        desc: 'Receive guidance throughout the process of setting up your outlet.'
    },
    {
        title: 'Products',
        desc: 'Access guidance around the Cake Box product range and offerings.'
    },
    {
        title: 'Training',
        desc: 'Understand the operational and customer experience requirements.'
    },
    {
        title: 'Marketing',
        desc: 'Get guidance to introduce and promote your Cake Box outlet in your market.'
    },
    {
        title: 'Launch',
        desc: 'Prepare your outlet and team for a successful opening.'
    },
    {
        title: 'Ongoing Support',
        desc: 'Continue your journey with support and guidance from the Cake Box team.'
    }
];

const journeySteps = [
    { num: '01', title: 'Submit Your Enquiry', desc: 'Tell us about yourself, your city, and your franchise interest.' },
    { num: '02', title: 'Connect With Our Team', desc: 'Our team will understand your requirements and discuss the opportunity with you.' },
    { num: '03', title: 'Discuss Your Location', desc: "We'll discuss your preferred city, location, market, and business requirements." },
    { num: '04', title: 'Plan Your Outlet', desc: 'Once the opportunity moves forward, work through the store planning and setup process.' },
    { num: '05', title: 'Training & Preparation', desc: 'Prepare your team and operations before launch.' },
    { num: '06', title: 'Launch Your Cake Box', desc: 'Open your doors and start your Cake Box journey.' },
];

export default function BecomePartner() {
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', city: '', state: '', location: '', investment: '', experience: '', message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry. Our team will contact you soon.');
    };

    return (
        <div className="flex-grow bg-white">
            {/* Hero Section */}
            <div className="bg-[#022f24] text-white py-24 px-8 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <p className="text-[#e2933f] font-semibold tracking-widest uppercase text-sm mb-4">Cake Box Franchise</p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                        Build Your Own <br className="hidden md:block" /> Cake Box
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Bring the Cake Box experience to your city and build a bakery business with a growing brand.
                        Whether you're an entrepreneur looking for your next opportunity or someone passionate about the food and bakery industry, Cake Box offers an opportunity to become part of our journey.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#apply" className="bg-[#e2933f] hover:bg-[#cf8332] text-white px-8 py-4 rounded-full font-medium transition-colors text-lg text-center">
                            Apply for Franchise
                        </a>
                        <a href="#talk" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg text-center">
                            Talk to Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Why Franchise */}
            <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3 sticky top-32">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                        Why Become a Cake Box Franchise Partner?
                    </h2>
                    <div className="w-16 h-1 bg-[#022f24] mb-8"></div>
                    <p className="text-lg text-gray-700 mb-6">
                        Starting independently can mean building everything from scratch.
                    </p>
                    <p className="text-lg text-gray-700">
                        With a franchise partnership, you can build your business around an established brand identity, product concept, operational guidance, and ongoing support.
                    </p>
                </div>

                <div className="lg:w-2/3">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">You Get Support With:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {supportAreas.map((item, i) => (
                            <div key={i} className="bg-[#e4e2dd] p-6 rounded-2xl flex items-start gap-4">
                                <CheckCircle2 className="text-[#022f24] w-6 h-6 shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-700">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How it Works / Journey */}
            <div className="bg-gray-50 py-24 px-8 border-y border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-[#e2933f] font-medium tracking-widest uppercase text-sm">Your Journey to Cake Box</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {journeySteps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                                <div className="text-5xl font-serif font-black text-gray-100 absolute top-4 right-4">{step.num}</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Who Can Apply */}
            <div className="py-24 px-8 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Who Can Become a Franchise Partner?</h2>
                <p className="text-lg text-gray-700 mb-8">
                    You don't necessarily need to be a professional baker. Cake Box franchise opportunities can be suitable for:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {['Aspiring entrepreneurs', 'Existing business owners', 'Bakery & food industry professionals', 'Investors looking for a business opportunity', 'People passionate about food and hospitality'].map((item, i) => (
                        <span key={i} className="bg-[#022f24] text-white px-5 py-2 rounded-full text-sm font-medium">{item}</span>
                    ))}
                </div>
                <p className="text-sm text-gray-500 italic">
                    Note: Final franchise eligibility and requirements are subject to Cake Box's franchise evaluation process.
                </p>
            </div>

            {/* Application Form */}
            <div id="apply" className="bg-[#e4e2dd] py-24 px-8">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                    <div className="text-center mb-10">
                        <p className="text-[#022f24] font-semibold uppercase tracking-widest text-sm mb-2" id="talk">Let's Talk About Your City</p>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">Is Cake Box Coming to Your City?</h2>
                        <p className="text-gray-600 mt-4">Tell us where you want to open a Cake Box outlet and a little about yourself.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Location (if any)</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Investment Range</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none bg-white">
                                    <option>Select Range</option>
                                    <option>Below standard estimate</option>
                                    <option>At standard estimate</option>
                                    <option>Flexible</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Experience</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none bg-white">
                                    <option>Select Experience</option>
                                    <option>None</option>
                                    <option>Less than 1 year</option>
                                    <option>1-3 years</option>
                                    <option>3+ years</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#022f24] focus:border-transparent outline-none transition-shadow"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#022f24] hover:bg-[#034233] text-white py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center gap-2">
                            Submit Franchise Enquiry <ArrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-[#022f24] text-white py-24 px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Your City Deserves a Cake Box.</h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Let's build something people love — together.
                </p>
                <a href="#apply" className="inline-flex items-center gap-2 bg-white text-[#022f24] hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-colors text-lg shadow-lg">
                    Start Your Franchise Journey <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}
