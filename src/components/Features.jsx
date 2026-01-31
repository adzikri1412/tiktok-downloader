import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-ban',
      title: 'Tanpa Watermark',
      description: 'Video yang diunduh bebas dari watermark TikTok. Hasil bersih dan profesional.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'fas fa-hd',
      title: 'Kualitas HD',
      description: 'Unduh video dalam kualitas tinggi hingga 720p tanpa kompresi berlebih.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Cepat & Efisien',
      description: 'Proses download hanya membutuhkan beberapa detik. Tidak perlu menunggu lama.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'fas fa-music',
      title: 'Ekstrak Audio MP3',
      description: 'Dapatkan audio terpisah dari video TikTok dalam format MP3 berkualitas.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Aman & Privasi',
      description: 'Tidak menyimpan data pribadi Anda. Semua proses dilakukan secara aman.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Gratis Selamanya',
      description: 'Tidak ada biaya, tidak ada batasan download, dan tanpa iklan mengganggu.',
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 dark:from-primary-900/30 dark:to-secondary-900/30 dark:text-primary-300 mb-6">
            <i className="fas fa-star mr-2"></i>
            <span className="font-semibold">Fitur Unggulan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengapa Pilih <span className="gradient-text">TikTok Downloader Kami</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami menawarkan solusi download TikTok terlengkap dengan pengalaman pengguna terbaik.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="card group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{feature.description}</p>
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                <span>Pelajari lebih lanjut</span>
                <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="mt-20 card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 gradient-text">Perbandingan Layanan</h3>
          
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20">
                  <th className="py-4 px-6 text-left rounded-tl-2xl">Fitur</th>
                  <th className="py-4 px-6 text-center">
                    <div className="font-bold gradient-text">Layanan Kami</div>
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500">ssstik.io</th>
                  <th className="py-4 px-6 text-center text-gray-500">Layanan Lain</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Tanpa Watermark', us: '✓', ssstik: '✓', others: '✓' },
                  { feature: 'Kualitas HD', us: '✓', ssstik: '✓', others: '✗' },
                  { feature: 'Download MP3', us: '✓', ssstik: '✓', others: '✗' },
                  { feature: 'Tanpa Iklan', us: '✓', ssstik: '✗', others: '✗' },
                  { feature: 'Tanpa Batas', us: '✓', ssstik: '✗', others: '✗' },
                  { feature: 'Gratis Selamanya', us: '✓', ssstik: '✓', others: '✗' },
                  { feature: 'Kecepatan Tinggi', us: '✓', ssstik: '✓', others: '✗' },
                ].map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 dark:border-gray-800 ${index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''}`}>
                    <td className="py-4 px-6 font-medium text-gray-800 dark:text-white">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                        <i className="fas fa-check text-sm"></i>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${row.ssstik === '✓' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {row.ssstik === '✓' ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${row.others === '✓' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {row.others === '✓' ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-2xl">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                <i className="fas fa-trophy text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-800 dark:text-white">Pilihan Terbaik</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Berdasarkan perbandingan di atas, layanan kami menawarkan pengalaman download TikTok terbaik dengan fitur terlengkap.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;