import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import JsonLd from '../components/JsonLd';
import styles from './index.module.css';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Giridhar Dhatric',
  jobTitle: 'Staff Software Engineer',
  url: 'https://giridhardhatric.me/',
  email: 'mailto:dhatric@gmail.com',
  sameAs: [
    'https://linkedin.com/in/giridhar-dhatric',
    'https://github.com/dhatric',
  ],
  knowsAbout: [
    'Distributed Systems',
    'Cloud-Native SaaS',
    'Event-Driven Architecture',
    'Microservices',
    'SaaS Multi-tenancy',
    'Workflow Platforms',
    'Flowable',
    'Java',
    'Spring Boot',
    'Apache Kafka',
    'Microsoft Azure',
    'Kubernetes',
    'PostgreSQL',
    'Observability',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Giridhar Dhatric',
  url: 'https://giridhardhatric.me/',
  inLanguage: 'en',
};

const competencies = [
  {
    area: 'Languages & Frameworks',
    skills: 'Java, Python, Spring Boot, GraphQL, gRPC',
  },
  {
    area: 'Cloud & Infrastructure',
    skills: 'Azure, Kubernetes, Docker, OpenTelemetry, Prometheus, Grafana, ELK Stack',
  },
  {
    area: 'Data & Messaging',
    skills: 'Apache Kafka, RabbitMQ, PostgreSQL, MongoDB',
  },
  {
    area: 'Architecture',
    skills: 'Microservices, Event-Driven Architecture, Distributed Systems, SaaS Multi-tenancy',
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
          Staff Software Engineer with 15 years of experience architecting cloud-native, event-driven distributed systems — including a multi-tenant service extensibility platform on Flowable adopted by 20+ teams and load-tested at 1,000 workflow executions/sec (100ms p95).
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
              <span className={styles.timelinePeriod}>Mar 2021 – Present</span>
            </div>
            <div className={styles.timelineRole}>Staff Software Engineer · Team of 8</div>
            <p>
              Led Flowable vs. Camunda vs. Temporal evaluation and the OSS-to-Enterprise migration, then architected a multi-tenant service extensibility platform (Spring Boot, Kubernetes) with a Java SDK hooking into the REST request lifecycle and a secure gRPC-based Groovy sandbox for untrusted customer code. Adopted by 20+ teams, cutting custom development effort by 80%; sustained 1,000 workflow executions/sec at 100ms p95 (PostgreSQL + PgBouncer/HikariCP tuning, JMeter/BlazeMeter).
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Deloitte</span>
              <span className={styles.timelinePeriod}>Feb 2015 – Mar 2021</span>
            </div>
            <div className={styles.timelineRole}>Senior Software Engineer</div>
            <p>
              Built ExxonMobil's B2B ordering portal features on SAP Commerce: ML-driven automated stock replenishment (20% fewer stock shortages) and a Spring Boot + RabbitMQ subscription ordering system with daily/weekly/monthly recurring orders (+15% recurring volume), plus buy-back and marine/ocean-shipment ordering.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Infosys</span>
              <span className={styles.timelinePeriod}>Oct 2011 – Jan 2015</span>
            </div>
            <div className={styles.timelineRole}>Software Engineer</div>
            <p>
              Developed reusable commerce capabilities on SAP Commerce (Hybris) for Singtel's B2C mobile/SIM retail platform — including cart restoration and Solr-indexed product search.
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
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <main>
        <Competencies />
        <Experience />
      </main>
    </Layout>
  );
}
