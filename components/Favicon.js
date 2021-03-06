/**
 * FAVICON
 * components/Favicon.js
 */

/**
 * MODULES
 */
import Head from 'next/head';

/**
 * DEFAULT EXPORT
 */
export default function Favicon() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <meta name="msapplication-TileColor" content="#f9f8f1" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
