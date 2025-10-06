import React from 'react';

interface FeaturesProps {
  currentLang: 'ar' | 'en';
}

const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const content = {
    ar: {
      title: 'لماذا الكتاب؟',
      features: [
        {
          icon: '🎓',
          title: 'معلمون مؤهلون',
          description: 'نخبة من المعلمين المتخصصين في تعليم القرآن الكريم والتجويد'
        },
        {
          icon: '💻',
          title: 'تعلم عن بُعد',
          description: 'احضر الحلقات من أي مكان باستخدام جوجل ميت'
        },
        {
          icon: '⏰',
          title: 'مواعيد مرنة',
          description: 'اختر الأوقات التي تناسبك للدراسة'
        },
        {
          icon: '👥',
          title: 'حلقات فردية وجماعية',
          description: 'خيارات متعددة للتعلم حسب احتياجاتك'
        },
        {
          icon: '📚',
          title: 'مناهج متنوعة',
          description: 'برامج مختلفة للحفظ والتجويد والقراءة'
        },
        {
          icon: '🌍',
          title: 'متاح عالمياً',
          description: 'انضم من أي مكان في العالم'
        }
      ]
    },
    en: {
      title: 'Why Alqutab?',
      features: [
        {
          icon: '🎓',
          title: 'Qualified Teachers',
          description: 'Elite teachers specialized in teaching the Holy Quran and Tajweed'
        },
        {
          icon: '💻',
          title: 'Remote Learning',
          description: 'Attend classes from anywhere using Google Meet'
        },
        {
          icon: '⏰',
          title: 'Flexible Schedule',
          description: 'Choose the times that suit you for studying'
        },
        {
          icon: '👥',
          title: 'Individual and Group Classes',
          description: 'Multiple options for learning according to your needs'
        },
        {
          icon: '📚',
          title: 'Diverse Curricula',
          description: 'Different programs for memorization, Tajweed, and recitation'
        },
        {
          icon: '🌍',
          title: 'Globally Available',
          description: 'Join from anywhere in the world'
        }
      ]
    }
  };

  const t = content[currentLang];

  return (
    <section className="features">
      <div className="container">
        <h2>{t.title}</h2>
        <div className="features-grid">
          {t.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;