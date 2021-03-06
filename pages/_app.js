/**
 * CUSTOM APP
 * pages/_app.js
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
*/

/**
 * MODULES
 */
import App from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
/* Components */
import { Provider } from '../components/UserContext';
import MDXComponents from '../components/MDXComponents';

/**
 * GLOBAL STYLES
 */
import theme from '../styles/theme';
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/global.scss';
import '../styles/prism-duotone-light.css';

/**
 * DEFAULT EXPORT
 */
export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    /* Save this page's path to state. */
    const { asPath } = this.props.router;
    this.setState(
      (prevState) => ({ history: [...prevState.history, asPath] }),
    );
  }

  componentDidUpdate() {
    /* Save subsequent page path changes that user visits to state. */
    const { history } = this.state;
    const { asPath } = this.props.router;
    if (history[history.length - 1] !== asPath) {
      /* Not recommended to setState in componentDidUpdate, but alas it's conditional so won't loop. */
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(
        (prevState) => ({ history: [...prevState.history, asPath] }),
      );
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const onExitComplete = () => {
      /* Disabled scroll prop in next links so exit animations don't jank. */
      window.scrollTo(0, 0);
    };

    return (
      /* Provide context to whole app. */
      <Provider value={{
        state: this.state,
      }}
      >
        <ThemeProvider
          theme={theme}
        >
          <MDXProvider
            components={MDXComponents}
          >
            <AnimatePresence
              exitBeforeEnter
              onExitComplete={onExitComplete}
            >
              <Component
                {...pageProps}
                key={router.route}
              />
            </AnimatePresence>
          </MDXProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

/**
 * APP METRICS
 * {@link https://nextjs.org/docs/advanced-features/measuring-performance}
 */
export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  // console.log(metric); // eslint-disable-line
}
