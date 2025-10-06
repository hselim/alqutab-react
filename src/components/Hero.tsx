import React from 'react';

interface HeroProps {
  currentLang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const content = {
    ar: {
      title: 'تعلم القرآن الكريم عبر جوجل ميت',
      subtitle: 'دروس قرآنية تفاعلية مع معلمين مؤهلين',
      cta: 'ابدأ التعلم الآن'
    },
    en: {
      title: 'Learn the Holy Quran via Google Meet',
      subtitle: 'Interactive Quran lessons with qualified teachers',
      cta: 'Start Learning Now'
    }
  };

  const t = content[currentLang];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <a href="#forms" className="hero-cta">{t.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;