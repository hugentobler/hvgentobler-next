// pages/index.js

// Modules
import Layout from '../components/Layout';

// Styles
import css from '../styles/index.scss';
import {narrow as Narrow} from '../styles/Layout.scss';

export default function Index() {
  return (
    <Layout>
      <section className={css.yellow}>
        <div className={Narrow}>
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
      <section className={css.yellow}>
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
      <section className={css.yellow}>
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
