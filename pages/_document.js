// pages/_document.js

// Modules
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/Favicon';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
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
