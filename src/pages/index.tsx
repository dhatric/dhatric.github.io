import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const competencies = [
  {
    area: 'Architecture & Platforms',
    skills: 'Distributed Systems, Cloud-Native SaaS, Event-Driven Architecture, Microservices, Workflow Platforms, Developer Platforms',
  },
  {
    area: 'Backend & Observability',
    skills: 'Java, Spring Boot, REST APIs, GraphQL, Python, Flowable, OpenTelemetry, ELK Stack, Prometheus, Grafana',
  },
  {
    area: 'Cloud & Infrastructure',
    skills: 'Microsoft Azure, Kubernetes, Docker, Azure Storage/Event Hubs/Functions, CI/CD, Infrastructure Automation',
  },
  {
    area: 'Data & Messaging',
    skills: 'Apache Kafka, RabbitMQ, SQL Server, PostgreSQL, MongoDB',
  },
  {
    area: 'Leadership & Governance',
    skills: 'Technical Leadership, Mentorship, Engineering Governance',
  },
];

const heroExternalLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/giridhar-dhatric' },
  { label: 'GitHub', href: 'https://github.com/dhatric' },
];

// Shared hero CTA shape so every secondary CTA stays visually consistent.
const heroCtaStyle: React.CSSProperties = {
  borderRadius: '100px',
  padding: '12px 36px',
};

// Centered header layout shared by all sections.
const centeredHeaderStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Eyebrow({ text, variant = 'section' }: { text: string; variant?: 'hero' | 'section' }) {
  return (
    <div
      className="eyebrow"
      style={
        variant === 'hero'
          ? { justifyContent: 'center', marginBottom: '1.5rem' }
          : { marginBottom: '0.75rem' }
      }
    >
      {variant === 'hero' && <div className="live-dot" />}
      {variant === 'section' && <div className="eyebrow-line" />}
      <span className="eyebrow-text">{text}</span>
      {variant === 'section' && <div className="eyebrow-line" />}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="section-header" style={centeredHeaderStyle}>
      <Eyebrow text={eyebrow} variant="section" />
      <h2>{title}</h2>
      {subtitle && <p style={{ color: 'var(--white-dim)' }}>{subtitle}</p>}
    </div>
  );
}

function Hero() {
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <Eyebrow text="Designing at Scale" variant="hero" />
        <h1 className={styles.heroTitle}>Giridhar Dhatric</h1>
        <p className={styles.heroSubtitle}>Staff Software Engineer</p>
        <p className={styles.heroSummary}>
          Designing cloud-native platforms, distributed systems, and workflow automation.
          Bridging robust backend architectures with emerging RAG and agentic workflows to enable engineering teams to build at scale.
        </p>
        <div className="cta-row" style={{ marginTop: '2rem' }}>
          <Link className="cta-btn" to="/projects">
            View Projects
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ ...heroCtaStyle, border: '1px solid var(--blue-border)', background: 'transparent', color: 'var(--hero-text-color)' }}
            to="/blog"
          >
            Read Blog
          </Link>
          {heroExternalLinks.map(({ label, href }) => (
            <a
              key={label}
              className="button button--outline button--secondary button--lg"
              style={{ ...heroCtaStyle, borderColor: 'var(--blue-border)', color: 'var(--hero-text-color)' }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Competencies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          eyebrow="Expertise"
          title="Core Competencies"
          subtitle="Areas where I bring deep expertise and a track record of delivery."
        />
        <div className="competency-grid">
          {competencies.map(({ area, skills }) => (
            <div className="competency-card" key={area} style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{area}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {skills.split(', ').map((skill) => (
                  <span className="tag-pill" key={skill} style={{ margin: 0, fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionHeader eyebrow="Timeline" title="Career Highlights" />
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Blue Yonder</span>
              <span className={styles.timelinePeriod}>Mar 2024 – Present</span>
            </div>
            <div className={styles.timelineRole}>Staff Software Engineer</div>
            <p>
              Architected a Flowable-based cloud-native workflow platform for 20+ teams, cutting feature time-to-market by 40%. Engineered a secure, multi-tenant execution framework, and designed platform observability using OpenTelemetry, ELK, and Prometheus (reducing MTTD by 45%).
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Deloitte</span>
              <span className={styles.timelinePeriod}>Feb 2015 – Mar 2021</span>
            </div>
            <div className={styles.timelineRole}>Senior Software Engineer</div>
            <p>
              Architected an event-driven inventory replenishment platform that reduced stock shortages by 20%. Designed a subscription management platform using Spring Boot and RabbitMQ, driving a 15% increase in recurring order volume.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Infosys</span>
              <span className={styles.timelinePeriod}>Oct 2011 – Jan 2015</span>
            </div>
            <div className={styles.timelineRole}>Software Engineer</div>
            <p>
              Developed reusable commerce capabilities on SAP Commerce (Hybris), enabling configurable product catalog, product bundling, and order management features for B2C retail platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Staff Software Engineer — Cloud-Native Platforms, Distributed Systems, and Workflow Automation"
    >
      <Hero />
      <main>
        <Competencies />
        <Experience />
      </main>
    </Layout>
  );
}
