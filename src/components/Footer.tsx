import React from 'react';
import { config } from '../config';

interface FooterProps {
  currentLang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const content = {
    ar: {
      rights: 'جميع الحقوق محفوظة © 2024 الكتاب',
      links: {
        refunds: 'سياسة الاسترداد',
        terms: 'الشروط والأحكام',
        privacy: 'سياسة الخصوصية'
      }
    },
    en: {
      rights: 'All rights reserved © 2024 Alqutab',
      links: {
        refunds: 'Refund Policy',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy'
      }
    }
  };

  const t = content[currentLang];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#" className="footer-link">{t.links.refunds}</a>
            <a href="#" className="footer-link">{t.links.terms}</a>
            <a href="#" className="footer-link">{t.links.privacy}</a>
          </div>
          <div className="social-links">
            <a 
              href={config.social.facebook} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href={config.social.linkedin} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href={config.social.youtube} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;