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
import { useInView } from 'react-intersection-observer';
import { m as motion } from 'framer-motion';
/* Components */
import Layout from './main';
import NavBar from '../components/ui/NavBar';
import Split from '../components/utils/Split';
import { fadeIn, headerParent } from '../components/ui/Animations';

/**
 * OBSERVE CHILDREN INTERSECTION
 */
const ObserveIntersectionChild = (props) => {
  const { children } = props;

  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : ''}
      variants={fadeIn}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

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

    /* Intersection observer and animations */
    const [headerRef, headerInView] = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

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
            <FrontMatter>
              <motion.h1
                initial="hidden"
                animate={headerInView ? 'visible' : ''}
                variants={headerParent}
                ref={headerRef}
              >
                {Split(H1[0].props.children)}
              </motion.h1>
              <h3><span>Most websites today are built like commercial products by professionals and marketers, optimised to draw the largest audience, generate engagement and 'convert'. But there is also a smaller, less-visible web designed by regular people to simply to share their interests and hobbies with the world. A web that is unpolished, often quirky but often also fun, creative and interesting.</span></h3>
              <div>
                {/* Insert frontmatter here without breaking mdx */}
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
            </FrontMatter>
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
const FrontMatter = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  >h1, >h3 {
    grid-column: 1 / 14;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / span 8;
    }
  }
  h1, h3 {
    margin-top: 0;
  }
  h1 {
    span {
      display: inline-block;
    }
  }
  > div {
    grid-column: 4 / 14;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 7 / 14;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 10 / 13;
      ${'' /* grid-row: 2 / 2; */}
    }
  }
`;

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
