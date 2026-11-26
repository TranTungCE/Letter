import { useState } from 'react';
import { Heart } from 'lucide-react';
import { DATE_CONFIG } from './config';
import FloatingHearts from './components/FloatingHearts';
import Envelope from './components/Envelope';
import LoveLetter from './components/LoveLetter';
import DateDetails from './components/DateDetails';
import Countdown from './components/Countdown';
import ResponseButtons from './components/ResponseButtons';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="app-wrapper">
      <FloatingHearts />

      <header className="site-header">
        <div className="logo-heart-wrap" aria-hidden="true">
          <Heart size={20} fill="currentColor" />
        </div>
        <span className="logo-text">{DATE_CONFIG.brandName}</span>
      </header>

      <main className="main-content">
        {!isOpened ? (
          <Envelope onOpen={() => setIsOpened(true)} />
        ) : (
          <div className="invitation-flow">
            <LoveLetter />
            <DateDetails />
            <Countdown />
            <ResponseButtons />
          </div>
        )}
      </main>

      <footer className="site-footer">
        <p className="footer-main">{DATE_CONFIG.footerMain}</p>
        <p className="footer-sub">{DATE_CONFIG.footerSub}</p>
      </footer>
    </div>
  );
}
