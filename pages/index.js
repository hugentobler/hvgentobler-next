// pages/index.js

// Modules
// import Layout from '../components/Layout';
import Link from '../components/Link';
import { motion } from 'framer-motion';
import Background from '../components/Background';

export default function Index(props) {
  const frontmatter = {
    title: 'Christopher Hugentobler',
    description:'This is the description.',
    image: '/'
  };

  return (
    // <Layout
    //
    // >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background />
      <section>
        <div>
          <h2>
          <Link href='/'>
            <a className='link'>Home</a>
          </Link>
          <Link href='/25th'>
            <a className='link'>25<sup>th</sup> Birthday &#127812;</a>
          </Link>
            Wide-eyed<br/>
            outdoors<br/>
            addict<br/>
            Millennial<br/>
            tech<br/>
            nut<br/>
            Software<br/>
            entrepreneur<br/>
          </h2>
        </div>
      </section>
      <section>
        <h2>
          Wide-eyed<br/>
          outdoors<br/>
          addict<br/>
          Millennial<br/>
          tech<br/>
          nut<br/>
          Software<br/>
          entrepreneur<br/>
        </h2>
      </section>
      <section>
        <h2>
          Wide-eyed<br/>
          outdoors<br/>
          addict<br/>
          Millennial<br/>
          tech<br/>
          nut<br/>
          Software<br/>
          entrepreneur<br/>
        </h2>
      </section>
    </motion.div>
  );
}
