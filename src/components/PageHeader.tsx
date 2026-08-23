import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * Standard centered page header used at the top of content pages.
 * Renders the "eyebrow" divider, a page title, and an optional subtitle.
 */
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="section-header">
      <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
        <div className="eyebrow-line" />
        <span className="eyebrow-text">Portfolio</span>
        <div className="eyebrow-line" />
      </div>
      <h1>{title}</h1>
      {subtitle && <p style={{ color: 'var(--white-dim)' }}>{subtitle}</p>}
    </div>
  );
}
