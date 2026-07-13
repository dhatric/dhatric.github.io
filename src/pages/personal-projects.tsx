import React from 'react';
import Layout from '@theme/Layout';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  impact?: string;
  tags: string[];
  link?: string;
}

const personalProjects: Project[] = [
  {
    title: 'RingBlock - Pattern Call Blocker',
    company: 'Open Source / Android App',
    period: '2024',
    description:
      'A lightweight Android call screening app that blocks spam and unwanted calls using custom number patterns, exact matches, or explicit regex rules. Focused on privacy and offline, local pattern processing.',
    impact: 'Open sourced regex-based call screening capability for Android.',
    tags: ['Android', 'Kotlin', 'Regex', 'Call Screening API', 'Privacy-focused'],
    link: 'https://github.com/dhatric/RegexCaller',
  },
  {
    title: 'GoogleDoodle Automator',
    company: 'Content Pipeline / Automation',
    period: '2023 – Present',
    description:
      'An automated pipeline that monitors and extracts the latest Google Doodles, synthesizes educational/informational video reviews using automated assets, and uploads them directly to YouTube.',
    impact: 'Grew a YouTube community to over 17,500 subscribers with fully hands-free content generation.',
    tags: ['Python', 'YouTube API', 'Video Automation', 'Web Scraping', 'Automation Pipeline'],
    link: 'https://www.youtube.com/@GoogleDoodleCatalog',
  },
];

function TagPill({label}: {label: string}) {
  return <span className="tag-pill">{label}</span>;
}

function ProjectCard({project, index}: {project: Project; index: number}) {
  return (
    <div className="project-card">
      <div className="card-ghost">0{index + 1}</div>
      <div>
        <div style={{marginBottom: '0.5rem'}}>
          <span className="pill" style={{fontSize: '11px', textTransform: 'uppercase', padding: '4px 12px'}}>
            Pet Project 0{index + 1}
          </span>
        </div>
        <h3 style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>{project.title}</h3>
        <div style={{fontSize: '0.85rem', color: 'var(--card-secondary-text)', marginBottom: '0.5rem', fontWeight: 600}}>
          {project.company} · {project.period}
        </div>
      </div>
      <p style={{margin: 0, fontSize: '0.92rem', lineHeight: '1.6'}}>{project.description}</p>
      
      {project.impact && (
        <div className="impact" style={{color: 'var(--blue)', fontWeight: 700}}>▲ {project.impact}</div>
      )}
      
      {project.link && (
        <div style={{marginTop: '0.75rem'}}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--blue)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            Visit Project ↗
          </a>
        </div>
      )}
      
      <div className="tags" style={{marginTop: '1rem'}}>
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

export default function PersonalProjects(): React.JSX.Element {
  return (
    <Layout
      title="Personal Projects"
      description="Personal and open-source software projects by Giridhar Dhatric"
    >
      <main style={{padding: '3rem 0'}}>
        <div className="container">
          <div className="section-header">
            <h1>Personal Projects</h1>
            <p style={{color: 'var(--white-dim)'}}>
              A showcase of my open-source applications, tools, and side projects built for fun, utility, and automation.
            </p>
          </div>
          <div className="project-grid">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
