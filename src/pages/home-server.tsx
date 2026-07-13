import React from 'react';
import Layout from '@theme/Layout';

interface Service {
  name: string;
  href: string;
  description: string;
  icon: string;
}

interface Category {
  title: string;
  description: string;
  services: Service[];
}

const categories: Category[] = [
  {
    title: 'Docker Management',
    description: 'Infrastructure control, traffic routing, and real-time environment telemetry.',
    services: [
      {
        name: 'Portainer',
        href: 'https://portainer.giridhardhatric.me/',
        description: 'A centralized container management interface that simplifies deploying, configuring, and monitoring Docker environments.',
        icon: 'portainer',
      },
      {
        name: 'Traefik',
        href: 'https://traefik.giridhardhatric.me/',
        description: 'A modern, dynamic HTTP reverse proxy and load balancer designed to deploy microservices with ease.',
        icon: 'traefik',
      },
      {
        name: 'Netdata',
        href: 'https://monitor.giridhardhatric.me/',
        description: 'An agent that provides real-time, high-fidelity performance and health monitoring for systems and containers.',
        icon: 'netdata',
      },
    ],
  },
  {
    title: 'Utilities',
    description: 'Self-hosted applications for remote workspace, code, docs, and files.',
    services: [
      {
        name: 'Qbittorrent',
        href: 'https://fetch.giridhardhatric.me/',
        description: 'A lightweight, cross-platform BitTorrent client featuring an integrated search engine and web user interface.',
        icon: 'qbittorrent',
      },
      {
        name: 'Code Server',
        href: 'https://code.giridhardhatric.me/',
        description: 'A self-hosted instance of VS Code that runs in the browser, enabling development from any device.',
        icon: 'code-server',
      },
      {
        name: 'Docmost',
        href: 'https://notes.giridhardhatric.me/',
        description: 'An open-source, collaborative documentation and wiki platform designed for team knowledge sharing.',
        icon: 'bookstack',
      },
      {
        name: 'FileBrowser',
        href: 'https://files.giridhardhatric.me/',
        description: 'A lightweight web-based file manager that provides a clean interface for secure file hosting and sharing.',
        icon: 'filebrowser',
      },
      {
        name: 'Traggo',
        href: 'https://time.giridhardhatric.me/',
        description: 'A self-hosted, tag-based time tracking application to monitor daily activities and analyze productivity.',
        icon: 'https://raw.githubusercontent.com/traggo/logo/master/logo.png',
      },
    ],
  },
  {
    title: 'Finance',
    description: 'Self-hosted assets and budget planners maintaining financial privacy.',
    services: [
      {
        name: 'Actual',
        href: 'https://finance.giridhardhatric.me/',
        description: 'A local-first, privacy-focused personal finance manager with full budgeting control and account synchronization.',
        icon: 'https://static.thenounproject.com/png/998016-200.png',
      },
      {
        name: 'FireFly',
        href: 'https://firefly.giridhardhatric.me/',
        description: 'A self-hosted personal finance manager to track transactions, budgets, and savings with detailed reports.',
        icon: 'firefly',
      },
    ],
  },
];

// Helper to render icons
function ServiceIcon({ icon, name }: { icon: string; name: string }) {
  const isUrl = icon.startsWith('http');

  if (isUrl) {
    return (
      <img
        src={icon}
        alt={`${name} icon`}
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          borderRadius: '4px',
          filter: 'drop-shadow(0 2px 4px rgba(11, 183, 241, 0.2))',
        }}
      />
    );
  }

  // Inline SVGs for local icons
  switch (icon) {
    case 'portainer':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case 'traefik':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'netdata':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'qbittorrent':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    case 'code-server':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'bookstack':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'filebrowser':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'firefly':
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a5 5 0 0 0-5 5v3H5v2h2v4H5v2h2v2h10v-2h2v-2h2v-4h-2V10h-2V7a5 5 0 0 0-5-5z" />
          <path d="M12 10V6" />
          <circle cx="9" cy="14" r="1" />
          <circle cx="15" cy="14" r="1" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="var(--blue)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}

export default function HomeServer(): React.JSX.Element {
  return (
    <Layout
      title="Home Server Dashboard"
      description="Showcase and entry points for my self-hosted home server, Docker services, and tools."
    >
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          {/* Hero Header */}
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              <div className="live-dot" style={{ backgroundColor: '#10B981' }} />
              <span className="eyebrow-text" style={{ color: '#10B981' }}>Server Online & Secure</span>
            </div>
            <h1>Home Server Showcase</h1>
            <p style={{ color: 'var(--white-dim)', maxWidth: '600px', margin: '0.5rem auto 0 auto' }}>
              A centralized hub managing my private homelab services, virtualized applications,
              and infrastructure tools running securely in containerized environments.
            </p>
          </div>

          {/* System Specs panel */}
          <div
            style={{
              background: 'var(--blue-faint)',
              border: '1px solid var(--blue-border)',
              borderRadius: '24px',
              padding: '1.5rem 2rem',
              marginBottom: '3rem',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--blue)', marginTop: 0, marginBottom: '1.25rem' }}>
              Homelab Node Specifications
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-dim)', textTransform: 'uppercase' }}>OS Platform</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px' }}>Ubuntu Server / Docker</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-dim)', textTransform: 'uppercase' }}>Proxy Layer</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px' }}>Traefik TLS / Let's Encrypt</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-dim)', textTransform: 'uppercase' }}>Hardware Node</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px' }}>x86_64 Quad-Core / 32 GB RAM</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-dim)', textTransform: 'uppercase' }}>Storage Configuration</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px' }}>SSD System + HDD Array</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--white-dim)', textTransform: 'uppercase' }}>Network Access</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '2px' }}>WireGuard VPN Tunneling</div>
              </div>
            </div>
          </div>

          {/* Categories & Services Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {categories.map((category) => (
              <div key={category.title}>
                <div style={{ borderBottom: '1px solid var(--blue-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{category.title}</h2>
                  <p style={{ color: 'var(--white-dim)', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                    {category.description}
                  </p>
                </div>

                <div className="project-grid">
                  {category.services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        padding: '1.75rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            background: 'var(--white-faint)',
                            padding: '0.5rem',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--blue-border)',
                          }}
                        >
                          <ServiceIcon icon={service.icon} name={service.name} />
                        </div>
                        <span
                          className="pill"
                          style={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            padding: '2px 8px',
                            background: 'rgba(16, 185, 129, 0.08)',
                            borderColor: 'rgba(16, 185, 129, 0.25)',
                            color: '#10B981',
                          }}
                        >
                          ● SSL Secure
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.2rem', margin: '0.25rem 0' }}>
                        {service.name}
                      </h3>

                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.88rem', color: 'var(--white-dim)', lineHeight: '1.5', flexGrow: 1 }}>
                        {service.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
