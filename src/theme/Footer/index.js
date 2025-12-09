import React from 'react';
import Footer from '@theme-original/Footer';
import { useLocation } from '@docusaurus/router';

export default function FooterWrapper(props) {
  const { pathname } = useLocation();
  
  // Hide footer on docs pages
  if (pathname.startsWith('/docs')) {
    return null;
  }

  return <Footer {...props} />;
}
