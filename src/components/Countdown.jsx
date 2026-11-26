import { useEffect, useState } from 'react';
import { DATE_CONFIG } from '../config';

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(DATE_CONFIG.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(DATE_CONFIG.date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'DAYS', value: padZero(timeLeft.days) },
    { label: 'HOURS', value: padZero(timeLeft.hours) },
    { label: 'MINUTES', value: padZero(timeLeft.minutes) },
    { label: 'SECONDS', value: padZero(timeLeft.seconds) },
  ];

  return (
    <section className="glass-card" aria-labelledby="countdown-heading">
      <h2 id="countdown-heading" className="section-title">
        COUNTING DOWN TO OUR DATE ♡
      </h2>
      <div className="countdown-grid">
        {units.map((unit) => (
          <div key={unit.label} className="countdown-box">
            <span className="countdown-number">{unit.value}</span>
            <span className="countdown-unit">{unit.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
