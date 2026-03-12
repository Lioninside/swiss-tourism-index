import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand">
          Swiss Hidden Bases
        </Link>
        <nav className="nav">
          <Link href="/places">Ranking</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/sources">Sources</Link>
        </nav>
      </div>
    </header>
  );
}
