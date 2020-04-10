// components/Layout.js

// Modules
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Dynamic import
// Client side javascript, we don't want server side rendering
const Browser = dynamic(
  () => import('../components/Browser'),
  { ssr: false }
);

const Header = dynamic(
  () => import('../components/Nav'),
  { ssr: false }
);

const Layout = props => {
  // Get current path for frontmatter.
  const router = useRouter();
  // Get build environment from next config.
  const isProd = process.env.IS_PROD;

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Christopher Hugentobler" />
        <meta property="og:url" content={`https://hvgentobler.com${router.asPath}`} />
        <meta property="og:image" content={`https://hvgentobler.com${props.image}`} />
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <div className='root'>
        <div className='container'>
          <Browser />
          <Header />
          <main>
            {props.children}
          </main>
        </div>
        <style jsx>{`
          .root {
            align-items: center;
            display: flex;
            flex-direction: column;
            text-rendering: optimizeLegibility;
          }
          .container {
            max-width: var(--max-width);
            width: 100%;
          }
        `}</style>
      </div>
    </>
  )
};

export default Layout;
