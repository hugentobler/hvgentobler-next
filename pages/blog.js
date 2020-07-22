/**
 * Blog
 * pages/blog.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
/* Components */
import Link from 'next/link';
import Layout from '../layouts/main';
import TextHero from '../components/ui/TextHero';
import NavBar from '../components/ui/NavBar';
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './{2019,2020}/*.mdx';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Blog ~ Press F12 to inspect element.',
  description: ' ',
  image: ' ',
  colour: 'night',
};

/**
 * CUSTOM COMPONENTS
 */
const sortedBlogPosts = blogPosts
  .sort((a, b) => (
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  ));

const BlogPost = (props) => {
  const { __resourcePath, title } = props;
  const slug = __resourcePath.replace('.mdx', '');

  return (
    <h1>
      <Link href={`/${slug}`}>
        <a>
          {title}
        </a>
      </Link>
    </h1>
  );
};

/**
 * DEFAULT EXPORT
 */
export default function Blog() {
  return (
    <Layout {...frontmatter}>
      <TextHero
        caption="Blog"
      >
        <h1>Writing about things that keep us up at night, and other topics.</h1>
      </TextHero>
      <NavBar />
      <section>
        <Grid>
          <Dates />
          <h1><span>Selected Writing</span></h1>
          {
            sortedBlogPosts.map((e) => (
              <>
                <Dates key={e.title}>{e.publishedAt}</Dates>
                <BlogPost key={e.title} {...e} />
              </>
            ))
          }
        </Grid>
      </section>
      <section />
    </Layout>
  );
}

/**
 * PROPTYPES
 */
BlogPost.propTypes = {
  __resourcePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: var(--space-6) var(--space-1);
  span {
    grid-column: 1 / 3;
  }
  h1 {
    a {
      border: none;
    }
    grid-column: 4 / 13;
    margin: 0;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / 11;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / 10;
    }
  }
`;

const Dates = styled.span`
  display: block;
  font-size: 0.7em;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-top: var(--space-1);
  text-transform: uppercase;
`;
