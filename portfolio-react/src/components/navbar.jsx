// src/components/navbar.jsx
import { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';

const Navbar = () => {
  const { t, language, toggleLanguage } = useGlobal();
  const [isOpen, setIsOpen] = useState(false); // State buat buka/tutup menu HP

  // Daftar Link biar kodenya rapi
  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-teal-400">
              Porto<span className="text-white">folio</span>
            </a>
          </div>

          {/* Menu Desktop (Laptop) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-teal-400 transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Tombol Bahasa */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-teal-400 border border-gray-700 px-3 py-1 rounded hover:bg-gray-800"
            >
              {language === 'en' ? '🇬🇧 EN' : '🇮🇩 ID'}
            </button>
          </div>

          {/* Tombol Menu HP (Hamburger) */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage} 
              className="text-xs font-bold text-gray-300 border border-gray-700 px-2 py-1 rounded"
            >
              {language === 'en' ? 'EN' : 'ID'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown HP */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
                className="text-gray-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;