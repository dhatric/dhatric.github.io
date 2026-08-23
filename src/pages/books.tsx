import React from 'react';
import Layout from '@theme/Layout';

interface Book {
  title: string;
  author: string;
  description: string;
  tags: string[];
}

interface BookSection {
  key: string;
  title: string;
  description: string;
  books: Book[];
}

const sections: BookSection[] = [
  {
    key: 'tech-books',
    title: 'Tech Books',
    description: 'Engineering, architecture, and systems reading that shapes how I build platforms.',
    books: [
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        description:
          'The definitive guide to the principles behind data systems — storage, replication, partitioning, and distributed consistency. The mental model I return to when making platform architecture decisions.',
        tags: ['Distributed Systems', 'Data', 'Architecture'],
      },
      {
        title: 'Building Microservices',
        author: 'Sam Newman',
        description:
          'A practical, end-to-end look at designing, scaling, and operating microservice architectures — boundaries, deployment, and the organizational tradeoffs that come with them.',
        tags: ['Microservices', 'Architecture', 'SOA'],
      },
      {
        title: 'Effective Java',
        author: 'Joshua Bloch',
        description:
          'Timeless best practices for writing clear, correct, and maintainable Java. A staple for backend engineers working in the JVM ecosystem.',
        tags: ['Java', 'Best Practices'],
      },
      {
        title: 'Site Reliability Engineering',
        author: 'Betsy Beyer, Chris Jones, Jennifer Petoff & Niall Richard Murphy',
        description:
          'The Google SRE book — how to run production systems with reliability as a first-class goal, from SLIs/SLOs to incident response and observability.',
        tags: ['SRE', 'Observability', 'Reliability'],
      },
    ],
  },
  {
    key: 'non-fiction',
    title: 'Non-Fiction',
    description: 'Books on leadership, productivity, and how complex human systems really work.',
    books: [
      {
        title: 'The Phoenix Project',
        author: 'Gene Kim, Kevin Behr & George Spafford',
        description:
          'A novel about IT, DevOps, and organizational change. Reads like a story but teaches the principles of flow, feedback, and continuous improvement in engineering orgs.',
        tags: ['DevOps', 'Leadership', 'Organizational Change'],
      },
      {
        title: 'Deep Work',
        author: 'Cal Newport',
        description:
          'A compelling case for focused, distraction-free work and practical rules for building it into your day — essential for anyone doing deep engineering or architecture.',
        tags: ['Productivity', 'Focus', 'Career'],
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt & David Thomas',
        description:
          'A classic collection of practical tips and mindset shifts for software craftspeople — from code maintenance to personal responsibility and career ownership.',
        tags: ['Craftsmanship', 'Career', 'Mindset'],
      },
      {
        title: 'Thinking in Systems',
        author: 'Donella H. Meadows',
        description:
          'A clear introduction to systems thinking — stocks, flows, feedback loops, and leverage points. Invaluable for understanding and improving complex platform ecosystems.',
        tags: ['Systems Thinking', 'Strategy', 'Leadership'],
      },
    ],
  },
  {
    key: 'fiction',
    title: 'Fiction',
    description: 'Novels and stories I read for fun — and the occasional good idea that leaks into work.',
    books: [
      {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        description:
          'A lone astronaut, a lost memory, and an impossible problem to solve. Pure, smart problem-solving wrapped in a wildly fun story.',
        tags: ['Sci-Fi', 'Adventure'],
      },
      {
        title: 'The Three-Body Problem',
        author: 'Liu Cixin',
        description:
          'A sweeping hard-science-fiction trilogy about first contact and the physics — and politics — of the universe. Big ideas and bigger stakes.',
        tags: ['Sci-Fi', 'Hard Science'],
      },
      {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        description:
          'A beautifully written fantasy epic about a gifted young man and the truth behind his legend. Rich prose and a deeply immersive world.',
        tags: ['Fantasy', 'Epic'],
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        description:
          'The classic of ecological and political sci-fi — a desert planet, a messiah figure, and a story about power, religion, and survival.',
        tags: ['Sci-Fi', 'Classic', 'Politics'],
      },
    ],
  },
];

function TagPill({label}: {label: string}) {
  return <span className="tag-pill">{label}</span>;
}

function BookCard({book, index}: {book: Book; index: number}) {
  return (
    <div className="project-card">
      <div className="card-ghost">0{index + 1}</div>
      <div>
        <div style={{marginBottom: '0.5rem'}}>
          <span className="pill" style={{fontSize: '11px', textTransform: 'uppercase', padding: '4px 12px'}}>
            Book 0{index + 1}
          </span>
        </div>
        <h3 style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>{book.title}</h3>
        <div style={{fontSize: '0.85rem', color: 'var(--card-secondary-text)', marginBottom: '0.5rem', fontWeight: 600}}>
          {book.author}
        </div>
      </div>
      <p style={{margin: 0, fontSize: '0.92rem', lineHeight: '1.6'}}>{book.description}</p>
      <div className="tags" style={{marginTop: '1rem'}}>
        {book.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

export default function Books(): React.JSX.Element {
  return (
    <Layout
      title="Books"
      description="Tech books, non-fiction, and fiction that have shaped how I think and build."
    >
      <main style={{padding: '3rem 0'}}>
        <div className="container">
          <div className="section-header">
            <h1>Books</h1>
            <p style={{color: 'var(--white-dim)'}}>
              A reading list across engineering, ideas, and stories — the books that shape
              how I think and build.
            </p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '3.5rem'}}>
            {sections.map((section) => (
              <section key={section.key}>
                <div style={{borderBottom: '1px solid var(--blue-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem'}}>
                  <h2 style={{fontSize: '1.5rem', margin: 0}}>{section.title}</h2>
                  <p style={{color: 'var(--white-dim)', margin: '0.25rem 0 0 0', fontSize: '0.9rem'}}>
                    {section.description}
                  </p>
                </div>

                <div className="project-grid">
                  {section.books.map((book, index) => (
                    <BookCard key={book.title} book={book} index={index} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
