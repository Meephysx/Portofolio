import { Link } from 'react-router-dom';
// Menggunakan foto lokal kamu
import profileImg from '../assets/gw.jpg'; 
// Menggunakan motion/react sesuai setup kamu
import { motion } from 'motion/react'; 
// Import context untuk fitur bahasa
import { useGlobal } from '../context/GlobalContext';

const Home = () => {
  // Ambil data terjemahan (t) dari context
  const { t } = useGlobal();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 pt-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {/* Menggunakan variabel bahasa */}
            {t.home.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Aldi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {t.home.role}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {t.home.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/projects" className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-bold transition-transform hover:scale-105">
              {t.home.btn_project}
            </Link>
            <a
              href="/cv_aldiansyah.pdf"
              download
              className="px-8 py-3 bg-transparent border-2 border-teal-600 text-teal-400 hover:bg-teal-600/10 rounded-full font-bold transition-transform hover:scale-105 text-center inline-block"
            >
              {t.home.btn_cv}
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto */}
        <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Lingkaran border dekorasi */}
            <div className="absolute inset-0 border-4 border-teal-500/30 rounded-full animate-pulse"></div>
            {/* Foto Profil */}
            <img 
              src={profileImg} 
              alt="Aldi Profile" 
              className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl shadow-teal-500/20"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Home;