// components/Layout.js

// Modules
import dynamic from 'next/dynamic';

// Styles
import css from '../styles/Layout.scss';

// Dynamic import
// Client side javascript, we don't want server side rendering
const Browser = dynamic(
  () => import('../components/browser'),
  { ssr: false }
);

const Header = dynamic(
  () => import('../components/Header'),
  { ssr: false }
);

// Component

const Layout = props => (
  <div className={css.body}>
    <div className={css.container}>
      <Browser />
      <Header />
      <div className={css.wrap}>
        <div className={css.inner}>
          <div className={css.line}></div>
          <div className={[css.line, css.wide].join(' ')}></div>
          <div className={[css.line, css.wide].join(' ')}></div>
          <div className={css.line}></div>
          <div className={css.line}></div>
          <div className={css.line}></div>
        </div>
      </div>
      <main>
        {props.children}
      </main>
    </div>
  </div>
);

export default Layout;
