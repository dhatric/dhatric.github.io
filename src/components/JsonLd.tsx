import React from 'react';
import Head from '@docusaurus/Head';

interface JsonLdProps {
  /** Schema.org JSON-LD object to embed in the <head>. */
  data: Record<string, unknown>;
}

/**
 * Injects schema.org structured data (JSON-LD) into the page <head>.
 * Structured data improves SEO rich results and makes the site easier for
 * search engines and LLM-based crawlers to interpret.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
