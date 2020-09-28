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
          <TopSection>
            <SectionHeader>
              <div>
                <h1>{H1[0].props.children}</h1>
                {Lede[0] ? (
                  <h3><span>{Lede[0].props.children}</span></h3>
                ) : <div /> /* MDX enhanced doesn't like conditional rendering */}
              </div>
              <div>
                <FrontMatter>
                  {frontmatter.author}
                  <br />
                  {frontmatter.publishedAt}
                  <br />
                  {frontmatter.readingTime.words}
                  &nbsp;words
                  <br />
                  {frontmatter.geo}
                </FrontMatter>
              </div>
            </SectionHeader>
          </TopSection>
          <BottomSection>
            <Grid>
              <Article>
                {Content}
              </Article>
            </Grid>
          </BottomSection>
        </Layout>
      </>
    );
  };
}

/**
 * STYLED COMPONENTS
 */
const TopSection = styled.section`
  padding-top: 0;
  padding-bottom: 0;
  @media ${(props) => props.theme.forNotSmall} {
    padding-top: var(--space-6);
    padding-bottom: var(--space-6);
  }
`;

const BottomSection = styled.section`
  padding-top: var(--space-3);
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  article {
    grid-column: 1 / span 13;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / span 8;
    }
  }
`;

const Article = styled.article`
  ${'' /* display: flex;
  flex-direction: column; */}
  width: 100%;
  ol, ul {
    transform: none;
    padding-left: var(--space-4);
  }
  p, li {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

const FrontMatter = styled.p`
  font-size: .8rem;
  @media ${(props) => props.theme.forNotSmall} {
    font-size: 1vw;
  }
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
