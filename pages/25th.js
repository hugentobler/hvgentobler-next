// pages/25th.js

// Modules
import Layout from '../components/Layout';

// Styles
import css from '../styles/index.scss';

export default function TwentyFifth() {
  return (
    <Layout>
      <section>
        <h2>🍺 🏖️ 🧞 🌊</h2>
        <h2>
          I'm turning 25<br/>
          ¼ of a century<br/>
          life moves pretty fast
        </h2>
        <h2>
          Let's catch up<br/>
          before I'm back<br/>
          to Taipei.
        </h2>
        <p>
          🇭🇰<br/>
          Aug 24<sup>th</sup> Sat from 4:00 to 7:00 p.m.<br/>
          At Lantau - Lower Cheung Sha Beach<br/>
        </p>
        <p>
          🇹🇼<br/>
          Aug 31<sup>st</sup> Sat from 7:00 to 10:00 p.m.<br/>
          At Basement Cafe Taipei<br/>
        </p>
        <picture>
          <img loading='lazy' className={'lazyload'} data-src='images/25th/main.jpg' alt='My 25th birthday' width='' height=''/>
        </picture>
        <h2>
          See you soon!
        </h2>
      </section>
    </Layout>
  );
}
