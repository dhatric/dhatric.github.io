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
    skills: 'Microsoft Azure, Kubernetes, Docker, Azure Storage / Event Hubs / Functions, CI/CD, Infrastructure Automation',
  },
  {
    area: 'Data & Messaging',
    skills: 'Apache Kafka, RabbitMQ, SQL Server, PostgreSQL, MongoDB',
  },
  {
    area: 'Leadership',
    skills: 'Technical Leadership, Mentorship, Engineering Governance, Cross-functional Collaboration',
  },
];

function Hero() {
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <h1 className="hero__title">Giridhar Dhatric</h1>
        <p className="hero__subtitle">Staff Software Engineer</p>
        <p className={styles.heroSummary}>
          13 years designing cloud-native platforms, distributed systems, and workflow automation.
          I build reusable platform capabilities that let engineering teams ship at scale.
        </p>
        <div className="cta-row">
          <Link className="button button--primary button--lg" to="/projects">
            View Projects
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            Read Blog
          </Link>
          <a
            className="button button--outline button--secondary button--lg"
            href="https://linkedin.com/in/dhatric"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="button button--outline button--secondary button--lg"
            href="https://github.com/dhatric"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button--outline button--secondary button--lg"
            href="mailto:dhatric@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </header>
  );
}

function Competencies() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <h2>Core Competencies</h2>
          <p>Areas where I bring deep expertise and a track record of delivery.</p>
        </div>
        <div className="competency-grid">
          {competencies.map(({area, skills}) => (
            <div className="competency-card" key={area}>
              <h4>{area}</h4>
              <p>{skills}</p>
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
        <div className="section-header">
          <h2>Career Highlights</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Blue Yonder</span>
              <span className={styles.timelinePeriod}>Mar 2024 – Present</span>
            </div>
            <div className={styles.timelineRole}>Staff Software Engineer</div>
            <p>
              Architected a cloud-native workflow platform on Flowable with multi-tenant isolation,
              Azure integrations, and end-to-end observability using OpenTelemetry + ELK. Standardized
              developer patterns across product teams and drove platform strategy.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Deloitte</span>
              <span className={styles.timelinePeriod}>Feb 2015 – Mar 2021</span>
            </div>
            <div className={styles.timelineRole}>Senior Software Engineer</div>
            <p>
              Led architecture and delivery of an omnichannel B2B commerce platform generating{' '}
              <strong>$5M+ in first-year revenue</strong>. Built subscription management and
              inventory replenishment platforms, cutting stock shortages by 20%.
            </p>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMeta}>
              <span className={styles.timelineCompany}>Infosys</span>
              <span className={styles.timelinePeriod}>Oct 2011 – Jan 2015</span>
            </div>
            <div className={styles.timelineRole}>Software Engineer</div>
            <p>
              Developed commerce capabilities on SAP Commerce (Hybris) and modernized enterprise
              payment gateway applications on HP NonStop for high-volume transaction processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
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
