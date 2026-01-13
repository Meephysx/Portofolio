const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Aldi. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;