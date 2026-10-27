import Link from 'next/link';
import { ArrowUpRight, Braces, Workflow, AudioLines, SearchCode } from 'lucide-react';
import type { Project } from '@/lib/projects';

const icons = [Braces, Workflow, SearchCode, AudioLines];
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[index % icons.length];
  return <Link href={`/projects/${project.slug}`} className="project-card">
    <div className="project-card-top"><span className="project-number">{project.number} / 04</span><span className="project-icon"><Icon size={20}/></span></div>
    <div className="project-art" aria-hidden="true"><div className="art-grid"/><div className="art-node node-a">{index === 0 ? 'Signals' : index === 1 ? 'Enrich' : index === 2 ? 'Retrieve' : 'Voice'}</div><div className="art-line line-one"/><div className="art-node node-b">{index === 0 ? 'Experiment' : index === 1 ? 'Verify' : index === 2 ? 'Context' : 'Webhook'}</div><div className="art-line line-two"/><div className="art-node node-c">{index === 0 ? 'Learn' : index === 1 ? 'Review' : index === 2 ? 'Answer' : 'Database'}</div></div>
    <div className="project-card-copy"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-card-bottom"><span>{project.stack.slice(0, 3).join(' · ')}</span><ArrowUpRight size={18}/></div></div>
  </Link>;
}
