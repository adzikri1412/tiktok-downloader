import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import axios from 'axios';

const Downloader = ({ theme }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadData, setDownloadData] = useState(null);
  const [activeTab, setActiveTab] = useState('video');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  // Simulated API function - In production, replace with actual TikTok API
  const fetchVideoInfo = async (tiktokUrl) => {
    setLoading(true);
    setError('');
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Validate URL
      if (!tiktokUrl.includes('tiktok.com')) {
        throw new Error('URL TikTok tidak valid. Contoh: https://www.tiktok.com/@user/video/123456789');
      }
      
      // Mock response data
      const mockData = {
        success: true,
        videoId: 'video_' + Math.random().toString(36).substr(2, 9),
        thumbnail: `https://picsum.photos/seed/${Date.now()}/720/1280`,
        author: {
          username: '@tiktokuser',
          nickname: 'TikTok Creator',
          avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
        },
        description: 'Contoh video TikTok yang menarik untuk diunduh tanpa watermark!',
        stats: {
          likes: Math.floor(Math.random() * 1000000).toLocaleString(),
          comments: Math.floor(Math.random() * 10000).toLocaleString(),
          shares: Math.floor(Math.random() * 50000).toLocaleString()
        },
        downloads: {
          video: [
            { quality: 'HD (720p)', size: '4.2 MB', url: '#' },
            { quality: 'SD (480p)', size: '2.8 MB', url: '#' },
            { quality: 'Low (360p)', size: '1.5 MB', url: '#' }
          ],
          audio: [
            { format: 'MP3', size: '0.8 MB', url: '#' },
            { format: 'M4A', size: '0.9 MB', url: '#' }
          ]
        }
      };
      
      setDownloadData(mockData);
      
      // Add to history
      const newHistory = [
        { url: tiktokUrl, timestamp: new Date().toLocaleString(), id: mockData.videoId },
        ...history.slice(0, 4)
      ];
      setHistory(newHistory);
      localStorage.setItem('tiktokDownloadHistory', JSON.stringify(newHistory));
      
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan. Pastikan URL TikTok valid.');
      setDownloadData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Masukkan URL TikTok terlebih dahulu');
      return;
    }
    fetchVideoInfo(url);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('tiktokDownloadHistory');
  };

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('tiktokDownloadHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  return (
    <section id="downloader" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Download Sekarang</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tempelkan URL TikTok di bawah ini. Kami akan mengekstrak dan memberikan opsi download tanpa watermark.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card shadow-2xl">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mr-4">
                    <i className="fas fa-link text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Tempel URL TikTok</h3>
                    <p className="text-gray-600 dark:text-gray-400">Contoh: https://www.tiktok.com/@username/video/123456789</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value);
                        setError('');
                      }}
                      placeholder="Tempel link TikTok di sini..."
                      className="w-full px-6 py-5 text-lg rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-700 focus:outline-none transition-all duration-300"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.readText().then(text => {
                          if (text.includes('tiktok.com')) {
                            setUrl(text);
                          }
                        });
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <i className="fas fa-paste mr-2"></i>Tempel
                    </button>
                  </div>
                  
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400"
                    >
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      {error}
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-1 py-5 text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <LoadingSpinner size="sm" />
                          <span className="ml-3">Memproses...</span>
                        </span>
                      ) : (
                        <>
                          <i className="fas fa-bolt mr-3"></i>
                          Download TikTok
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setUrl('')}
                      className="btn-secondary py-5 px-8 text-lg font-semibold"
                      disabled={loading}
                    >
                      <i className="fas fa-redo mr-3"></i>
                      Reset
                    </button>
                  </div>
                </form>
                
                {/* Tips */}
                <div className="mt-8 p-5 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl">
                  <div className="flex items-start">
                    <i className="fas fa-lightbulb text-primary-600 dark:text-primary-400 text-xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-2">Tips Cepat:</h4>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-2 text-sm"></i>
                          Salin URL langsung dari aplikasi TikTok
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-2 text-sm"></i>
                          Video akan tersedia dalam berbagai kualitas
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check text-green-500 mr-2 text-sm"></i>
                          Audio MP3 tersedia untuk download terpisah
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* History */}
              {history.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                      <i className="fas fa-history mr-2"></i>
                      Riwayat Download
                    </h4>
                    <button
                      onClick={clearHistory}
                      className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                    >
                      <i className="fas fa-trash-alt mr-1"></i>Hapus
                    </button>
                  </div>
                  <div className="space-y-3">
                    {history.slice(0, 3).map((item) => (
                      <div 
                        key={item.id} 
                        className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer flex justify-between items-center"
                        onClick={() => setUrl(item.url)}
                      >
                        <div className="truncate flex-1 mr-4">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{item.url}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-500">{item.timestamp}</div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(item.url);
                          }}
                          className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        >
                          <i className="fas fa-copy"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {downloadData ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card shadow-2xl h-full"
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Hasil</h3>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                          <i className="fas fa-check-circle mr-1"></i>
                          Siap
                        </span>
                        <button
                          onClick={() => {
                            setDownloadData(null);
                            setError('');
                          }}
                          className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Thumbnail */}
                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={downloadData.thumbnail} 
                        alt="Thumbnail TikTok"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <div className="font-bold truncate">{downloadData.description}</div>
                          <div className="text-sm opacity-90">{downloadData.author.nickname}</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                        <i className="fab fa-tiktok text-white text-xl"></i>
                      </div>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                      <img 
                        src={downloadData.author.avatar} 
                        alt={downloadData.author.username}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 dark:text-white">{downloadData.author.nickname}</div>
                        <div className="text-gray-600 dark:text-gray-400">{downloadData.author.username}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(downloadData.author.username)}
                        className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400"
                      >
                        <i className="fas fa-copy"></i>
                      </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">{downloadData.stats.likes}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-heart mr-1"></i> Likes
                        </div>
                      </div>
                      <div className="text-center p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">{downloadData.stats.comments}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-comment mr-1"></i> Komentar
                        </div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">{downloadData.stats.shares}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-share mr-1"></i> Shares
                        </div>
                      </div>
                    </div>
                    
                    {/* Download Tabs */}
                    <div className="mb-6">
                      <div className="flex border-b border-gray-200 dark:border-gray-700">
                        <button
                          onClick={() => setActiveTab('video')}
                          className={`flex-1 py-3 font-semibold ${activeTab === 'video' 
                            ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500' 
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                          <i className="fas fa-video mr-2"></i>Video
                        </button>
                        <button
                          onClick={() => setActiveTab('audio')}
                          className={`flex-1 py-3 font-semibold ${activeTab === 'audio' 
                            ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-500' 
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                          <i className="fas fa-music mr-2"></i>Audio
                        </button>
                      </div>
                      
                      <div className="mt-6">
                        <AnimatePresence mode="wait">
                          {activeTab === 'video' ? (
                            <motion.div
                              key="video"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-4"
                            >
                              {downloadData.downloads.video.map((option, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                  <div>
                                    <div className="font-bold text-gray-800 dark:text-white">{option.quality}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{option.size}</div>
                                  </div>
                                  <a
                                    href={option.url}
                                    className="btn-primary px-6 py-2 text-sm"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      // Simulate download
                                      setLoading(true);
                                      setTimeout(() => {
                                        setLoading(false);
                                        alert(`Download ${option.quality} dimulai!`);
                                      }, 1000);
                                    }}
                                  >
                                    <i className="fas fa-download mr-2"></i>Download
                                  </a>
                                </div>
                              ))}
                            </motion.div>
                          ) : (
                            <motion.div
                              key="audio"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-4"
                            >
                              {downloadData.downloads.audio.map((option, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                  <div>
                                    <div className="font-bold text-gray-800 dark:text-white">{option.format}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{option.size}</div>
                                  </div>
                                  <a
                                    href={option.url}
                                    className="btn-primary px-6 py-2 text-sm"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      // Simulate download
                                      setLoading(true);
                                      setTimeout(() => {
                                        setLoading(false);
                                        alert(`Download audio ${option.format} dimulai!`);
                                      }, 1000);
                                    }}
                                  >
                                    <i className="fas fa-download mr-2"></i>Download
                                  </a>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl">
                      <div className="flex items-center text-sm">
                        <i className="fas fa-shield-alt text-primary-600 dark:text-primary-400 mr-3 text-lg"></i>
                        <div className="text-gray-700 dark:text-gray-300">
                          <span className="font-semibold">Aman & Terpercaya:</span> Download tanpa watermark, tanpa iklan, dan tanpa registrasi.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card shadow-2xl h-full flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center mb-6">
                    <i className="fas fa-cloud-download-alt text-4xl gradient-text"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Hasil Download Akan Muncul Di Sini</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Tempel URL TikTok di kolom sebelah kiri, lalu klik "Download TikTok" untuk melihat opsi download.
                  </p>
                  <div className="space-y-4 w-full">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full shimmer"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full shimmer" style={{width: '80%'}}></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full shimmer" style={{width: '60%'}}></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Downloader;
