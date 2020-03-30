// components/Layout.js

// Modules
import dynamic from 'next/dynamic';

// Dynamic import
// Client side javascript, we don't want server side rendering
const Browser = dynamic(
  () => import('../components/browser'),
  { ssr: false }
);

const Header = dynamic(
  () => import('../components/Nav'),
  { ssr: false }
);

// Component

const Layout = props => {
  return (
    <div className='root'>
      <div className='container'>
        <Browser />
        <Header />
        <div className='wrap'>
          <div className='inner'>
            {[...Array(6)].map((e, i) => <div className='line' key={i}></div>)}
          </div>
        </div>
        <main>
          {props.children}
        </main>
      </div>
      <style jsx>{`
        .root {
          align-items: center;
          display: flex;
          flex-direction: column;
          text-rendering: optimizeLegibility;
        }
        .container {
          max-width: var(--max-width);
          width: 100%;
        }
        .wrap {
          background-color: var(--background-color);
          bottom: 0;
          font-size: 0;
          left: 0;
          right: 0;
          top: 0;
          position: fixed;
          z-index: 0;
        }
        .inner {
          height: 100%;
          margin: 0 auto;
          max-width: var(--max-width);
          width: 100%;
        }
        .line {
          display: inline-block;
          height: 100%;
          position: relative;
          vertical-align: top;
          width: calc(100% / 12 * 2);
          &::after {
            border-right: 1px solid var(--text-color);
            bottom: 0;
            content: '';
            right: 0;
            top: 0;
            transform: scaleY(0);
            transform-origin: center top;
            transition: transform .9s cubic-bezier(.45,.05,.55,.95);
            opacity: .25;
            position: absolute;
          }
          &:nth-child(1)::after { transition-delay: .2s; }
          &:nth-child(2)::after { transition-delay: .4s; }
          &:nth-child(3)::after { transition-delay: .6s; }
          &:nth-child(4)::after { transition-delay: .8s; }
          &:nth-child(5)::after { transition-delay: 1s; }
          &:last-child::after { content: none; }
        }
        :global(.ready) .line::after {
          transform: scaleY(1);
        }
      `}</style>
    </div>
  )
};

export default Layout;
