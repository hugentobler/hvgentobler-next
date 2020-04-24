// pages/index.js

// Modules
import Link from '../components/Link';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout
      title='Christopher Hugentobler'
      description='This is the description.'
      image='/'
    >
      <section>
        <div>
          <h1>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/25th'>
              <a>25<sup>th</sup> Birthday &#127812;</a>
            </Link>
          </h1>
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
    </Layout>
  );
}
