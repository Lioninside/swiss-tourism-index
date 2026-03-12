export default function ScoreBar({ label, value, max = 35 }) {
  const width = Math.max(6, Math.min(100, (value / max) * 100));

  return (
    <div className="score-bar-wrap">
      <div className="score-bar-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="score-bar-track">
        <div className="score-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
