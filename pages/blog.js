/**
 * Blog
 * pages/blog.js
*/

/**
 * MODULES
 */
import Layout from '../layouts/main';
/* Components */
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './**/*.mdx';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Blog ~ Christopher Hugentobler',
  description: ' ',
  image: ' ',
  colour: 'night',
};

/**
 * DEFAULT EXPORT
 */
export default function Blog() {
  console.log(blogPosts)
  return (
    <Layout {...frontmatter}>
      <section>
        <article>
          <h1>Blog</h1>
        </article>
      </section>
    </Layout>
  );
}
