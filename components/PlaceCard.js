import Link from 'next/link';

export default function PlaceCard({ place, rank }) {
  return (
    <article className="card place-card">
      <div className="place-card-top">
        <div>
          <p className="eyebrow">#{rank} · {place.region}</p>
          <h3>{place.name}</h3>
          <p className="muted">{place.hiddennessLabel}</p>
        </div>
        <div className="score-pill">{place.score.total}</div>
      </div>
      <p>{place.summary}</p>
      <div className="metric-row">
        <span>Nature {place.score.nature}</span>
        <span>Water {place.score.water}</span>
        <span>Culture {place.score.culture}</span>
      </div>
      <Link href={`/places/${place.slug}`} className="text-link">
        View place
      </Link>
    </article>
  );
}
