import React from 'react';
import type { CardItem } from '../types/card';

/**
 * A small pill badge used for tags and card labels.
 */
export function TagPill({ label }: { label: string }) {
  return <span className="tag-pill">{label}</span>;
}

/**
 * The reusable content card used across the Projects, Personal Projects,
 * and Books pages. Consolidates the markup that used to be triplicated.
 *
 * @param item        The card's content (title, meta, description, tags…).
 * @param index       Zero-based index used for the ghost number + numbered label.
 * @param kind        Uppercase label shown above the title, e.g. "Project" / "Book".
 */
export function Card({
  item,
  index,
  kind,
}: {
  item: CardItem;
  index: number;
  kind: string;
}) {
  const number = index + 1;
  const numberLabel = `0${number}`;
  const { title, meta, description, impact, link, linkLabel = 'Visit Project', tags } = item;

  return (
    <article className="project-card">
      <div className="card-ghost" aria-hidden="true">
        {numberLabel}
      </div>
      <div>
        <div style={{ marginBottom: '0.5rem' }}>
          <span className="pill" style={{ fontSize: '11px', textTransform: 'uppercase', padding: '4px 12px' }}>
            {kind} {numberLabel}
          </span>
        </div>
        <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{title}</h3>
        {meta && (
          <div style={{ fontSize: '0.85rem', color: 'var(--card-secondary-text)', marginBottom: '0.5rem', fontWeight: 600 }}>
            {meta}
          </div>
        )}
      </div>
      <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6' }}>{description}</p>
      {impact && (
        <div className="impact" style={{ color: 'var(--blue)', fontWeight: 700 }}>
          ▲ {impact}
        </div>
      )}
      {link && (
        <div style={{ marginTop: '0.75rem' }}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — opens in a new tab`}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--blue)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {linkLabel} ↗
          </a>
        </div>
      )}
      <div className="tags" style={{ marginTop: '1rem' }}>
        {tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
