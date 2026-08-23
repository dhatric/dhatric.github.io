import React from 'react';
import Layout from '@theme/Layout';
import { Card } from '../components/Card';
import PageHeader from '../components/PageHeader';
import type { CardItem } from '../types/card';

const projects: CardItem[] = [
  {
    title: 'Cloud-Native Workflow Platform',
    meta: 'Blue Yonder · Mar 2021 – Present',
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
    meta: 'Deloitte · 2015 – 2021',
    description:
      'Architected an automated inventory replenishment platform that transformed demand forecasting into an event-driven workflow, integrating complex business forecasting requirements into scalable technical solutions.',
    impact: 'Reduced stock shortages by 20% while improving inventory availability and sales performance.',
    tags: ['Java', 'Spring Boot', 'Event-Driven', 'Workflow Automation', 'Demand Forecasting'],
  },
  {
    title: 'Subscription Management Platform',
    meta: 'Deloitte · 2015 – 2021',
    description:
      'Designed and developed a subscription management platform using Spring Boot and RabbitMQ, enabling asynchronous order processing and scalable event-driven communication.',
    impact: 'Drove a 15% increase in recurring order volume.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Event-Driven', 'Asynchronous Processing'],
  },
  {
    title: 'Reusable B2C Commerce Capabilities',
    meta: 'Infosys · 2011 – 2015',
    description:
      'Developed reusable commerce capabilities on SAP Commerce (Hybris) for large-scale B2C retail platforms, including configurable product catalogs, product bundling, and order management features.',
    impact: 'Enabled modular and configurable product features across major retail clients.',
    tags: ['SAP Commerce (Hybris)', 'Java', 'B2C Commerce', 'Order Management'],
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
