export type CaseSection = {
  id: string         // mockup identifier. e.g. 'dashboard-kanban'
  context: string    // 2-3 line context paragraph
}

export type CaseStudy = {
  slug: string
  caseNumber: '01' | '02' | '03'
  category: string  // English
  title: string
  persona: string
  result: string
  sections: CaseSection[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'branding-designer',
    caseNumber: '01',
    category: 'Branding Designer',
    title: '"Running 8 branding projects—solo."',
    persona: 'Sayaka Suzuki / 30s, freelance branding designer. Logos, identity, packaging.',
    result: 'Invoicing dropped from 6 hours a month to zero.',
    sections: [
      {
        id: 'dashboard-kanban',
        context: 'Logo, guidelines, packaging, web. One client can spawn a dozen deliverables. Atelier tracks each one, not just the project as a whole.',
      },
      {
        id: 'client-board-chat',
        context: "Not email. Not Slack. Every back-and-forth happens on the project's own board. Proposals, feedback, sign-offs—all on one timeline.",
      },
      {
        id: 'auto-invoice',
        context: 'Approved work becomes an invoice. Pick several projects and bill them in one batch.',
      },
    ],
  },
  {
    slug: 'web-engineer',
    caseNumber: '02',
    category: 'Web Engineer',
    title: '"Four retainers, never mixed up."',
    persona: 'Takumi Takahashi / 20s, freelance web engineer. Long-term retainers running alongside one-off builds.',
    result: 'Monthly reports went from 3 hours to auto-generated.',
    sections: [
      {
        id: 'pipeline-timeline',
        context: 'Retainers and one-offs are different animals. The retainers paying your bills are the ones that need the most visibility.',
      },
      {
        id: 'time-tracker',
        context: "Time tracking that doesn't break your flow. Switch projects and the timer follows you.",
      },
      {
        id: 'monthly-report',
        context: 'End-of-month invoices. Stakeholder reports. Both come straight from the data—no copy-paste.',
      },
    ],
  },
  {
    slug: 'writer',
    caseNumber: '03',
    category: 'Writer & Editor',
    title: '"15 articles a month, organized by revision cycle."',
    persona: 'Keisuke Nakamura / 40s, freelance writer and editor. Print and web, short turnarounds, heavy revision.',
    result: 'Hunting for the latest version: 4 hours a month, now zero.',
    sections: [
      {
        id: 'article-pipeline',
        context: 'Fifteen articles, each at a different stage. Writing. First draft. Revisions. Final review. Seeing them all at once is how a writer stays sharp.',
      },
      {
        id: 'version-diff',
        context: 'Editor revisions are about exactly which sentence to change. Diffs sit side by side—comments attached.',
      },
      {
        id: 'batch-invoice',
        context: 'End of month: delivered articles grouped by publication, invoiced in one go. Project status flips to "Invoiced" automatically.',
      },
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getNextCase(currentSlug: string): CaseStudy {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}

export function getPrevCase(currentSlug: string): CaseStudy {
  const currentIndex = caseStudies.findIndex((c) => c.slug === currentSlug);
  const prevIndex = (currentIndex - 1 + caseStudies.length) % caseStudies.length;
  return caseStudies[prevIndex];
}
