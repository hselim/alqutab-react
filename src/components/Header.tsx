import React from 'react';
import { config } from '../config';

interface HeaderProps {
  currentLang: 'ar' | 'en';
  onLanguageToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageToggle }) => {
  const content = {
    ar: {
      home: 'الرئيسية',
      contact: 'اتصل بنا',
      language: 'English'
    },
    en: {
      home: 'Home',
      contact: 'Contact',
      language: 'العربية'
    }
  };

  const t = content[currentLang];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo">
            <img src={config.site.logo} alt={config.site.name} className="logo-img" />
            <span className="logo-text">{config.site.name}</span>
          </a>
          <nav className="nav">
            <a href="#home" className="nav-link">{t.home}</a>
            <a href="#contact" className="nav-link">{t.contact}</a>
            <button className="language-toggle" onClick={onLanguageToggle}>
              {t.language}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;