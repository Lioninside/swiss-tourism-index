import { notFound } from 'next/navigation';
import ScoreBar from '@/components/ScoreBar';
import { getPlace, getPlaces } from '@/lib/data';

export function generateStaticParams() {
  return getPlaces().map((place) => ({ slug: place.slug }));
}

export function generateMetadata({ params }) {
  const place = getPlace(params.slug);
  if (!place) {
    return { title: 'Place not found' };
  }

  return {
    title: `${place.name} - Swiss Hidden Bases`,
    description: place.summary,
  };
}

export default function PlaceDetailPage({ params }) {
  const place = getPlace(params.slug);

  if (!place) {
    notFound();
  }

  return (
    <section className="shell page-section">
      <div className="detail-hero">
        <div>
          <p className="eyebrow">{place.region} · {place.station}</p>
          <h1>{place.name}</h1>
          <p className="lead">{place.summary}</p>
          <p className="muted">{place.hiddennessLabel}</p>
        </div>
        <div className="detail-score card">
          <span className="eyebrow">Total score</span>
          <strong>{place.score.total}</strong>
          <a href={place.hotelSearchUrl} target="_blank" rel="noreferrer" className="button primary full-width">
            Search hotels here
          </a>
        </div>
      </div>

      <div className="detail-grid">
        <section className="card">
          <h2>Score breakdown</h2>
          <ScoreBar label="Nature / mountain access" value={place.score.nature} max={35} />
          <ScoreBar label="Water access" value={place.score.water} max={20} />
          <ScoreBar label="Culture / excellence" value={place.score.culture} max={20} />
          <ScoreBar label="Public transport reach" value={place.score.publicTransport} max={15} />
          <ScoreBar label="Overnight + hiddenness" value={place.score.hiddenness} max={10} />
        </section>

        <section className="card">
          <h2>Why it scores well</h2>
          <ul className="plain-list">
            {place.whyItWorks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="card">
          <h2>Highlights within 1 hour</h2>
          <ul className="plain-list">
            {place.highlightsWithin1h.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="card">
          <h2>Data used</h2>
          <ul className="plain-list">
            <li>Overnight band: {place.signals.overnightsBand}</li>
            <li>Summer climate: {place.signals.summerClimateBand}</li>
            <li>Water profile: {place.signals.waterType}</li>
            <li>Culture tags: {place.signals.cultureTags.join(', ')}</li>
            <li>Nature tags: {place.signals.natureTags.join(', ')}</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
