import React from 'react';

interface HowItWorksProps {
  currentLang: 'ar' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const content = {
    ar: {
      title: 'كيف يعمل الكتاب؟',
      steps: [
        {
          title: 'سجل معنا',
          description: 'املأ النموذج وسنقوم بالتواصل معك خلال 24 ساعة'
        },
        {
          title: 'اختر معلمك',
          description: 'سنقوم بمطابقة احتياجاتك مع المعلم المناسب'
        },
        {
          title: 'ابدأ التعلم',
          description: 'انضم إلى حلقات القرآن عبر جوجل ميت'
        }
      ]
    },
    en: {
      title: 'How Does Alqutab Work?',
      steps: [
        {
          title: 'Register with Us',
          description: 'Fill out the form and we will contact you within 24 hours'
        },
        {
          title: 'Choose Your Teacher',
          description: 'We will match your needs with the right teacher'
        },
        {
          title: 'Start Learning',
          description: 'Join Quran classes via Google Meet'
        }
      ]
    }
  };

  const t = content[currentLang];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>{t.title}</h2>
        <div className="steps-grid">
          {t.steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;