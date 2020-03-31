// pages/_document.js

// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/Favicon';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
