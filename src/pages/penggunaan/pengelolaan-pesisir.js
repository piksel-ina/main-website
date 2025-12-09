import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function MyReactPage() {
  const [imageErrors, setImageErrors] = React.useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleImageError = (sectionId) => {
    setImageErrors(prev => ({ ...prev, [sectionId]: true }));
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: "ketahanan-pangan",
      title: "Ketahanan Pangan",
      description: "Data satelit mendukung pertanian presisi dengan memantau kesehatan tanaman, stres akibat kekeringan atau hama, serta kelembapan tanah untuk mengestimasi produktivitas. Informasi ini membantu merencanakan waktu tanam, penggunaan pupuk dan air, serta memprediksi hasil panen. Pemantauan satelit juga mengidentifikasi potensi gagal panen dan dampak perubahan iklim, sehingga menjadi instrumen penting dalam memastikan ketersediaan pangan nasional.",
      link: "Penggunaan",
      href: "/docs/intro",
      // Tambahkan link kedua
      //link2: "Lihat Dataset",
      //href2: "https://explorer.staging.pik-sel.id/products",
      image: "/img/penggunaan/pangan.jpg",
      bgGradient: "linear-gradient(135deg, #654321 0%, #7c5c3d 50%, #8b6f47 100%)",
      imagePosition: "right"
    },
    /*{
      id: "data-satelit",
      title: "Data Satelit untuk Pembangunan",
      description: "Data satelit menjadi elemen penting pembangunan nasional karena menyediakan informasi spasial cepat dan akurat untuk kebutuhan strategis seperti penanggulangan bencana, penggunaan lahan, lingkungan, pesisir, dan ketahanan pangan. Satelit juga mendukung pemantauan infrastruktur, kualitas udara, pola penyakit, serta perkembangan wilayah dan aktivitas ekonomi, sehingga meningkatkan efektivitas perencanaan dan pengambilan keputusan.",
      link: "Kunjungi Data Satelit",
      href: "/penggunaan/data-satelit",
      link2: "Dokumentasi",
      href2: "/docs/intro",
      image: "/img/penggunaan/sat.jpg",
      bgGradient: "linear-gradient(135deg, #1e5f74 0%, #0d3f52 50%, #0a2f3d 100%)",
      imagePosition: "right"
    }, */
    {
      id: "kebencanaan",
      title: "Kebencanaan",
      description: "Dalam penanggulangan bencana, data satelit menyediakan informasi cepat dan akurat untuk mendeteksi potensi banjir, longsor, kebakaran hutan, dan aktivitas gunung api. Informasi ini menjadi dasar sistem peringatan dini serta membantu pemetaan area terdampak secara real time untuk evakuasi, distribusi bantuan, dan perencanaan pemulihan. Dengan pemantauan berkelanjutan, satelit memberikan dukungan strategis dalam meminimalkan risiko dan mempercepat penanganan bencana.",
      link: "Penggunaan",
      href: "/docs/intro",
      //link2: "Dokumentasi",
      //href2: "/docs/intro",
      image: "/img/penggunaan/bencana.jpg",
      bgGradient: "linear-gradient(135deg, #7c2d12 0%, #991b1b 50%, #7f1d1d 100%)",
      imagePosition: "left"
    },
    {
      id: "penggunaan-lahan",
      title: "Penggunaan Lahan",
      description: "Satelit memungkinkan pemantauan perubahan tutupan lahan secara konsisten, sehingga dinamika seperti deforestasi, alih fungsi lahan, dan perluasan permukiman dapat terdeteksi dengan jelas. Informasi ini menjadi dasar penting untuk rencana tata ruang, evaluasi kesesuaian lahan, dan pengendalian pemanfaatan ruang. Pemantauan satelit juga membantu mengidentifikasi potensi konflik penggunaan lahan dan mendukung keputusan yang lebih tepat bagi keberlanjutan pembangunan.",
      link: "Penggunaan",
      href: "/docs/intro",
      //link2: "Dokumentasi",
      //href2: "/docs/intro",
      image: "/img/penggunaan/lahan.jpg",
      bgGradient: "linear-gradient(135deg, #854d0e 0%, #a16207 50%, #ca8a04 100%)",
      imagePosition: "right"
    },
    {
      id: "pemantauan-lingkungan",
      title: "Pemantauan Lingkungan",
      description: "Dalam pemantauan lingkungan, data satelit merekam kondisi ekosistem secara luas dan berkelanjutan, menilai kualitas vegetasi, perubahan ekosistem, serta parameter seperti suhu permukaan dan kekeruhan perairan. Informasi ini membantu mengidentifikasi degradasi lingkungan dan menilai dampak perubahan iklim maupun aktivitas manusia, sehingga menjadi dasar ilmiah bagi konservasi dan pengelolaan sumber daya alam yang berkelanjutan.",
      link: "Penggunaan",
      href: "/docs/intro",
      //link2: "Dokumentasi",
      //href2: "/docs/intro",
      image: "/img/penggunaan/lingkungan.jpg",
      bgGradient: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
      imagePosition: "left"
    },
    {
      id: "pengelolaan-pesisir",
      title: "Pengelolaan Pesisir",
      description: "Dalam pengelolaan pesisir, data satelit memantau perubahan garis pantai, abrasi, sedimentasi, serta kondisi ekosistem seperti mangrove dan terumbu karang. Informasi ini membantu mengidentifikasi area rentan dan mendukung perencanaan pembangunan pesisir yang aman dan berkelanjutan, termasuk penentuan zona perlindungan dan pengawasan aktivitas manusia. Dengan pemantauan jangka panjang, satelit menjadi dasar penting bagi pengelolaan pesisir terpadu.",
      link: "Penggunaan",
      href: "/docs/intro",
      //link2: "Dokumentasi",
      //href2: "/docs/intro",
      image: "/img/penggunaan/pesisir.jpg",
      bgGradient: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)",
      imagePosition: "right"
    }
  ];

  useEffect(() => {
    const element = document.getElementById('pengelolaan-pesisir');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Helper function untuk cek apakah link external
  const isExternalLink = (href) => {
    return href && (href.startsWith('http://') || href.startsWith('https://'));
  };

  return (
    <Layout
     title="Pengelolaan Pesisir"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper">
        
      {/* Container utama - gunakan CSS class */}
      <div className="sections-container">
        {sections.map((section, index) => (
          <div 
            key={index}
            id={section.id}
            className="section-card"
            style={{ scrollMarginTop: '80px' }}
          >
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                minHeight: '175px'
              }}
            >
              {/* Image Content - Kiri */}
              {section.imagePosition === 'left' && (
                <div 
                  style={{
                    flex: '0 0 235px',
                    width: '235px',
                    minHeight: '175px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'stretch',
                    backgroundColor: 'var(--ifm-color-emphasis-200)'
                  }}
                >
                  {imageErrors[section.id] ? (
                    <div className="image-fallback">
                      <svg 
                        style={{ width: '48px', height: '48px', marginBottom: '0.5rem', opacity: 0.5 }}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                        {section.title}
                      </span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>
                        Image not available
                      </span>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={section.image} 
                        alt={section.title}
                        onError={() => handleImageError(section.id)}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' 
                      }}></div>
                    </>
                  )}
                </div>
              )}
              
              {/* Text Content - Gabungan CSS Variables + Gradient */}
              <div 
                style={{
                  flex: '1',
                  minWidth: '300px',
                  minHeight: '175px',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: section.bgGradient,
                  transition: 'all var(--ifm-transition-fast)'
                }}
              >
                <h2 style={{ 
                  fontSize: '1.75rem',
                  fontWeight: 'bold', 
                  color: 'white',
                  marginBottom: '0.75rem',
                  marginTop: 0,
                  lineHeight: '1.3'
                }}>
                  {section.title}
                </h2>
                <p style={{ 
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '1rem', 
                  lineHeight: '1.6',
                  textAlign: 'justify'
                }}>
                  {section.description}
                </p>
                
                {/* Container untuk buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}>
                  {/* Button Pertama */}
                  <a 
                    href={section.href}
                    className="section-button"
                    {...(isExternalLink(section.href) && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                  >
                    {section.link}
                    {isExternalLink(section.href) && (
                      <svg 
                        style={{ 
                          marginLeft: '0.5rem', 
                          width: '14px', 
                          height: '14px',
                          display: 'inline-block',
                          verticalAlign: 'middle'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    )}
                  </a>

                  {/* Button Kedua (jika ada) */}
                  {section.link2 && section.href2 && (
                    <a 
                      href={section.href2}
                      className="section-button"
                      {...(isExternalLink(section.href2) && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                      })}
                    >
                      {section.link2}
                      {isExternalLink(section.href2) && (
                        <svg 
                          style={{ 
                            marginLeft: '0.5rem', 
                            width: '14px', 
                            height: '14px',
                            display: 'inline-block',
                            verticalAlign: 'middle'
                          }}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      )}
                    </a>
                  )}
                </div>

              </div>

              {/* Image Content - Kanan */}
              {section.imagePosition === 'right' && (
                <div 
                  style={{
                    flex: '0 0 235px',
                    width: '235px',
                    minHeight: '175px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'stretch',
                    backgroundColor: 'var(--ifm-color-emphasis-200)'
                  }}
                >
                  {imageErrors[section.id] ? (
                    <div className="image-fallback">
                      <svg 
                        style={{ width: '48px', height: '48px', marginBottom: '0.5rem', opacity: 0.5 }}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                        {section.title}
                      </span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem' }}>
                        Image not available
                      </span>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={section.image} 
                        alt={section.title}
                        onError={() => handleImageError(section.id)}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        backgroundColor: 'rgba(0, 0, 0, 0.1)' 
                      }}></div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* TOMBOL SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-button"
          aria-label="Kembali ke atas"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a1 1 0 01-1-1V5.414L5.707 8.707a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z" 
              clipRule="evenodd" 
            />
          </svg>
          <span style={{ marginLeft: '0.5rem' }}>Kembali ke Atas</span>
        </button>
      )}
    </Layout>
  );
}