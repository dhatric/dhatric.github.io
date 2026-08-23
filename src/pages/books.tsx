import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader';

interface Book {
  title: string;
  /** Path to the cover image under /static/img/books/. */
  cover: string;
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
      { title: 'Designing Data-Intensive Applications', cover: 'img/books/ddia.jpg' },
      { title: 'Building Microservices', cover: 'img/books/building-microservices.jpg' },
      { title: 'Effective Java', cover: 'img/books/effective-java.jpg' },
      { title: 'Site Reliability Engineering', cover: 'img/books/sre.jpg' },
    ],
  },
  {
    key: 'non-fiction',
    title: 'Non-Fiction',
    description: 'Books on leadership, productivity, and how complex human systems really work.',
    books: [
      { title: 'The Phoenix Project', cover: 'img/books/phoenix-project.jpg' },
      { title: 'Deep Work', cover: 'img/books/deep-work.jpg' },
      { title: 'The Pragmatic Programmer', cover: 'img/books/pragmatic-programmer.jpg' },
      { title: 'Thinking in Systems', cover: 'img/books/thinking-in-systems.jpg' },
    ],
  },
  {
    key: 'fiction',
    title: 'Fiction',
    description: 'Novels and stories I read for fun — and the occasional good idea that leaks into work.',
    books: [
      { title: 'Project Hail Mary', cover: 'img/books/project-hail-mary.jpg' },
      { title: 'The Three-Body Problem', cover: 'img/books/three-body-problem.jpg' },
      { title: 'The Name of the Wind', cover: 'img/books/name-of-the-wind.jpg' },
      { title: 'Dune', cover: 'img/books/dune.jpg' },
    ],
  },
];

function BookCard({ book }: { book: Book }) {
  return (
    <article className="book-card" aria-label={book.title}>
      <img className="book-cover" src={book.cover} alt={`Cover of ${book.title}`} loading="lazy" />
      <h3 className="book-title">{book.title}</h3>
    </article>
  );
}

export default function Books(): React.JSX.Element {
  return (
    <Layout
      title="Books"
      description="Tech books, non-fiction, and fiction that have shaped how I think and build."
    >
      <main style={{ padding: '3rem 0' }}>
        <div className="container">
          <PageHeader
            title="Books"
            subtitle="A reading list across engineering, ideas, and stories — the books that shape how I think and build."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {sections.map((section) => (
              <section key={section.key}>
                <div style={{ borderBottom: '1px solid var(--blue-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{section.title}</h2>
                  <p style={{ color: 'var(--white-dim)', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                    {section.description}
                  </p>
                </div>

                <div className="book-grid">
                  {section.books.map((book) => (
                    <BookCard key={book.title} book={book} />
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
