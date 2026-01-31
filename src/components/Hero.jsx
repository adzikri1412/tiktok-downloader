import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 mb-6">
              <i className="fas fa-bolt mr-2"></i>
              <span className="font-semibold">#1 TikTok Downloader Indonesia</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Download TikTok</span>
              <br />
              <span className="text-gray-800 dark:text-white">Tanpa Watermark</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
              Unduh video TikTok dengan kualitas HD, tanpa watermark, dan gratis sepenuhnya. 
              Dapatkan audio MP3 dengan satu klik. Lebih cepat dari ssstik.io!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg py-4 px-8"
              >
                <i className="fas fa-download mr-3"></i>
                Mulai Download Gratis
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg py-4 px-8"
              >
                <i className="fas fa-play-circle mr-3"></i>
                Lihat Demo
              </motion.button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Gratis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">HD</div>
                <div className="text-gray-600 dark:text-gray-400">Kualitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">No Ads</div>
                <div className="text-gray-600 dark:text-gray-400">Tanpa Iklan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">∞</div>
                <div className="text-gray-600 dark:text-gray-400">Tak Terbatas</div>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image/Animation */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative w-80 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-purple-500 to-secondary-500 rounded-[3rem] p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.8rem] p-4 relative overflow-hidden">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full rounded-3xl overflow-hidden relative">
                      {/* TikTok Video Preview */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                            <i className="fab fa-tiktok text-2xl text-white"></i>
                          </div>
                          <div className="text-white font-bold text-lg">Download TikTok</div>
                          <div className="text-gray-400 text-sm">No Watermark</div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <i className="fas fa-music text-primary-300 text-sm"></i>
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary-500/20 flex items-center justify-center">
                        <i className="fas fa-video text-secondary-300 text-sm"></i>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
                        <i className="fas fa-download text-white text-lg"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-primary-300/30 animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -left-4 w-8 h-8 rounded-full bg-secondary-300/30 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-8 w-5 h-5 rounded-full bg-purple-300/30 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;