import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "motion/react"; // Pastikan library ini sudah terinstall
import { useGlobal } from '../context/GlobalContext';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const { t, language } = useGlobal(); // Ambil language juga untuk logika teks tombol

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_hvs5z9r', 
        'template_hee59vb', 
        form.current, 
        'lrIhvKo_62OxLNE-A'
      )
      .then(
        () => {
          // Pesan alert menyesuaikan bahasa
          alert(language === 'en' ? 'Message sent successfully!' : 'Pesan berhasil terkirim!');
          setIsSending(false);
          e.target.reset(); 
        },
        (error) => {
          alert(language === 'en' ? 'Failed to send message, please try again.' : 'Gagal mengirim pesan, silakan coba lagi.');
          console.error('FAILED...', error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-teal-400 mb-12">
        {t.contact.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">{t.contact.subtitle}</h3>
          <p className="text-gray-400 leading-relaxed">{t.contact.desc}</p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-4 text-gray-300 group">
              <span className="bg-gray-800 p-3 rounded-full text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">📧</span>
              <span className="font-medium">arthurartoria12@gmail.com</span>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300 group">
              <span className="bg-gray-800 p-3 rounded-full text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">🐙</span>
              <a href="https://github.com/Meephysx" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition font-medium">
                Meephysx
              </a>
            </div>

            <div className="flex items-center space-x-4 text-gray-300 group">
              <span className="bg-gray-800 p-3 rounded-full text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">💼</span>
              <a href="https://www.linkedin.com/in/aldynsyh/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition font-medium">
                Muhammad Zulfan Maulana Aldiansyah
              </a>
            </div>

            <div className="flex items-center space-x-4 text-gray-300 group">
              <span className="bg-gray-800 p-3 rounded-full text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">📸</span>
              <a href="https://www.instagram.com/aldi.portofolio_?igsh=MXdmc2R2a2tpczkweQ==" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition font-medium">
                aldi.portofolio
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl"
        >
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-300 mb-2">{t.contact.form.name}</label>
            <input 
              type="text" 
              name="user_name" 
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" 
              placeholder={t.contact.form.placeholder_name} 
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-300 mb-2">{t.contact.form.email}</label>
            <input 
              type="email" 
              name="user_email"
              required 
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" 
              placeholder="email@example.com" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-300 mb-2">{t.contact.form.message}</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
              placeholder={t.contact.form.placeholder_msg}
            />
          </div>
          <button 
            type="submit" 
            disabled={isSending}
            className={`w-full font-bold py-3 px-6 rounded-lg transition-all transform active:scale-95 ${
              isSending 
              ? 'bg-gray-600 cursor-not-allowed text-gray-400' 
              : 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-500/20'
            }`}
          >
            {isSending 
              ? (language === 'en' ? 'Sending...' : 'Sedang Mengirim...') 
              : t.contact.form.send
            }
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;