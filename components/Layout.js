// components/Layout.js

// Modules
import dynamic from 'next/dynamic';
import Header from '../components/Header';

// Styles
import css from '../styles/Layout.scss';

// Dynamic import
// Client side javascript, we don't want server side rendering
const Browser = dynamic(
  () => import('../components/browser'),
  { ssr: false }
);

// Component

const Layout = props => (
  <div>
    <Browser />
    <Header />
    <div className={css.wrap}>
      <div className={css.line}></div>
      <div className={[css.line, css.wide].join(' ')}></div>
      <div className={[css.line, css.wide].join(' ')}></div>
      <div className={css.line}></div>
      <div className={css.line}></div>
      <div className={css.line}></div>
    </div>
    {props.children}
  </div>
);

export default Layout;
