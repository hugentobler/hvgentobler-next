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

/**
 * CUSTOM COMPONENTS
 */

const BlogFrontmatter = (props) => {
  const { author, publishedAt, readingTime } = props;
  return (
    <Wrap>
      <Half>
        <Frontmatter>{author}</Frontmatter>
        <Frontmatter>{publishedAt}</Frontmatter>
        <Frontmatter>{readingTime.text}</Frontmatter>
      </Half>
      <Half>
        {/* <Frontmatter>{readingTime.text}</Frontmatter> */}
      </Half>
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
    // const h1Index = children.findIndex(e => e.props.mdxType == 'h1');
    // const newChildren = React.Children.toArray(children).splice(h1Index + 1, 0, "hello");
    return (
      <>
        <Head>
          <StructuredData {...frontmatter} H1={H1} />
        </Head>
        <Layout {...frontmatter}>
          <section>
            <Article>
              {H1}
              {/* Insert frontmatter here without breaking mdx */}
              <BlogFrontmatter {...frontmatter} />
              {Content}
            </Article>
          </section>
        </Layout>
      </>
    );
  };
}

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: ${theme.contentWidth};
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-6);
  opacity: .6;
  @media ${theme.forNotSmall} {
    flex-direction: row;
  }
`;

const Half = styled.div`
  flex-grow: 1;
  margin-left: calc(-1 * var(--space-1));
  &:last-of-type{
    @media ${theme.forNotSmall} {
      margin-right: calc(-1 * var(--space-1));
      text-align: right;
    }
  }
`;

const Frontmatter = styled.span`
  font-size: 0.7em;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin: 0 var(--space-1);
  text-transform: uppercase;
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
