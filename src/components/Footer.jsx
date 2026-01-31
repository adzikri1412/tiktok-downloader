import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Simulate subscription
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const footerLinks = {
    Layanan: [
      { name: 'Download Video', href: '#downloader' },
      { name: 'Download MP3', href: '#downloader' },
      { name: 'Tanpa Watermark', href: '#features' },
      { name: 'Kualitas HD', href: '#features' },
    ],
    Perusahaan: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Kontak', href: '#contact' },
      { name: 'Karir', href: '#' },
    ],
    Legal: [
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Syarat Penggunaan', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'DMCA', href: '#' },
    ],
    Sosial: [
      { name: 'GitHub', href: 'https://github.com', icon: 'fab fa-github' },
      { name: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
      { name: 'Discord', href: 'https://discord.com', icon: 'fab fa-discord' },
      { name: 'Telegram', href: 'https://telegram.org', icon: 'fab fa-telegram' },
    ],
  };

  return (
    <footer className="pt-20 pb-10 px-4 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                <i className="fab fa-tiktok text-white text-xl"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">TikTokDownloader</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">No Watermark • Free • Unlimited</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Layanan download TikTok terbaik tanpa watermark. Unduh video dan audio TikTok dengan mudah, 
              cepat, dan gratis. Dukung kreator dengan menghargasi konten mereka.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                Dapatkan Pembaruan & Tips
              </h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-3 rounded-l-2xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-r-2xl bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-semibold hover:shadow-lg transition-shadow duration-300"
                >
                  {subscribed ? (
                    <span className="flex items-center">
                      <i className="fas fa-check mr-2"></i> Terkirim!
                    </span>
                  ) : (
                    'Berlangganan'
                  )}
                </button>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Kami tidak akan mengirim spam. Batalkan kapan saja.
              </p>
            </div>
          </div>
          
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 flex items-center"
                    >
                      {link.icon && <i className={`${link.icon} mr-3 text-lg`}></i>}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TikTok Downloader. All rights reserved. 
              <span className="mx-2">•</span>
              Made with <i className="fas fa-heart text-red-500 mx-1"></i> for TikTok users worldwide.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i className="fab fa-cc-visa text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i className="fab fa-cc-mastercard text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-color-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i className="fab fa-cc-paypal text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <i className="fab fa-google-pay text-2xl"></i>
              </a>
            </div>
          </div>
          
          {/* Back to Top */}
          <div className="text-center mt-8">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <i className="fas fa-arrow-up mr-2"></i> Kembali ke Atas
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;