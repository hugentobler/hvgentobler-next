/**
 * MDX FILE LAYOUT
 * layouts/index.js
 * Wrapper for blog layout.
 * MDX enhanced defaultLayout set to true.
 * {@link https://github.com/hashicorp/next-mdx-enhanced}
 */

/**
 * MODULES
 */
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* Components */
import Layout from './main';
import NavBar from '../components/ui/NavBar';
import SectionHeader from '../components/ui/SectionHeader';

/**
 * CUSTOM COMPONENTS
 */
const StructuredData = (props) => {
  const {
    author, publishedAt, image, H1,
  } = props;
  const headline = H1[0].props.children;
  const json = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    headline,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished: publishedAt,
    image: `https://hvgentobler.com${image}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
};

/**
 * DEFAULT EXPORT
 */
export default function Page(frontmatter) {
  return (props) => {
    const { children } = props;
    const H1 = children.filter((e) => e.props.mdxType === 'h1');
    const Lede = children.filter((e) => e.props.mdxType === 'h3');
    const Content = children.filter((e) => e.props.mdxType !== 'h1' && e.props.mdxType !== 'h3');
    return (
      <>
        <Head>
          <StructuredData {...frontmatter} H1={H1} />
        </Head>
        <Layout {...frontmatter}>
          <NavBar />
          <section>
            <SectionHeader>
              <div>
                <h1>{H1[0].props.children}</h1>
                {Lede[0] ? (
                  <h3><span>{Lede[0].props.children}</span></h3>
                ) : <div /> /* MDX enhanced doesn't like conditional rendering */}
              </div>
              <div>
                <p>
                  {frontmatter.author}
                  <br />
                  {frontmatter.publishedAt}
                  <br />
                  {frontmatter.readingTime.words}
                  &nbsp;words
                  <br />
                  {frontmatter.geo}
                </p>
              </div>
            </SectionHeader>
          </section>
          <section>
            <Grid>
              <Article>
                {Content}
              </Article>
            </Grid>
          </section>
        </Layout>
      </>
    );
  };
}

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: var(--space-6) var(--space-1);
  h1 {
    grid-column: 1 / span 13;
    margin-bottom: var(--space-6);
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 1 / span 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 1 / span 8;
    }
  }
  article {
    grid-column: 1 / span 13;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 1 / span 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 1 / span 8;
    }
  }
  div {
    grid-column: 1 / span 13;
    grid-row: 2 / 2;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 1 / span 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 10 / span 3;
    }
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/**
 * PROPTYPES
 */
StructuredData.propTypes = {
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  H1: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
