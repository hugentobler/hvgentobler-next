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
import NavBar from '../components/ui/NavBar';
import TableList from '../components/ui/TableList';
// eslint-disable-next-line import/no-unresolved
import { frontMatter as blogPosts } from './{2019,2020}/*.mdx';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Blog - Christopher Hugentobler',
  description: 'Stuff I felt exciting enough to write about.',
  image: '/images/home/og.jpg',
  colour: 'green',
};

/**
 * CUSTOM COMPONENTS
 */
const sortedBlogPosts = blogPosts
  .sort((a, b) => (
    Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  ));

const BlogTitle = (props) => {
  const { __resourcePath, title } = props;
  const slug = __resourcePath.replace('.mdx', '');

  return (
    <Link href={`/${slug}`}>
      <a style={{ border: 'none' }}>
        <h1 style={{ margin: 0 }}>
          {title}
        </h1>
      </a>
    </Link>
  );
};

const BlogPosts = () => (
  sortedBlogPosts.map((e) => (
    <React.Fragment key={e.title}>
      <BlogTitle {...e} />
      <p>
        <span>
          {e.publishedAt}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {e.readingTime.words}
          &nbsp;words
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {e.geo}
        </span>
      </p>
    </React.Fragment>
  ))
);

/**
 * DEFAULT EXPORT
 */
export default function Blog() {
  return (
    <Layout {...frontmatter}>
      <NavBar />
      <section>
        <TableList caption="Blog">
          <BlogPosts />
        </TableList>
      </section>
    </Layout>
  );
}

/**
 * PROPTYPES
 */
BlogTitle.propTypes = {
  __resourcePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
