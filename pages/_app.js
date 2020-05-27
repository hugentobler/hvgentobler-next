/**
 * CUSTOM APP
 * pages/_app.js
 * {@link https://nextjs.org/docs/advanced-features/custom-app}
*/

/**
 * MODULES
 */
import App from 'next/app';
/* Components */
import { Provider } from '../components/UserContext';
import SetCSSProperty from '../components/CustomCssProperties';

/**
 * GLOBAL STYLES
 */
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/global.scss';

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
    const { asPath, pathname } = this.props.router;
    this.setState(
      (prevState) => ({ history: [...prevState.history, asPath] }),
    );
    /* Set custom css property on load. */
    SetCSSProperty(pathname);
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

    return (
      /* Provide context to whole app. */
      <Provider value={{
        state: this.state,
      }}
      >
        <Component
          {...pageProps}
          key={router.route}
        />
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
  console.log(metric); // eslint-disable-line
}
