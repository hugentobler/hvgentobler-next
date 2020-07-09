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
import styled from 'styled-components';
/* Components */
import Layout from './main';

/**
 * CUSTOM COMPONENTS
 */

const BlogFrontmatter = (props) => {
  const {author, publishedAt} = props;
  return (
    <Wrap>
      <Half>
        <Frontmatter>{author}</Frontmatter>
        <Frontmatter>{publishedAt}</Frontmatter>
      </Half>
      <Half>
        <Frontmatter>5 min read</Frontmatter>
      </Half>
    </Wrap>
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
  padding: var(--space-6) 0;
`;

const Wrap = styled.div`
  color: lightgray;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-4);
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
