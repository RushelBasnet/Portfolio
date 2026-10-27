import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SiteHeader() {
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="wordmark" aria-label="Rushel Basnet home">rushel<span>.dev</span></Link>
    <nav className="nav-links" aria-label="Main navigation">
      <Link href="/#work">Work</Link><Link href="/#skills">Skills</Link><Link href="/#about">About</Link><Link href="/#services">Services</Link>
      <a className="nav-contact" href="mailto:rushelbasnet22@gmail.com">Contact <ArrowUpRight size={15}/></a>
    </nav>
  </div></header>;
}
