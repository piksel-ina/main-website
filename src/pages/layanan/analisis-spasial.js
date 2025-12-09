import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map,  FileCode2, Unplug, GitBranch, BookOpenText} from "lucide-react";

export default function MyReactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [iconErrors, setIconErrors] = useState({});

    // Error handler untuk icon (jika icon gagal render)
  const handleIconError = (sectionId) => {
    setIconErrors(prev => ({ ...prev, [sectionId]: true }));
  };
  
  // Fungsi untuk scroll ke paling atas halaman
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  // Deteksi scroll untuk show/hide button
  useEffect(() => {
    const handleScroll = () => {
      // Show button jika sudah scroll lebih dari 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: "peta",
      title: "Peta",
      description: "Layanan Peta PIKSEL menggunakan Terria.IO, platform pemetaan yang bisa dibuka langsung di browser. Dengan ini, pengguna dapat melihat dan menjelajahi berbagai data geospasial tanpa perlu menginstal aplikasi apa pun. Terria.IO memungkinkan peta ditampilkan dengan cepat, interaktif, dan mudah dipahami, sehingga siapa pun bisa melihat informasi spasial dalam bentuk visual yang jelas dan nyaman digunakan.",
      link: "Kunjungi Peta",
      href: "/layanan/peta",
      icon: Map,
      iconColor: "#8b6f47",
      imagePosition: "left"
    },
    {
      id: "analisis-spasial",
      title: "Analisis Spasial",
      description: "Layanan Analisis Spasial PIKSEL menyediakan lingkungan komputasi berbasis Jupyter yang memungkinkan pengguna mengakses dan menganalisis data Landsat dan Sentinel secara langsung. Fitur ini ditujukan bagi pengguna teknis yang ingin menguji algoritma atau mengembangkan prototipe analisis tanpa harus menyiapkan sistem sendiri. Environment ini dibangun menggunakan Docker dan Kubernetes, memanfaatkan kemampuan cloud computing seperti autoscaling dan resource management. Pengguna akan mendapatkan alokasi CPU dan RAM tersendiri, sehingga dapat menjalankan analisis Earth Observation secara efisien tanpa infrastruktur lokal. Sandbox ini mendukung bahasa pemrograman populer seperti Python, sehingga integrasi dengan berbagai pustaka geospasial dan alur kerja data science dapat dilakukan dengan mudah.",
      link: "Kunjungi Analisis Spasial",
      href: "https://sandbox.staging.pik-sel.id/",
      icon: FileCode2,
      iconColor: "#74c0fc",
      imagePosition: "right"
    },
    {
      id: "api",
      title: "Piksel Data API",
      description: "API (Application Programming Interface) merupakan mekanisme yang memungkinkan sistem atau aplikasi lain mengakses layanan dan data yang disediakan oleh PIKSEL secara terstruktur. Melalui API, pengguna dapat melakukan permintaan data, menampilkan citra, mengambil metadata, atau mengunduh informasi geospasial tanpa harus berinteraksi langsung dengan infrastruktur internal PIKSEL. API memastikan pertukaran data berlangsung konsisten, aman, dan terstandar, sehingga seluruh komponen PIKSEL serta aplikasi pihak ketiga dapat bekerja secara terhubung dan efisien.",
      link: "Kunjungi Piksel Data API",
      href: "https://github.com/piksel-ina/homepage",
      icon: Unplug,
      iconColor: "#ff6b6b",
      imagePosition: "left"
    },
    {
      id: "katalog-produk",
      title: "Katalog Produk",
      description: "Katalog Produk PIKSEL adalah tempat di mana semua data geospasial yang kami kelola dikumpulkan dan dibagikan secara terbuka. Melalui halaman ini, pengguna dapat menelusuri berbagai jenis data, memahami isi dan manfaatnya, serta melihat bagaimana data tersebut dapat digunakan untuk kebutuhan analisis, pemetaan, atau perencanaan. Tujuan kami sederhana: memastikan siapa pun dapat menemukan data yang tepat, mengetahui konteksnya, dan menggunakannya secara lebih efektif. Dengan menyediakan katalog yang terbuka dan terstruktur, kami berharap layanan PIKSEL menjadi ruang yang mendukung kolaborasi, mendorong inovasi, dan membantu lebih banyak pihak dalam membuat keputusan berbasis data.",
      link: "Kunjungi Katalog Produk",
      href: "https://explorer.staging.pik-sel.id/products",
      icon: BookOpenText,
      iconColor: "#ffd43b",
      imagePosition: "right"
    },
    
  ];

  useEffect(() => {
    const element = document.getElementById('analisis-spasial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Komponen IconDisplay dengan error handling
  const IconDisplay = ({ IconComponent, color, sectionId, title }) => {
    try {
      if (iconErrors[sectionId]) {
        // Fallback icon jika error
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg 
              style={{ width: '80px', height: '80px', opacity: 0.5 }}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', marginTop: '0.5rem', textAlign: 'center' }}>
              {title}
            </span>
          </div>
        );
      }

  return (
        <IconComponent 
          size={80} 
          color={color}
          strokeWidth={1.5}
          onError={() => handleIconError(sectionId)}
        />
      );
    } catch (error) {
      console.error(`Error rendering icon for ${sectionId}:`, error);
      handleIconError(sectionId);
      return null;
    }
  };

  return (
    <Layout title="Analisis Spasial"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper">
      {/* Container utama - gunakan CSS class */}
      <div className="sections-container">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          
          return (
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
                {/* Icon Content - Kiri */}
                {section.imagePosition === 'left' && (
                  <div 
                    style={{
                      flex: '0 0 235px',
                      width: '235px',
                      minHeight: '175px',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--ifm-color-emphasis-200)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem'
                    }}>
                      <IconComponent 
                        size={80} 
                        color={section.iconColor}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                )}
                
                {/* Text Content */}
                <div 
                  style={{
                    flex: '1',
                    minWidth: '300px',
                    minHeight: '175px',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'var(--card-bg-primary)',
                    transition: 'background-color var(--ifm-transition-fast)'
                  }}
                >
                  <h2 style={{ 
                    fontSize: '1.75rem',
                    fontWeight: 'bold', 
                    color: 'var(--card-text-primary)',
                    marginBottom: '0.75rem',
                    marginTop: 0,
                    lineHeight: '1.3'
                  }}>
                    {section.title}
                  </h2>
                  <p style={{ 
                    fontSize: '0.95rem',
                    color: 'var(--card-text-secondary)',
                    marginBottom: '1rem', 
                    lineHeight: '1.6',
                    textAlign: 'justify'
                  }}>
                    {section.description}
                  </p>
                  <a 
                  href={section.href} // ← Gunakan href dari data
                  className="section-button"
                >
                  {section.link}
                </a>
                </div>

                {/* Icon Content - Kanan */}
                {section.imagePosition === 'right' && (
                  <div 
                    style={{
                      flex: '0 0 235px',
                      width: '235px',
                      minHeight: '175px',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'var(--ifm-color-emphasis-200)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '2rem'
                    }}>
                      <IconDisplay 
                        IconComponent={IconComponent}
                        color={section.iconColor}
                        sectionId={section.id}
                        title={section.title}
                      />
                    </div>  
                  </div>
                )}
              </div>
            </div>
          );
        })}
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