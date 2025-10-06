import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Counters from './components/Counters'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import RegistrationForms from './components/RegistrationForms'
import Footer from './components/Footer'

type Language = 'ar' | 'en';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ar');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('alqutab_lang') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setCurrentLang(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    // Save to localStorage
    localStorage.setItem('alqutab_lang', currentLang);
  }, [currentLang]);

  const handleLanguageToggle = () => {
    setCurrentLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <>
      <Header 
        currentLang={currentLang} 
        onLanguageToggle={handleLanguageToggle} 
      />
      <Hero currentLang={currentLang} />
      <Counters currentLang={currentLang} />
      <Features currentLang={currentLang} />
      <HowItWorks currentLang={currentLang} />
      <RegistrationForms currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </>
  )
}

export default App
