import React from 'react';
import Layout from '@theme/Layout';
import { Card } from '../components/Card';
import PageHeader from '../components/PageHeader';
import type { CardItem } from '../types/card';

const projects: CardItem[] = [
  {
    title: 'Multi-Tenant Service Extensibility Platform',
    meta: 'Blue Yonder · Mar 2021 – Present',
    description:
      'Led Flowable vs. Camunda vs. Temporal evaluation and the OSS-to-Enterprise migration, then architected a multi-tenant service extensibility platform on Flowable Enterprise (Spring Boot, Kubernetes) with a Java SDK that hooks into the REST request lifecycle — letting 20+ teams attach customer-specific behavior as workflows without modifying the core product. Designed a secure gRPC-based Groovy sandbox (static-analysis guardrails, tenant isolation, auth, encrypted tokens, 400 MB per-execution cap), added sync + Kafka-based async invocation, and built dashboards with automated 5xx alerting to Jira and on-call.',
    impact: 'Adopted by 20+ engineering teams, reducing custom development effort by 80%; sustained 1,000 workflow executions/sec at 100ms p95 in JMeter/BlazeMeter load tests (PostgreSQL + PgBouncer/HikariCP tuning).',
    tags: [
      'Java',
      'Spring Boot',
      'Flowable',
      'Kubernetes',
      'gRPC',
      'Groovy',
      'Apache Kafka',
      'PostgreSQL',
      'PgBouncer',
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'ELK Stack',
    ],
  },
  {
    title: 'Automated Stock Replenishment (ExxonMobil B2B Portal)',
    meta: 'Deloitte · Feb 2015 – Mar 2021',
    description:
      'Architected and implemented an automated stock replenishment module for ExxonMobil’s B2B ordering portal (SAP Commerce), integrating the data science team’s ML demand forecasts to predict order quantities and place replenishment orders automatically through an event-driven workflow.',
    impact: 'Helped reduce stock shortages by 20%.',
    tags: ['Java', 'SAP Commerce', 'Event-Driven', 'ML Demand Forecasting', 'B2B Ordering'],
  },
  {
    title: 'Subscription Ordering System',
    meta: 'Deloitte · Feb 2015 – Mar 2021',
    description:
      'Designed the portal’s subscription ordering system (Spring Boot, RabbitMQ), letting customers schedule recurring orders daily, weekly, or monthly with asynchronous order processing.',
    impact: 'Drove a 15% increase in recurring order volume.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Event-Driven', 'Asynchronous Processing'],
  },
  {
    title: 'Buy-Back & Marine Ordering',
    meta: 'Deloitte · Feb 2015 – Mar 2021',
    description:
      'Built buy-back and marine ordering features, including an ocean-shipment flow that creates two orders per marine order, as part of a two-year team effort delivering B2B ordering on SAP Commerce.',
    impact: 'Shipped B2B ordering capabilities for marine/buy-back flows on SAP Commerce.',
    tags: ['SAP Commerce (Hybris)', 'Java', 'B2B Commerce', 'Order Management'],
  },
  {
    title: 'Reusable B2C Commerce Capabilities (Singtel)',
    meta: 'Infosys · Oct 2011 – Jan 2015',
    description:
      'Developed reusable commerce capabilities on SAP Commerce (Hybris) for Singtel’s B2C mobile/SIM retail platform — including cart restoration and Solr-indexed product search.',
    impact: 'Enabled modular, reusable commerce features for a large-scale B2C retail platform.',
    tags: ['SAP Commerce (Hybris)', 'Java', 'B2C Commerce', 'Solr'],
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Platform engineering and software projects by Giridhar Dhatric"
    >
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          <PageHeader
            title="Projects"
            subtitle="A selection of platforms and systems I've architected and delivered across distributed systems, workflow automation, and commerce engineering."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <Card key={project.title} item={project} index={index} kind="Project" />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
