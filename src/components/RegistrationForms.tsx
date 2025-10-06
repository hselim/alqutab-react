import React, { useState } from 'react';
import { config } from '../config';

interface RegistrationFormsProps {
  currentLang: 'ar' | 'en';
}

const RegistrationForms: React.FC<RegistrationFormsProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student');
  const [showIframe, setShowIframe] = useState(false);

  const content = {
    ar: {
      title: 'انضم إلى الكتاب',
      studentTab: 'طالب',
      teacherTab: 'معلم',
      student: {
        title: 'نموذج تسجيل الطالب',
        description: 'سجل الآن لبدء رحلتك في تعلم القرآن الكريم',
        buttonText: 'فتح نموذج التسجيل',
        iframeInfo: 'يرجى ملء النموذج أدناه للتسجيل كطالب'
      },
      teacher: {
        title: 'نموذج تسجيل المعلم',
        description: 'انضم إلى فريق معلمينا المؤهلين',
        buttonText: 'فتح نموذج التسجيل',
        iframeInfo: 'يرجى ملء النموذج أدناه للتسجيل كمعلم'
      }
    },
    en: {
      title: 'Join Alqutab',
      studentTab: 'Student',
      teacherTab: 'Teacher',
      student: {
        title: 'Student Registration Form',
        description: 'Register now to start your journey in learning the Holy Quran',
        buttonText: 'Open Registration Form',
        iframeInfo: 'Please fill out the form below to register as a student'
      },
      teacher: {
        title: 'Teacher Registration Form',
        description: 'Join our team of qualified teachers',
        buttonText: 'Open Registration Form',
        iframeInfo: 'Please fill out the form below to register as a teacher'
      }
    }
  };

  const t = content[currentLang];
  const currentForm = activeTab === 'student' ? t.student : t.teacher;
  const formUrl = activeTab === 'student' ? config.forms.student : config.forms.teacher;

  const handleOpenForm = () => {
    // Option 1: Open in new tab (recommended for better user experience)
    window.open(formUrl.replace('?embedded=true', ''), '_blank');
    
    // Option 2: Show iframe (uncomment if you prefer embedded forms)
    // setShowIframe(true);
  };

  return (
    <section id="forms" className="forms-section">
      <div className="container">
        <h2>{t.title}</h2>
        
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('student');
              setShowIframe(false);
            }}
          >
            {t.studentTab}
          </button>
          <button
            className={`tab-button ${activeTab === 'teacher' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('teacher');
              setShowIframe(false);
            }}
          >
            {t.teacherTab}
          </button>
        </div>

        <div className={`tab-content active`}>
          <div className="form-container">
            <div className="form-info">
              <h3>{currentForm.title}</h3>
              <p>{currentForm.description}</p>
              
              {!showIframe ? (
                <>
                  <div className="form-preview">
                    <div className="preview-icon">
                      {activeTab === 'student' ? '📝' : '👨‍🏫'}
                    </div>
                    <p>{currentForm.description}</p>
                  </div>
                  <button className="open-form-button" onClick={handleOpenForm}>
                    {currentForm.buttonText}
                  </button>
                </>
              ) : (
                <div>
                  <p style={{ marginBottom: '20px', color: '#666' }}>
                    {currentForm.iframeInfo}
                  </p>
                  <iframe
                    src={formUrl}
                    className="form-iframe"
                    title={currentForm.title}
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading...
                  </iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForms;