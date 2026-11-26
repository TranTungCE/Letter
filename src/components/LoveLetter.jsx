import { DATE_CONFIG } from '../config';

export default function LoveLetter() {
  return (
    <article className="glass-card letter-card">
      <h2 className="letter-header">{DATE_CONFIG.letterHeader}</h2>
      <p className="letter-greeting">Dear {DATE_CONFIG.recipientName},</p>

      {DATE_CONFIG.letterBody.map((paragraph, index) => (
        <p key={index} className="letter-paragraph">
          {paragraph}
        </p>
      ))}

      <p className="letter-question">{DATE_CONFIG.letterQuestion}</p>
    </article>
  );
}
