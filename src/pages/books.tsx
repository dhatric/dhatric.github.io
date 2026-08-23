import React from 'react';
import Layout from '@theme/Layout';
import PageHeader from '../components/PageHeader';
import JsonLd from '../components/JsonLd';

interface Book {
  title: string;
  /** Author, used only in structured data (not displayed on the page). */
  author: string;
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
      { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', cover: 'img/books/ddia.jpg' },
      { title: 'Building Microservices', author: 'Sam Newman', cover: 'img/books/building-microservices.jpg' },
      { title: 'Effective Java', author: 'Joshua Bloch', cover: 'img/books/effective-java.jpg' },
      { title: 'Site Reliability Engineering', author: 'Betsy Beyer, Chris Jones, Jennifer Petoff & Niall Richard Murphy', cover: 'img/books/sre.jpg' },
    ],
  },
  {
    key: 'non-fiction',
    title: 'Non-Fiction',
    description: 'Books on leadership, productivity, and how complex human systems really work.',
    books: [
      { title: 'The Phoenix Project', author: 'Gene Kim, Kevin Behr & George Spafford', cover: 'img/books/phoenix-project.jpg' },
      { title: 'Deep Work', author: 'Cal Newport', cover: 'img/books/deep-work.jpg' },
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas', cover: 'img/books/pragmatic-programmer.jpg' },
      { title: 'Thinking in Systems', author: 'Donella H. Meadows', cover: 'img/books/thinking-in-systems.jpg' },
    ],
  },
  {
    key: 'fiction',
    title: 'Fiction',
    description: 'Novels and stories I read for fun — and the occasional good idea that leaks into work.',
    books: [
      { title: 'Project Hail Mary', author: 'Andy Weir', cover: 'img/books/project-hail-mary.jpg' },
      { title: 'The Three-Body Problem', author: 'Liu Cixin', cover: 'img/books/three-body-problem.jpg' },
      { title: 'The Name of the Wind', author: 'Patrick Rothfuss', cover: 'img/books/name-of-the-wind.jpg' },
      { title: 'Dune', author: 'Frank Herbert', cover: 'img/books/dune.jpg' },
    ],
  },
];

const allBooks = sections.flatMap((section) => section.books);

const booksSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Books — Giridhar Dhatric',
  url: 'https://giridhardhatric.me/books',
  inLanguage: 'en',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: allBooks.map((book, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Book',
        name: book.title,
        author: { '@type': 'Person', name: book.author },
        image: `https://giridhardhatric.me/${book.cover}`,
        url: 'https://giridhardhatric.me/books',
      },
    })),
  },
};

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
      <JsonLd data={booksSchema} />
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
