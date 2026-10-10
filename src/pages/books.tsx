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
  /** Optional badge shown under the title, e.g. "Currently reading". */
  status?: string;
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
    description: 'Engineering and AI reading that shapes how I build platforms.',
    books: [
      { title: 'AI Engineering', author: 'Chip Huyen', cover: 'img/books/ai-engineering.jpg' },
      { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', cover: 'img/books/ddia.jpg', status: 'Currently reading' },
    ],
  },
  {
    key: 'non-fiction',
    title: 'Non-Fiction',
    description: 'History, science, and society — big ideas about humankind and how the world works.',
    books: [
      { title: 'Sapiens', author: 'Yuval Noah Harari', cover: 'img/books/sapiens.jpg' },
      { title: 'Homo Deus', author: 'Yuval Noah Harari', cover: 'img/books/homo-deus.jpg' },
      { title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', cover: 'img/books/21-lessons.jpg' },
      { title: 'Animal Farm', author: 'George Orwell', cover: 'img/books/animal-farm.jpg' },
      { title: 'The Song of the Cell', author: 'Siddhartha Mukherjee', cover: 'img/books/song-of-the-cell.jpg' },
    ],
  },
  {
    key: 'fiction',
    title: 'Fiction',
    description: 'Thrillers and sci-fi I read for fun — and the occasional good idea that leaks into work.',
    books: [
      { title: 'The Three-Body Problem', author: 'Liu Cixin', cover: 'img/books/three-body-problem.jpg' },
      { title: 'The Silent Patient', author: 'Alex Michaelides', cover: 'img/books/silent-patient.jpg' },
      { title: 'Verity', author: 'Colleen Hoover', cover: 'img/books/verity.jpg' },
      { title: 'Recursion', author: 'Blake Crouch', cover: 'img/books/recursion.jpg' },
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
      {book.status && (
        <span className="tag-pill" style={{ marginTop: '0.4rem' }}>
          {book.status}
        </span>
      )}
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
