import React from 'react';
import Layout from '@theme/Layout';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  impact?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Cloud-Native Workflow Platform',
    company: 'Blue Yonder',
    period: '2024 – Present',
    description:
      'Architected a multi-tenant workflow platform using Flowable that enables engineering teams to rapidly design, deploy, version, and execute enterprise workflows. Built with secure tenant isolation, governance controls, and Azure Storage integrations for self-service workflow development.',
    impact: 'Adopted across multiple product teams; reduced workflow implementation complexity significantly.',
    tags: ['Java', 'Spring Boot', 'Flowable', 'Azure', 'Multi-tenant', 'Kubernetes', 'OpenTelemetry'],
  },
  {
    title: 'Platform Observability & Performance',
    company: 'Blue Yonder',
    period: '2024 – Present',
    description:
      'Designed end-to-end observability for the workflow platform using OpenTelemetry, ELK Stack, and Prometheus with Grafana dashboards. Performed database and asynchronous workload tuning to improve operational reliability under peak traffic.',
    impact: 'Reduced system diagnostic times; improved reliability at peak load.',
    tags: ['OpenTelemetry', 'ELK Stack', 'Prometheus', 'Grafana', 'Performance Tuning'],
  },
  {
    title: 'Omnichannel B2B Commerce Platform',
    company: 'Deloitte',
    period: '2015 – 2021',
    description:
      'Led architecture and delivery of a cloud-ready omnichannel commerce platform that unified customer ordering across multiple sales channels. Delivered reusable backend services and high-performance REST APIs optimized for enterprise transaction throughput.',
    impact: '$5M+ in first-year business revenue.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'SQL Server', 'B2B Commerce'],
  },
  {
    title: 'Subscription Management Platform',
    company: 'Deloitte',
    period: '2015 – 2021',
    description:
      'Designed and developed a subscription management platform using Spring Boot and RabbitMQ enabling asynchronous order processing and scalable event-driven communication between services.',
    impact: '15% increase in recurring order volume.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Event-Driven', 'PostgreSQL'],
  },
  {
    title: 'Automated Inventory Replenishment',
    company: 'Deloitte',
    period: '2015 – 2021',
    description:
      'Architected a replenishment platform that transformed demand forecasting into an event-driven workflow, integrating with inventory and ordering systems to automate stock replenishment decisions.',
    impact: '20% reduction in stock shortages; improved inventory availability and sales performance.',
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Event-Driven', 'Workflow Automation'],
  },
  {
    title: 'Enterprise Payment Gateway Modernization',
    company: 'Infosys',
    period: '2011 – 2015',
    description:
      'Modernized and enhanced enterprise payment gateway applications built on C and HP NonStop (Tandem), improving transaction reliability and operational support for high-volume payment processing systems.',
    impact: 'Improved production stability for high-volume payment processing.',
    tags: ['C', 'HP NonStop', 'Tandem', 'Payment Processing', 'Enterprise Systems'],
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
            Project 0{index + 1}
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
      <div className="tags" style={{marginTop: '1rem'}}>
        {project.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

export default function Projects(): React.JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Platform engineering and software projects by Giridhar Dhatric"
    >
      <main style={{padding: '3rem 0'}}>
        <div className="container">
          <div className="section-header">
            <h1>Projects</h1>
            <p style={{color: 'var(--white-dim)'}}>
              A selection of platforms and systems I've architected and delivered across
              distributed systems, workflow automation, and commerce engineering.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
