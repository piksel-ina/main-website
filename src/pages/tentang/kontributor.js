import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { Map } from "lucide-react";

export default function Kontributor() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // ✅ DATA KONTRIBUTOR - GANTI SESUAI KEBUTUHAN
  const contributors = [
    {
      name: "Dr. Antonius Bambang Wijanarto",
      position: "Deputi Bidang Infrastruktur Geospasial Tematik",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/anton.jpg"
    },
    {
      name: "Dr. Gatot Haryo Pramono, B.Sc, M.App.Sc",
      position: "Direktur Pemetaan Tematik",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/gatot.jpg"
    },
    {
      name: "Muhammad Taufik",
      position: "Surveyor Pemetaan Pertama",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/taufik.jpg"
    },
    {
      name: "Ali Ammarullah",
      position: "Surveyor Pemetaan Pertama",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/ali.jpg"
    },
    {
      name: "Nama Kontributor 5",
      position: "Jabatan/Posisi",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/person5.jpg"
    },
    {
      name: "Nama Kontributor 6",
      position: "Jabatan/Posisi",
      organization: "Badan Informasi Geospasial",
      image: "/img/kontributor/person6.jpg"
    },
    {
      name: "Nama Kontributor 7",
      position: "Jabatan/Posisi",
      organization: "Geoscience Australia",
      image: "/img/kontributor/person7.jpg"
    },
    {
      name: "Nama Kontributor 8",
      position: "Jabatan/Posisi",
      organization: "Geoscience Australia",
      image: "/img/kontributor/person8.jpg"
    },
    {
      name: "Nama Kontributor 9",
      position: "Jabatan/Posisi",
      organization: "Geoscience Australia",
      image: "/img/kontributor/person9.jpg"
    },
    {
      name: "Nama Kontributor 10",
      position: "Jabatan/Posisi",
      organization: "Geoscience Australia",
      image: "/img/kontributor/person10.jpg"
    }
  ];

  // ✅ COMPONENT CARD KONTRIBUTOR
  const ContributorCard = ({ contributor }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div 
        style={{
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image Container - Fixed Aspect Ratio */}
        <div style={{ 
          position: 'relative',
          width: '100%',
          paddingTop: '100%', // 1:1 Aspect Ratio (Square)
          backgroundColor: 'var(--ifm-color-emphasis-200)',
          overflow: 'hidden'
        }}>
          {!imageError ? (
            <img 
              src={contributor.image}
              alt={contributor.name}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                userSelect: 'none',
                WebkitUserDrag: 'none'
              }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--ifm-color-emphasis-300)',
              color: 'var(--ifm-color-emphasis-600)'
            }}>
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                style={{ marginBottom: '0.5rem', opacity: 0.5 }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>Foto tidak tersedia</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ 
          padding: '1.5rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem', 
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: 'var(--ifm-font-color-base)',
            lineHeight: '1.3'
          }}>
            {contributor.name}
          </h3>
          <p style={{ 
            fontSize: '0.9rem',
            lineHeight: '1.5',
            color: 'var(--ifm-color-emphasis-700)',
            margin: 0,
            marginTop: 'auto'
          }}>
            {contributor.position}<br/>
            <span style={{ fontWeight: '500', color: 'var(--ifm-color-primary)' }}>
              {contributor.organization}
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title="Kontributor"
      description="Memahami bumi Indonesia melalui piksel"
      wrapperClassName="layout-wrapper">
      
      <main className="main-wrapper">
        {/* HERO TITLE */}
        <div style={{
          width: '100%',
          backgroundColor: 'var(--ifm-background-color)',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
          padding: '4rem 1.5rem 2rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              margin: '0',
              color: 'var(--ifm-font-color-base)',
              fontFamily: 'var(--ifm-font-family-base)',
              letterSpacing: '-0.02em'
            }}>
              <span style={{
                color: 'var(--ifm-color-primary)',
                marginRight: '0.2em'
              }}>/</span>
              Kontributor
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '1rem',
              maxWidth: '600px'
            }}>
              Tim yang membangun dan mengembangkan platform Piksel.
            </p>
          </div>
        </div>
<p></p>
        {/* MAIN CONTENT AREA */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '3rem 1.5rem',
                                            backgroundColor: 'var(--ifm-color-emphasis-100)',

          color: 'var(--ifm-font-color-base)'
        }}>
          
          {/* Section 1: Tim Inti */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '2rem',
              color: 'var(--ifm-font-color-base)',
              
              letterSpacing: '-0.01em'
            }}>
              Badan Informasi Geospasial - Geoscience Australia
            </h2>
            
            {/* ✅ GRID LAYOUT - 4 COLUMNS RESPONSIVE */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',  
                                     backgroundColor: 'var(--ifm-color-emphasis-100)',

              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {contributors.map((contributor, index) => (
                <ContributorCard key={index} contributor={contributor} />
              ))}
            </div>
          </section>

          
        </div>
<p></p>
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
      </main>
    </Layout>
  );
}
