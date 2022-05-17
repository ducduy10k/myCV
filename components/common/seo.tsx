import * as React from 'react';
import Head from 'next/head';
export interface ISEOData {
  title: string;
  decription: string;
  url: string;
  thumnailUrl: string;
}

export interface ISEOProps {
  data: ISEOData;
}

export function SEO({ data }: ISEOProps) {
  const { title, decription, url, thumnailUrl } = data;

  return (
    <Head>
      <title>DCode </title>
      <meta name="title" content={title} />
      <meta name="description" content={decription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="DCode " />
      <meta property="og:description" content="Learn Nextjs" />
      <meta
        property="og:image"
        content={thumnailUrl}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={decription} />
      <meta
        property="twitter:image"
        content={thumnailUrl}
      ></meta>
    </Head>
  );
}
