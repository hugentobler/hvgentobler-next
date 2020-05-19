// pages/index.js

// Modules
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

export default function Index() {
  const Animation1 = dynamic(
    () => import('../components/home/1'),
    { ssr: false, loading: () => <p>Loading</p> }
  )
  const Animation2 = dynamic(
    () => import('../components/home/2'),
    { ssr: false, loading: () => <p>Loading</p> }
  )

  return (
    <Layout
      title='Christopher Hugentobler'
      description='This is the description.'
      image='/'
    >
      <Animation2/>
      <Animation1/>
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
