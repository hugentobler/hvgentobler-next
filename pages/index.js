// pages/index.js

// Modules
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';

export default function Index() {
  const Animation = dynamic(
    () => import('../components/home/SpinningText'),
    { ssr: false, loading: () => <p>Loading</p> }
  )

  return (
    <Layout
      title='Christopher Hugentobler'
      description='This is the description.'
      image='/'
    >
      <Animation/>
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
