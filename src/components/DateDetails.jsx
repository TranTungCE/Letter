import { CalendarHeart, Clock, MapPin, Sparkles } from 'lucide-react';
import { DATE_CONFIG } from '../config';

const DETAILS = [
  {
    icon: CalendarHeart,
    label: '♡ Date',
    value: DATE_CONFIG.displayDate,
  },
  {
    icon: Clock,
    label: '♡ Time',
    value: DATE_CONFIG.displayTime,
  },
  {
    icon: MapPin,
    label: '♡ Place',
    value: DATE_CONFIG.place,
  },
  {
    icon: Sparkles,
    label: '♡ Dress Code',
    value: DATE_CONFIG.dressCode,
  },
];

export default function DateDetails() {
  return (
    <section className="glass-card" aria-labelledby="date-details-heading">
      <h2 id="date-details-heading" className="section-title">
        OUR LITTLE DATE
      </h2>
      <div className="details-grid">
        {DETAILS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="detail-item">
              <div className="detail-icon" aria-hidden="true">
                <Icon size={20} />
              </div>
              <div>
                <div className="detail-label">{item.label}</div>
                <div className="detail-value">{item.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
