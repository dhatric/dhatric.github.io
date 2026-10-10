# Giridhar Dhatric

**Staff Software Engineer**

Hyderabad, India • +91 99859 60268 • [dhatric@gmail.com](mailto:dhatric@gmail.com)
[linkedin.com/in/giridhar-dhatric](https://linkedin.com/in/giridhar-dhatric) • [github.com/dhatric](https://github.com/dhatric) • [giridhardhatric.me](https://giridhardhatric.me)

---

## Professional Summary

Staff Software Engineer with 15 years of experience architecting cloud-native, event-driven distributed systems. Led a team of 8 engineers to architect a multi-tenant service extensibility platform on Flowable, with a Java SDK and a secure sandbox for untrusted customer code, adopted by 20+ engineering teams and load-tested at 1,000 workflow executions/sec (100ms p95). Specialized in turning open-source platforms into enterprise-grade SaaS using Java, Spring Boot, Kubernetes, and Kafka.

---

## Core Technical Skills

- **Languages & Frameworks:** Java, Python, Spring Boot, GraphQL, gRPC
- **Cloud & Infrastructure:** Azure, Kubernetes, Docker, OpenTelemetry, Prometheus, Grafana, ELK Stack
- **Data & Messaging:** Apache Kafka, RabbitMQ, PostgreSQL, MongoDB
- **Architecture:** Microservices, Event-Driven Architecture, Distributed Systems, SaaS Multi-tenancy

---

## Professional Experience

### Blue Yonder (Supply Chain Products Leader) — Hyderabad, India
**Staff Software Engineer** | *Mar 2021 – Present*

- Led evaluation of Flowable vs. Camunda vs. Temporal, authored the technology selection report, and drove Flowable Enterprise through the Technical Review Board, then led the Flowable OSS-to-Enterprise migration.
- Architected a multi-tenant service extensibility platform on Flowable Enterprise (Spring Boot, Kubernetes) with a Java SDK that hooks into the REST request lifecycle, letting 20+ engineering teams attach customer-specific behavior to existing endpoints as workflows without modifying the core product, reducing custom development effort by 80% by replacing product changes with workflow authoring.
- Designed a secure gRPC-based Groovy sandbox for customer-authored scripts, with static-analysis guardrails, tenant isolation, authentication/authorization, encrypted token handling, and a 400 MB per-execution memory cap that keeps ad hoc workflows within Kubernetes pod limits.
- Added synchronous and Kafka-based asynchronous workflow invocation to the SDK, so extensions such as order notifications run without blocking the product's request path, and built end-to-end observability with dashboards and automated 5xx alerting to Jira and on-call.
- Optimized PostgreSQL data access and connection pooling (PgBouncer, HikariCP), sustaining 1,000 workflow executions/sec at 100ms p95 latency in JMeter/BlazeMeter load tests.
- Mentored a team of 8 engineers and established workflow-authoring standards, documented in a best-practices guide for teams building on the platform.

### Deloitte — Hyderabad, India
**Senior Software Engineer** | *Feb 2015 – Mar 2021*

- Architected and implemented an automated stock replenishment module for ExxonMobil's B2B ordering portal (SAP Commerce), integrating the data science team's ML demand forecasts to predict order quantities and place replenishment orders automatically through an event-driven workflow, helping reduce stock shortages by 20%.
- Designed the portal's subscription ordering system (Spring Boot, RabbitMQ), letting customers schedule recurring orders daily, weekly, or monthly with asynchronous order processing, driving a 15% increase in recurring order volume.
- Built buy-back and marine ordering features, including an ocean-shipment flow that creates two orders per marine order, as part of a two-year team effort delivering B2B ordering on SAP Commerce.

### Infosys — Hyderabad, India
**Software Engineer** | *Oct 2011 – Jan 2015*

- Developed reusable commerce capabilities on SAP Commerce (Hybris) for Singtel's B2C mobile/SIM retail platform — including cart restoration and Solr-indexed product search.

---

## Education

**Georgia Institute of Technology** — Online
*M.S. in Computer Science (Specialization: AI), Part-time* | **2025 – Present**

**JNTU** — Hyderabad, India
*B.Tech in Computer Science* | **March 2011**
