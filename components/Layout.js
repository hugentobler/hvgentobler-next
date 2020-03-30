// components/Layout.js

// Modules
import dynamic from 'next/dynamic';

// Styles
import css from '../styles/Layout.module.scss';

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

const Layout = props => {

  return (
    <div className='root'>
      <div className='container'>
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
      <style jsx>{`
        .root {
          display: flex;
          height: 100%;
          justify-content: center;
          text-rendering: optimizeLegibility;
          width: 100%;
        }
        .container {
          position: relative;
          max-width: var(--max-width);
          width: 100%;
          div {
            color: black;
          }
        }
      `}</style>
    </div>
  )
};

export default Layout;
