import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Code2, Workflow, BrainCircuit, CheckCircle2, Database, Bot, LayoutTemplate } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects';

const email = 'rushelbasnet22@gmail.com';

const skills = [
  { title: 'Languages', detail: 'What I write day to day.', icon: Code2,
    items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'SQL'] },
  { title: 'AI & LLMs', detail: 'Grounding models in real data and wiring them into products.', icon: BrainCircuit,
    items: ['LLM APIs', 'Chatbots', 'Embeddings', 'Vector search', 'Function calling', 'AI agents'] },
  { title: 'Backend & APIs', detail: 'Services that move data reliably between systems.', icon: Bot,
    items: ['FastAPI', '.NET', 'REST APIs', 'Webhooks'] },
  { title: 'Automation & voice', detail: 'Turning manual processes into pipelines.', icon: Workflow,
    items: ['n8n', 'Vapi', 'API integrations'] },
  { title: 'Databases', detail: 'Storing and querying application data.', icon: Database,
    items: ['PostgreSQL', 'Supabase'] },
  { title: 'Web & DevOps', detail: 'Building, shipping, and versioning the work.', icon: LayoutTemplate,
    items: ['Next.js', 'React', 'Git', 'GitHub', 'Vercel'] }
];

export default function Home() {
  return <>
    <section className="hero container"><div className="hero-copy">
      <div className="availability"><span className="availability-dot"/> AI ENGINEERING · SOFTWARE DEVELOPMENT</div>
      <h1>Building AI systems that <span>solve real problems.</span></h1>
      <p className="hero-lede">I’m Rushel Basnet, an AI Automation Engineer. I design AI agents, backend services, and automated workflows that take slow, repetitive work off people’s plates, and I build them to keep running reliably long after launch.</p>
      <div className="hero-actions"><Link href="#work" className="button button-dark">Explore my work <ArrowDown size={16}/></Link><a href={`mailto:${email}`} className="button button-light">Get in touch <ArrowUpRight size={16}/></a></div>
      <div className="hero-links"><a href="https://github.com/annoyinglyanonymous" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/rushel-basnet22/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${email}`}><Mail size={16}/> {email}</a></div>
    </div><div className="hero-visual" aria-label="Illustration of connected AI system components"><div className="visual-label"><span className="visual-pulse"/> SYSTEMS / 001</div><div className="orbit orbit-outer"/><div className="orbit orbit-inner"/><div className="core-node"><BrainCircuit size={34}/><span>AI CORE</span></div><div className="float-node float-top"><Code2 size={17}/><span>Backend logic</span></div><div className="float-node float-left"><Workflow size={17}/><span>Workflows</span></div><div className="float-node float-right"><CheckCircle2 size={17}/><span>Human review</span></div><div className="visual-caption">Reliable systems, built with intent.</div></div></section>

    <section className="proof-strip"><div className="container proof-inner"><span>FOCUSED ON</span><div>AI AGENTS</div><div>BACKEND SYSTEMS</div><div>API INTEGRATIONS</div><div>WORKFLOW AUTOMATION</div></div></section>

    <section className="section container" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects built to do useful work.</h2></div><p className="section-intro">A selection of engineering and automation projects. Open a case study to see the problem, approach, and implementation details.</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div><div className="all-projects"><a href="https://github.com/annoyinglyanonymous" target="_blank" rel="noreferrer">Explore all repositories on GitHub <ArrowUpRight size={16}/></a></div></section>

    <section className="about-section" id="about"><div className="container about-layout"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Practical engineering, with attention to the details.</h2></div><div className="about-copy"><p>I’m interested in the space where software engineering and applied AI meet: systems that connect models to tools, move data reliably, and help people make better decisions.</p><p>My work spans Python backends, API integrations, retrieval-based assistants, voice workflows, and outreach automation. I care about correctness, observability, and keeping people in the loop when a system’s decision matters.</p><a className="text-link" href="https://github.com/annoyinglyanonymous" target="_blank" rel="noreferrer">More about my work on GitHub <ArrowUpRight size={16}/></a></div></div></section>

    <section className="section container" id="skills"><div className="section-heading"><div><p className="eyebrow">SKILLS</p><h2>From model calls to working systems.</h2></div><p className="section-intro">The tools and techniques I use to take an idea past the demo stage: connecting components, handling edge cases, and making it dependable day to day.</p></div><div className="skills-grid">{skills.map((skill) => { const Icon = skill.icon; return <article className="skill-card" key={skill.title}><div className="skill-icon"><Icon size={21}/></div><h3>{skill.title}</h3><p>{skill.detail}</p><ul className="skill-tags">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div></section>

    <section className="services-band" id="services"><div className="container services-inner"><div><p className="eyebrow">WORK TOGETHER</p><h2>Have a workflow worth improving?</h2><p>Available for software engineering opportunities and selected AI automation projects.</p></div><a className="button button-dark" href={`mailto:${email}?subject=Let's%20work%20together`}>Tell me what you’re building <ArrowRight size={16}/></a></div></section>

    <section className="container resume-row"><div><p className="eyebrow">ELSEWHERE ON THE INTERNET</p><h2>Want to see the code?</h2><p>Browse the repositories, follow my work, or get in touch directly.</p></div><div className="resume-links"><a href="https://github.com/annoyinglyanonymous" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/rushel-basnet22/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={15}/></a><a href={`mailto:${email}`}><Mail size={18}/> {email} <ArrowUpRight size={15}/></a></div></section>
  </>;
}
