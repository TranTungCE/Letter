import { useState } from 'react';
import { Heart, MailOpen } from 'lucide-react';

export default function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 480);
  };

  return (
    <section className="envelope-stage" aria-label="Love letter envelope">
      <div className={`envelope-card ${isOpening ? 'opening' : ''}`}>
        <div className="envelope-flap" aria-hidden="true" />
        <div className="envelope-seal" aria-hidden="true">
          <Heart size={24} fill="currentColor" />
        </div>
        <h1 className="envelope-title">You have a little letter...</h1>
        <p className="envelope-subtitle">Open it ♡</p>
        <button
          type="button"
          className="btn-primary"
          onClick={handleOpenClick}
        >
          <MailOpen size={18} />
          <span>OPEN THE LETTER</span>
        </button>
      </div>
    </section>
  );
}
