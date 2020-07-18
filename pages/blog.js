/**
 * Blog
 * pages/blog.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
/* Components */
import Link from 'next/link';
import Layout from '../layouts/main';
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './{2019,2020}/*.mdx';

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
    <Link href={`/${slug}`}>
      <a>
        <h2>{title}</h2>
      </a>
    </Link>
  );
};

/**
 * DEFAULT EXPORT
 */
export default function Blog() {
  return (
    <Layout {...frontmatter}>
      <section>
        <h1>Blog</h1>
        {
          sortedBlogPosts.map((e) => (
            <BlogPost key={e.title} {...e} />
          ))
        }
      </section>
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
