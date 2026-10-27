import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><p className="footer-title">Have a useful problem to solve?</p><a className="footer-email" href="mailto:rushelbasnet22@gmail.com">rushelbasnet22@gmail.com <ArrowUpRight size={17}/></a></div>
    <div className="footer-right"><div className="social-links"><a href="https://github.com/annoyinglyanonymous" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/rushel-basnet22/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href="mailto:rushelbasnet22@gmail.com"><Mail size={17}/> Email</a></div><p>© {new Date().getFullYear()} Rushel Basnet</p></div>
  </div></footer>;
}
