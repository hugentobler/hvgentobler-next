/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Layout from '../../layouts/main';
import ImageHero from '../../components/ui/ImageHero';
import TableList from '../../components/ui/TableList';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'About ~ Christopher Hugentobler',
  description: ' ',
  image: ' ',
  colour: 'night',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  return (
    <Layout {...frontmatter}>
      <section>
        <TableList>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
        </TableList>
      </section>
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/
