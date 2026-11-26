import { useState } from 'react';
import { Heart } from 'lucide-react';
import { DATE_CONFIG } from '../config';

const CONFETTI_ITEMS = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: `${(i * 3.1 + (i % 5) * 2) % 98}%`,
  size: 14 + (i % 4) * 5,
  duration: 2.2 + (i % 5) * 0.45,
  delay: (i % 7) * 0.12,
  color: i % 3 === 0 ? '#e06b88' : i % 3 === 1 ? '#f4a4b8' : '#c44b6c',
}));

export default function ResponseButtons() {
  const [status, setStatus] = useState('pending'); // 'pending' | 'yes' | 'maybe'
  const [maybeCount, setMaybeCount] = useState(0);
  const [maybeOffset, setMaybeOffset] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const prompts = DATE_CONFIG.maybePrompts;
  const maxPlayfulTries = prompts.length - 1;

  const handleYes = () => {
    setStatus('yes');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleMaybe = () => {
    if (maybeCount < maxPlayfulTries) {
      const nextCount = maybeCount + 1;
      setMaybeCount(nextCount);
      // Gentle playful nudge without making the button unreachable
      const angle = nextCount * 1.9;
      setMaybeOffset({
        x: Math.round(Math.cos(angle) * 26),
        y: Math.round(Math.sin(angle) * 14),
      });
    } else {
      setStatus('maybe');
    }
  };

  return (
    <>
      {showConfetti && (
        <div className="confetti-container" aria-hidden="true">
          {CONFETTI_ITEMS.map((item) => (
            <div
              key={item.id}
              className="confetti-heart"
              style={{
                left: item.left,
                color: item.color,
                animationDuration: `${item.duration}s`,
                animationDelay: `${item.delay}s`,
              }}
            >
              <Heart size={item.size} fill="currentColor" />
            </div>
          ))}
        </div>
      )}

      <section className="glass-card response-card" aria-label="RSVP">
        {status === 'pending' && (
          <>
            <h2 className="response-question">{DATE_CONFIG.promptQuestion}</h2>
            <div className="response-buttons">
              <button
                type="button"
                className="btn-primary"
                onClick={handleYes}
              >
                <Heart size={18} fill="currentColor" />
                <span>{DATE_CONFIG.yesButtonText}</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleMaybe}
                style={{
                  transform: `translate(${maybeOffset.x}px, ${maybeOffset.y}px) scale(${Math.max(0.65, 1 - maybeCount * 0.08)})`,
                }}
              >
                {prompts[maybeCount]}
              </button>
            </div>
          </>
        )}

        {status === 'yes' && (
          <div className="accepted-box">
            <h2 className="accepted-title">{DATE_CONFIG.yesSuccessTitle}</h2>
            <p className="accepted-subtitle">{DATE_CONFIG.yesSuccessSubtitle}</p>
          </div>
        )}

        {status === 'maybe' && (
          <div className="accepted-box">
            <h2 className="accepted-title">{DATE_CONFIG.maybeAcceptedTitle}</h2>
            <p className="accepted-subtitle">{DATE_CONFIG.maybeAcceptedSubtitle}</p>
          </div>
        )}
      </section>
    </>
  );
}
