import Link from 'next/link';
import PlaceCard from '@/components/PlaceCard';
import { getStats, getTopPlaces } from '@/lib/data';

export default function HomePage() {
  const stats = getStats();
  const topPlaces = getTopPlaces();

  return (
    <div>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Summer MVP · Public transport only</p>
          <h1>Find hidden Swiss base locations with strong 1-hour access.</h1>
          <p className="lead">
            This MVP ranks towns and cities in Graubunden, Bern and Lucerne by how much summer travel value
            they unlock from their main station.
          </p>
          <div className="hero-actions">
            <Link href="/places" className="button primary">Explore ranking</Link>
            <Link href="/methodology" className="button secondary">How scoring works</Link>
          </div>
        </div>
        <div className="hero-panel card">
          <p className="eyebrow">MVP snapshot</p>
          <div className="stat-grid">
            <div>
              <strong>{stats.count}</strong>
              <span>places</span>
            </div>
            <div>
              <strong>{stats.regions}</strong>
              <span>regions</span>
            </div>
            <div>
              <strong>{stats.topScore}</strong>
              <span>top score</span>
            </div>
          </div>
          <p className="muted small">
            Data is currently stored as local JSON/CSV-ready files so the scoring model stays transparent and easy to extend.
          </p>
        </div>
      </section>

      <section className="shell section-gap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Top places now</p>
            <h2>Strong summer bases with hidden upside</h2>
          </div>
          <Link href="/places" className="text-link">See full ranking</Link>
        </div>
        <div className="card-grid">
          {topPlaces.map((place, index) => (
            <PlaceCard key={place.slug} place={place} rank={index + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}
