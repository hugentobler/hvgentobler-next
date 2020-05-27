/**
  25TH BIRTHDAY
  pages/25th.js
*/

/**
  MODULES
*/
/* Components */
import Layout from '../components/Layout';
import Image from '../components/Image';

/**
  FRONTMATTER
  Pass on to layout as props.
*/
const frontmatter = {
  title: 'Christopher\'s 25th Birthday Party 🎂',
  description: 'On Aug 24th Sat afternoon, let\'s catch up on Lantau.',
  image: '/images/25th/og.jpg',
};

/**
  DEFAULT EXPORT
*/
export default function TwentyFifth() {
  return (
    <Layout {...frontmatter}>
      <section>
        <h2>
          <span role="img" aria-label="Beer">🍺 </span>
          <span role="img" aria-label="Sunbrella"> 🏖️</span>
          <span role="img" aria-label="Genie"> 🧞</span>
          <span role="img" aria-label="Ocean Wave"> 🌊</span>
        </h2>
        <h2>
          I&apos;m turning 25
          <br />
          ¼ of a century
          <br />
          life moves pretty fast
        </h2>
        <h2>
          Let&apos;s catch up
          <br />
          before I&apos;m back
          <br />
          to Taipei.
        </h2>
        <p>
          <span role="img" aria-label="Hong Kong Flag">🇭🇰</span>
          <br />
          Aug 24
          <sup>th</sup>
          &nbsp;Sat from 4:00 to 7:00 p.m.
          <br />
          At Lantau - Lower Cheung Sha Beach
          <br />
        </p>
        <p>
          <span role="img" aria-label="Taiwan Flag">🇹🇼</span>
          <br />
          Aug 31
          <sup>st</sup>
          &nbsp;Sat from 7:00 to 10:00 p.m.
          <br />
          At Basement Cafe Taipei
          <br />
        </p>
        <Image
          alt="Christopher pointing up and smiling!"
          src="/images/25th/main.jpg"
          height="1599"
          width="1200"
          loading="lazy"
        />
        <h2>
          See you soon!
        </h2>
      </section>
    </Layout>
  );
}
