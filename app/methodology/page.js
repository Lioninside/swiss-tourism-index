import { getWeights } from '@/lib/data';

export const metadata = {
  title: 'Methodology - Swiss Hidden Bases',
};

export default function MethodologyPage() {
  const weights = getWeights();

  return (
    <section className="shell page-section prose-page">
      <p className="eyebrow">Methodology</p>
      <h1>How the MVP score works</h1>
      <p>
        This MVP ranks hidden Swiss base locations for summer travel. The goal is not to rank the most famous destination, but to find towns and cities that unlock strong one-hour public transport access.
      </p>

      <div className="card">
        <h2>Current weights</h2>
        <ul className="plain-list">
          <li>Nature / mountain access: {weights.nature}</li>
          <li>Water access: {weights.water}</li>
          <li>Culture / excellence: {weights.culture}</li>
          <li>Public transport reach: {weights.publicTransport}</li>
          <li>Overnight strength + hiddenness: {weights.hiddenness}</li>
        </ul>
      </div>

      <div className="card-stack">
        <div className="card">
          <h2>Nature / mountain access</h2>
          <p>Focuses on hiking, cable-car reach and mountain access potential from the base.</p>
        </div>
        <div className="card">
          <h2>Water access</h2>
          <p>Measures lake, river and summer water value near the base and within one hour.</p>
        </div>
        <div className="card">
          <h2>Culture / excellence</h2>
          <p>Uses museums, UNESCO relevance, old-town quality and cultural-strength proxies.</p>
        </div>
        <div className="card">
          <h2>Public transport reach</h2>
          <p>Uses the main station as the starting point and rewards places that unlock more strong summer options.</p>
        </div>
        <div className="card">
          <h2>Overnight strength + hiddenness</h2>
          <p>Balances proven tourism demand with a medium hiddenness boost for lower-profile but strong bases.</p>
        </div>
      </div>
    </section>
  );
}
