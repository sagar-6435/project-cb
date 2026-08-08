import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, Headset, Menu, X } from 'lucide-react';
import GenericPage from './pages/GenericPage';
import WhyCakeBox from './pages/WhyCakeBox';
import Home from './pages/Home';
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
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 w-full overflow-x-hidden">
      {/* Header Container */}
      <div className="sticky top-0 lg:fixed lg:top-3 lg:left-0 lg:right-0 z-50 flex justify-center lg:px-4 w-full lg:pointer-events-none">

        <header className="flex items-center justify-between w-full px-6 py-4 lg:px-3 lg:py-2 bg-[#e4e2dd] lg:bg-black/30 lg:backdrop-blur-lg lg:rounded-full shadow-sm lg:shadow-lg pointer-events-auto lg:max-w-6xl lg:border lg:border-white/20 transition-all">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
              <div className="flex items-center justify-center lg:bg-white lg:rounded-full lg:p-1.5 lg:shadow-inner">
                <img src="/image.png" alt="Cake Box Logo" className="h-10 w-auto lg:h-9 lg:w-9 lg:object-cover rounded-md lg:rounded-full" />
              </div>
              <h1 className="text-2xl lg:text-xl font-serif font-bold text-gray-900 lg:text-white tracking-tight mr-2">Cake Box</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-white/80">
            <Link to="/" className={`${isActive('/') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>Home</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>About</Link>
            <Link to="/why-cake-box" className={`${isActive('/why-cake-box') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>Why Us</Link>
            <Link to="/products" className={`${isActive('/products') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>Products</Link>
            <Link to="/franchise" className={`${isActive('/franchise') || isActive('/partner') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>Franchise</Link>
            <Link to="/locations" className={`${isActive('/locations') ? 'text-white font-bold' : 'hover:text-white transition-colors'}`}>Locations</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/partner">
              <button className="bg-[#022f24] lg:bg-white hover:bg-[#034233] lg:hover:bg-gray-100 text-white lg:text-[#022f24] px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm">
                Become a Partner
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 p-2 ml-auto focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </header>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 w-full bg-[#e4e2dd] border-t border-gray-300 shadow-md lg:hidden pointer-events-auto">
            <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-semibold text-center">
              <Link to="/" onClick={closeMenu} className={`${isActive('/') ? 'text-black' : ''}`}>HOME</Link>
              <Link to="/about" onClick={closeMenu} className={`${isActive('/about') ? 'text-black' : ''}`}>ABOUT</Link>
              <Link to="/why-cake-box" onClick={closeMenu} className={`${isActive('/why-cake-box') ? 'text-black' : ''}`}>WHY CAKE BOX</Link>
              <Link to="/products" onClick={closeMenu} className={`${isActive('/products') ? 'text-black' : ''}`}>PRODUCTS</Link>
              <Link to="/franchise" onClick={closeMenu} className={`${isActive('/franchise') || isActive('/partner') ? 'text-black' : ''}`}>FRANCHISE</Link>
              <Link to="/locations" onClick={closeMenu} className={`${isActive('/locations') ? 'text-black' : ''}`}>LOCATIONS</Link>

              <Link to="/partner" onClick={closeMenu} className="pt-2">
                <button className="bg-[#022f24] text-white px-6 py-3 rounded-full text-sm font-medium w-full shadow-sm">
                  BECOME A FRANCHISE PARTNER
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>

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
