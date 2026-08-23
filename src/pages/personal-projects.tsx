import React from 'react';
import Layout from '@theme/Layout';
import { Card } from '../components/Card';
import PageHeader from '../components/PageHeader';
import type { CardItem } from '../types/card';

const personalProjects: CardItem[] = [
  {
    title: 'RingBlock - Pattern Call Blocker',
    meta: 'Open Source / Android App · 2024',
    description:
      'A lightweight Android call screening app that blocks spam and unwanted calls using custom number patterns, exact matches, or explicit regex rules. Focused on privacy and offline, local pattern processing.',
    impact: 'Open sourced regex-based call screening capability for Android.',
    tags: ['Android', 'Kotlin', 'Regex', 'Call Screening API', 'Privacy-focused'],
    link: 'https://github.com/dhatric/RegexCaller',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'GoogleDoodle Automator',
    meta: 'Content Pipeline / Automation · 2023 – Present',
    description:
      'An automated pipeline that monitors and extracts the latest Google Doodles, auto-generates educational/informational video reviews from collected assets, and uploads them directly to YouTube.',
    impact: 'Grew a YouTube community to over 17,500 subscribers with fully hands-free content generation.',
    tags: ['Python', 'YouTube API', 'Video Automation', 'Web Scraping', 'Automation Pipeline'],
    link: 'https://www.youtube.com/@GoogleDoodleCatalog',
    linkLabel: 'Watch on YouTube',
  },
];

export default function PersonalProjects(): React.JSX.Element {
  return (
    <Layout
      title="Personal Projects"
      description="Personal and open-source software projects by Giridhar Dhatric"
    >
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          <PageHeader
            title="Personal Projects"
            subtitle="A showcase of my open-source applications, tools, and side projects built for fun, utility, and automation."
          />
          <div className="project-grid">
            {personalProjects.map((project, index) => (
              <Card key={project.title} item={project} index={index} kind="Personal Project" />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
