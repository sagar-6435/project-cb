import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, Headset, Menu, X } from 'lucide-react';
import GenericPage from './pages/GenericPage';
import WhyCakeBox from './pages/WhyCakeBox';
import About from './pages/About';
import Products from './pages/Products';
import Locations from './pages/Locations';
import BecomePartner from './pages/BecomePartner';

// Layout Component
function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 bg-[#e4e2dd] w-full z-10 shrink-0 shadow-sm relative">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img src="/image.png" alt="Cake Box Logo" className="h-10 w-auto rounded-md shadow-sm" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-tight hidden sm:block">Cake Box</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
          <Link to="/" className={`${isActive('/') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>HOME</Link>
          <Link to="/about" className={`${isActive('/about') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>ABOUT</Link>
          <Link to="/why-cake-box" className={`${isActive('/why-cake-box') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>WHY CAKE BOX</Link>
          <Link to="/products" className={`${isActive('/products') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>PRODUCTS</Link>
          <Link to="/franchise" className={`${isActive('/franchise') || isActive('/partner') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>FRANCHISE</Link>
          <Link to="/locations" className={`${isActive('/locations') ? 'border-b-2 border-black pb-1 text-black' : 'hover:text-black transition-colors'}`}>LOCATIONS</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/partner">
            <button className="bg-[#022f24] hover:bg-[#034233] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
              BECOME A FRANCHISE PARTNER
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#e4e2dd] w-full border-t border-gray-300 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-semibold text-center">
            <Link to="/" onClick={closeMenu} className={`${isActive('/') ? 'text-black' : ''}`}>HOME</Link>
            <Link to="/about" onClick={closeMenu} className={`${isActive('/about') ? 'text-black' : ''}`}>ABOUT</Link>
            <Link to="/why-cake-box" onClick={closeMenu} className={`${isActive('/why-cake-box') ? 'text-black' : ''}`}>WHY CAKE BOX</Link>
            <Link to="/products" onClick={closeMenu} className={`${isActive('/products') ? 'text-black' : ''}`}>PRODUCTS</Link>
            <Link to="/franchise" onClick={closeMenu} className={`${isActive('/franchise') || isActive('/partner') ? 'text-black' : ''}`}>FRANCHISE</Link>
            <Link to="/locations" onClick={closeMenu} className={`${isActive('/locations') ? 'text-black' : ''}`}>LOCATIONS</Link>
            <Link to="/partner" onClick={closeMenu} className="pt-2">
              <button className="bg-[#022f24] text-white px-6 py-3 rounded-full text-sm font-medium w-full">
                BECOME A FRANCHISE PARTNER
              </button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-stretch">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#022f24] text-white py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <img src="/image.png" alt="Cake Box Logo" className="h-12 w-auto rounded-md shadow-sm opacity-90" />
            <h2 className="text-4xl font-serif font-bold">Cake Box</h2>
          </div>
          <p className="text-white/70 text-sm max-w-xs">
            &copy; 2024 Cake Box. Artisanal Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          <Link to="/franchise" className="text-white/80 hover:text-white transition-colors text-sm">Franchise Info</Link>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Sustainability</a>
        </div>
      </footer>
    </div>
  );
}

// Home Page Component
function Home() {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-center items-center text-center px-4 flex-grow">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Cake Box Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-white text-sm font-bold tracking-[0.2em] mb-6 uppercase">
          Bakery &bull; Celebrations &bull; Franchise
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium mb-10 leading-tight">
          Turn Your Passion for Baking Into a <span className="text-[#e2933f]">Profitable Business</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link to="/partner">
            <button className="flex items-center justify-center gap-2 bg-[#022f24] hover:bg-[#034233] text-white px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto">
              BECOME A FRANCHISE PARTNER <ArrowRight size={18} />
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto mt-4 sm:mt-0">
              EXPLORE CAKE BOX
            </button>
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-3xl h-px bg-white/30 mb-8"></div>

        {/* Features Row */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl text-white">
          <div className="flex items-center gap-3 py-2">
            <TrendingUp size={24} />
            <span className="font-semibold text-sm uppercase tracking-wider">Growing Brand</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <Star size={24} />
            <span className="font-semibold text-sm uppercase tracking-wider">Premium Products</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <Headset size={24} />
            <span className="font-semibold text-sm uppercase tracking-wider">Franchise Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// App Component with Routing
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-cake-box" element={<WhyCakeBox />} />
          <Route path="/products" element={<Products />} />
          <Route path="/franchise" element={<BecomePartner />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/partner" element={<BecomePartner />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
