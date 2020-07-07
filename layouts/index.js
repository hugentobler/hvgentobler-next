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

export default function Page(frontmatter) {
  return ({ children }) => (
    <Layout {...frontmatter}>
      <section>
        <Article>
          {children}
        </Article>
      </section>
    </Layout>
  );
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
  padding: 0 var(--space-2);
  @media ${theme.forNotSmall} {
    padding: 0;
  }
`;
