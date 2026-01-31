import { motion } from 'framer-motion';

const HowToUse = () => {
  const steps = [
    {
      number: '01',
      title: 'Salin Link TikTok',
      description: 'Buka aplikasi TikTok, pilih video yang ingin diunduh, dan salin link-nya.',
      icon: 'fas fa-copy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Tempel di Website',
      description: 'Kembali ke website ini, tempel link TikTok ke kolom yang disediakan.',
      icon: 'fas fa-paste',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Proses Otomatis',
      description: 'Sistem akan secara otomatis mengekstrak video tanpa watermark.',
      icon: 'fas fa-cogs',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      title: 'Download Hasil',
      description: 'Pilih kualitas video atau audio MP3, lalu klik download.',
      icon: 'fas fa-download',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const faqs = [
    {
      question: 'Apakah benar-benar gratis?',
      answer: 'Ya, sepenuhnya gratis tanpa biaya tersembunyi. Tidak ada batasan jumlah download.'
    },
    {
      question: 'Apakah video yang diunduh bebas watermark?',
      answer: 'Benar! Semua video yang diunduh melalui layanan kami bebas dari watermark TikTok.'
    },
    {
      question: 'Berapa kualitas maksimal video?',
      answer: 'Kami menyediakan video hingga kualitas HD 720p, tergantung kualitas video asli di TikTok.'
    },
    {
      question: 'Apakah aman menggunakan layanan ini?',
      answer: 'Sangat aman. Kami tidak menyimpan data pribadi Anda dan tidak memerlukan registrasi.'
    },
    {
      question: 'Bisakah mengunduh audio saja?',
      answer: 'Ya, Anda bisa mengunduh audio terpisah dalam format MP3 berkualitas tinggi.'
    },
    {
      question: 'Apakah bisa digunakan di smartphone?',
      answer: 'Tentu! Website kami responsif dan bisa diakses dengan optimal di semua perangkat.'
    }
  ];

  return (
    <section id="howto" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* How To Use Steps */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 mb-6">
              <i className="fas fa-graduation-cap mr-2"></i>
              <span className="font-semibold">Panduan Lengkap</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cara Menggunakan <span className="gradient-text">TikTok Downloader</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hanya dengan 4 langkah sederhana, Anda bisa mengunduh video TikTok favorit tanpa watermark.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group"
                >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-300`}>
                      <i className={`${step.icon} text-white text-3xl`}></i>
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  
                  {/* Decorative Element */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-500"></div>
                      <div className="absolute inset-0 animate-ping rounded-full bg-primary-500/30"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Pertanyaan</span> yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan download TikTok kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mr-4 flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300">
                    <i className="fas fa-question text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;