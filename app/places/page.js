import PlaceCard from '@/components/PlaceCard';
import { getPlaces, getRegions } from '@/lib/data';

export const metadata = {
  title: 'Ranking - Swiss Hidden Bases',
};

export default function PlacesPage() {
  const places = getPlaces();
  const regions = getRegions();

  return (
    <section className="shell page-section">
      <div className="page-head">
        <p className="eyebrow">Ranking</p>
        <h1>Swiss base ranking</h1>
        <p className="lead">
          Summer-focused ranking for towns and cities across {regions.join(', ')}. Filters are visual MVP controls for now; the structure is ready to extend.
        </p>
      </div>

      <div className="filter-row card">
        <span>Region: All / Graubunden / Bern / Lucerne</span>
        <span>Views: Highest score / Most hidden / Nature / Water / Culture</span>
      </div>

      <div className="card-grid">
        {places.map((place, index) => (
          <PlaceCard key={place.slug} place={place} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}
