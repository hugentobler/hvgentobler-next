// pages/index.js

// Modules
// import Layout from '../components/Layout';
import Link from '../components/Link';
import { motion } from 'framer-motion';

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
      initial={{ scale: 1 }}
      animate={{ scale: 0.5 }}
      exit={{ scale: 0.1 }}
    >
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
