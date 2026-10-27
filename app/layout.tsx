import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Rushel Basnet — AI & Software Engineer',
  description: 'AI systems, backend engineering, and practical automation built to solve real problems.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Rushel Basnet — AI & Software Engineer', description: 'Building useful AI systems and reliable software.', type: 'website' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
