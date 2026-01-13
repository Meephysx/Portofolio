import { Link, useLocation } from 'react-router-dom';
import { useGlobal } from '../context/GlobalContext';

const Navbar = () => {
  const location = useLocation();
  const { t, language, toggleLanguage } = useGlobal();

  // Helper simpel untuk cek link aktif
  const linkClass = (path) => 
    location.pathname === path
      ? "text-teal-400 font-bold" 
      : "text-gray-300 hover:text-white transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-teal-400">
              Porto<span className="text-white">folio</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              <Link to="/" className={linkClass('/')}>{t.nav.home}</Link>
              <Link to="/about" className={linkClass('/about')}>{t.nav.about}</Link>
              <Link to="/skills" className={linkClass('/skills')}>{t.nav.skills}</Link>
              <Link to="/projects" className={linkClass('/projects')}>{t.nav.projects}</Link>
              <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                {t.nav.contact}
              </Link>
            </div>

            {/* Pemisah Vertikal */}
            <div className="h-6 w-[1px] bg-gray-700"></div>

            {/* HANYA Tombol Bahasa */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-teal-400 transition-colors border border-gray-700 px-3 py-1 rounded hover:bg-gray-800"
            >
              <span>{language === 'en' ? '🇬🇧 English' : '🇮🇩 Indonesia'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;