import { getSources } from '@/lib/data';

export const metadata = {
  title: 'Sources - Swiss Hidden Bases',
};

export default function SourcesPage() {
  const sources = getSources();

  return (
    <section className="shell page-section">
      <p className="eyebrow">Sources</p>
      <h1>Public sources planned for the MVP data layer</h1>
      <p className="lead">
        All sources listed here are public and inspectable. The MVP currently uses local JSON data shaped to match these connectors.
      </p>

      <div className="card-grid">
        {sources.map((source) => (
          <article key={source.id} className="card">
            <p className="eyebrow">{source.category}</p>
            <h2>{source.name}</h2>
            <p>{source.notes}</p>
            <p className="muted">Status: {source.status}</p>
            <a href={source.url} target="_blank" rel="noreferrer" className="text-link">Open source</a>
          </article>
        ))}
      </div>
    </section>
  );
}
