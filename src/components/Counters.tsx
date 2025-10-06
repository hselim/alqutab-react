import React, { useEffect, useRef, useState } from 'react';
import { config } from '../config';

interface CountersProps {
  currentLang: 'ar' | 'en';
}

const Counters: React.FC<CountersProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    teachers: 0,
    monthlyCircles: 0,
    students: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const content = {
    ar: {
      title: 'إحصائيات الكتاب',
      teachers: 'معلمين',
      monthlyCircles: 'حلقة شهرياً',
      students: 'طالب'
    },
    en: {
      title: 'Alqutab Statistics',
      teachers: 'Teachers',
      monthlyCircles: 'Monthly Classes',
      students: 'Students'
    }
  };

  const t = content[currentLang];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          teachers: Math.floor(config.counters.teachers * progress),
          monthlyCircles: Math.floor(config.counters.monthlyCircles * progress),
          students: Math.floor(config.counters.students * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(config.counters);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="counters" ref={sectionRef}>
      <div className="container">
        <h2>{t.title}</h2>
        <div className="counters-grid">
          <div className="counter-item">
            <span className="counter-number">{counters.teachers}</span>
            <span className="counter-label">{t.teachers}</span>
          </div>
          <div className="counter-item">
            <span className="counter-number">{counters.monthlyCircles}</span>
            <span className="counter-label">{t.monthlyCircles}</span>
          </div>
          <div className="counter-item">
            <span className="counter-number">{counters.students}</span>
            <span className="counter-label">{t.students}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;