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
      'Architected a cloud-native workflow platform using Flowable, enabling engineering teams to rapidly design, deploy, version, and execute enterprise workflows with secure tenant isolation, authentication, and governance controls. Designed end-to-end platform observability and optimized scalability, database, and asynchronous workloads.',
    impact: 'Enabled 20+ teams (reducing feature time-to-market by 40% and onboarding by 50%), reduced MTTD by 45%, and improved database query throughput by 35% with 99.99% operational reliability.',
    tags: [
      'Java',
      'Spring Boot',
      'Flowable',
      'Azure',
      'Kubernetes',
      'OpenTelemetry',
      'ELK Stack',
      'Prometheus',
      'Grafana',
      'Database Optimization',
      'Performance Tuning',
    ],
  },
  {
    title: 'Automated Inventory Replenishment',
    company: 'Deloitte',
    period: '2015 – 2021',
    description:
      'Architected an automated inventory replenishment platform that transformed demand forecasting into an event-driven workflow, integrating complex business forecasting requirements into scalable technical solutions.',
    impact: 'Reduced stock shortages by 20% while improving inventory availability and sales performance.',
    tags: ['Java', 'Spring Boot', 'Event-Driven', 'Workflow Automation', 'Demand Forecasting'],
  },
  {
    title: 'Subscription Management Platform',
    company: 'Deloitte',
    period: '2015 – 2021',
    description:
      'Designed and developed a subscription management platform using Spring Boot and RabbitMQ, enabling asynchronous order processing and scalable event-driven communication.',
    impact: 'Drove a 15% increase in recurring order volume.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Event-Driven', 'Asynchronous Processing'],
  },
  {
    title: 'Reusable B2C Commerce Capabilities',
    company: 'Infosys',
    period: '2011 – 2015',
    description:
      'Developed reusable commerce capabilities on SAP Commerce (Hybris) for large-scale B2C retail platforms, including configurable product catalogs, product bundling, and order management features.',
    impact: 'Enabled modular and configurable product features across major retail clients.',
    tags: ['SAP Commerce (Hybris)', 'Java', 'B2C Commerce', 'Order Management'],
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
