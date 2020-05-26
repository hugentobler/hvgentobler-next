// pages/index.js

// Modules
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

export default function Index() {
  // const Animation1 = dynamic(
  //   () => import('../components/home/1'),
  //   { ssr: false, loading: () => <p>Loading</p> }
  // )
  // const Animation2 = dynamic(
  //   () => import('../components/home/2'),
  //   { ssr: false, loading: () => <p>Loading</p> }
  // )

  return (
    <Layout
      title='Christopher Hugentobler'
      description='This is the description.'
      image='/'
    >
      <Hero>
        <span>Christopher Hugentobler 姚思陶</span>
        <h1>A walking, talking venn diagram.</h1>
        <p>This is something amazing his is something amazinghis is something amazinghis is something amazinghis is something amazinghis is something amazinghis is something amazing</p>
      </Hero>
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

// Styled components
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  min-height: 80vh;
`;
