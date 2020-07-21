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

/**
 * CUSTOM COMPONENTS
 */

const BlogFrontmatter = (props) => {
  const { author, publishedAt, readingTime } = props;
  return (
    <Wrap>
      <Frontmatter>{author}</Frontmatter>
      <Frontmatter>{publishedAt}</Frontmatter>
      <Frontmatter>{readingTime.text}</Frontmatter>
    </Wrap>
  );
};

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
    image: `https://inspectelement.co${image}`,
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
    const Content = children.filter((e) => e.props.mdxType !== 'h1');
    return (
      <>
        <Head>
          <StructuredData {...frontmatter} H1={H1} />
        </Head>
        <Layout {...frontmatter}>
          <NavBar />
          <section>
            <Grid>
              {H1}
              {/* Insert frontmatter here without breaking mdx */}
              <BlogFrontmatter {...frontmatter} />
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
    grid-column: 1 / 13;
    margin-bottom: var(--space-6);
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 1 / 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 1 / 9;
    }
  }
  article {
    grid-column: 1 / 9;
  }
  div {
    grid-column: 1 / 13;
    grid-row: 2 / 2;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 1 / 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 10 / 13;
    }
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: var(--space-2);
  @media ${(props) => props.theme.forNotSmall} {
    flex-direction: column;
  }
`;

const Frontmatter = styled.p`
  color: var(--dark-gray);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.3;
  margin: 0;
  @media ${(props) => props.theme.forNotSmall} {
    font-size: 1vw;
  }
`;

/**
 * PROPTYPES
 */
BlogFrontmatter.propTypes = {
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  readingTime: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

StructuredData.propTypes = {
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  H1: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
