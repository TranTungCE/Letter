import { Heart } from 'lucide-react';

const HEARTS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 7 + 4) % 94}%`,
  size: 12 + (i % 4) * 5,
  duration: 12 + (i % 5) * 3,
  delay: (i % 6) * 2.2,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-hearts-layer" aria-hidden="true">
      {HEARTS.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart size={heart.size} fill="currentColor" strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}
