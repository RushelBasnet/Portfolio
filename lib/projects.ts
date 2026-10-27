export type Project = {
  slug: string; number: string; title: string; category: string; summary: string;
  problem: string; approach: string[]; stack: string[]; github?: string; demo?: string;
  metric?: string; metricLabel?: string; status: string;
};

export const projects: Project[] = [
  {
    slug: 'self-optimising', number: '01', title: 'Self-Optimising Outreach Engine', category: 'AI systems · Experimentation',
    summary: 'An outreach engine that combines prospect workflows with multi-armed bandit experimentation to make data-informed decisions about what to try next.',
    problem: 'Outbound campaigns generate a lot of activity, but without structured feedback it is difficult to learn which approaches are worth repeating.',
    approach: ['Build a repeatable workflow for processing prospect and campaign data.', 'Use a multi-armed bandit approach to allocate experiments based on observed outcomes.', 'Keep campaign activity and performance data available for review rather than treating the model as a black box.'],
    stack: ['Python', 'FastAPI', 'LLM APIs', 'Thompson Sampling'], github: 'https://github.com/annoyinglyanonymous/Self-Optimising',
    metric: '~3,200', metricLabel: 'leads processed (project-reported)', status: 'Portfolio project'
  },
  {
    slug: 'outreach-automation', number: '02', title: 'AI Outreach Automation', category: 'Backend · Workflow automation',
    summary: 'A pipeline for lead enrichment, prospect research, contact verification, personalised outreach drafts, and human review.',
    problem: 'Researching prospects and preparing relevant outreach by hand creates repetitive work and inconsistent records across tools.',
    approach: ['Collect and enrich prospect information from connected sources.', 'Use AI to support profile matching, verification, and tailored draft generation.', 'Keep human approval in the workflow before sending outreach.'],
    stack: ['Python', 'FastAPI', 'REST APIs', 'LLMs', 'Human-in-the-loop'], github: 'https://github.com/annoyinglyanonymous/Outreach-Automation',
    metric: '800–900', metricLabel: 'contacts per campaign (project-reported)', status: 'Portfolio project'
  },
  {
    slug: 'rag-implementation', number: '03', title: 'RAG Implementation', category: 'LLM applications · Retrieval',
    summary: 'A retrieval-augmented generation project exploring how to ground language-model responses in retrieved source material.',
    problem: 'General-purpose language models can produce answers that are not supported by a company’s own documents or knowledge base.',
    approach: ['Prepare source content for retrieval.', 'Retrieve relevant context for a user question.', 'Pass retrieved context to the model to support more grounded responses.'],
    stack: ['Python', 'Embeddings', 'Vector search', 'LLMs'], github: 'https://github.com/annoyinglyanonymous/RAG-Implementation', status: 'Portfolio project'
  },
  {
    slug: 'ai-receptionist', number: '04', title: 'AI Receptionist Backend', category: 'Voice AI · Integrations',
    summary: 'A voice-agent backend concept connecting phone conversations to workflow automation and structured inquiry records.',
    problem: 'Inbound inquiries often need to be captured consistently and routed to the right next step without losing important context.',
    approach: ['Connect a voice agent to backend tools through webhooks.', 'Use workflow logic to process inquiry details and persist records.', 'Design structured status handling for follow-up and appointment-related operations.'],
    stack: ['Vapi', 'n8n', 'Supabase', 'Webhooks', 'REST APIs'], status: 'In progress'
  }
];
