import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

const SidebarFooter = () => (
  <div style={{
    padding: '1.5rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    background: 'rgba(10, 14, 26, 0.4)',
    backdropFilter: 'blur(10px)',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  }}>
    <div style={{
      fontFamily: '"Oswald", sans-serif', 
      fontSize: '0.85rem', 
      color: '#fff', 
      letterSpacing: '0.5px',
      marginBottom: '0.5rem',
      opacity: 0.8
    }}>
      RESOURCES
    </div>
    <a href="https://github.com/piksel-ina" target="_blank" rel="noreferrer" style={{color:'#a0aec0', textDecoration:'none', fontSize:'0.9rem', transition:'color 0.2s'}}>Github</a>
    <a href="mailto:piksel@big.go.id" style={{color:'#a0aec0', textDecoration:'none', fontSize:'0.9rem', transition:'color 0.2s'}}>Contact</a>
    <a href="/docs/about" style={{color:'#a0aec0', textDecoration:'none', fontSize:'0.9rem', transition:'color 0.2s'}}>Collaborate</a>
  </div>
);

export default function DocSidebarWrapper(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div style={{flex: 1, overflow: 'hidden'}}>
        <DocSidebar {...props} />
      </div>
      <SidebarFooter />
    </div>
  );
}
