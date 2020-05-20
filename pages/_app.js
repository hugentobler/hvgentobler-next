// pages/_app.js

// Modules
import App from 'next/app';
import { Provider } from '../components/UserContext';
import SetProperty from '../components/CustomCssProperties';

// Global styles
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/body.scss';

export default class MyApp extends App {
  state = {
    history: [], // Store page history.
  };

  componentDidMount = () => {
    // Save initial path to history.
    const { asPath } = this.props.router;
    this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    // Set css properties on load.
    SetProperty(this.props.router.pathname);
  };

  componentDidUpdate = () => {
    const { history } = this.state;
    const { asPath } = this.props.router;
    // If current path doesn't equal latest item in history, let's save the change.
    if (history[history.length - 1] !== asPath) {
      this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    }
  };

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Provider value={{
        state: this.state,
      }}>
        <Component {...pageProps} key={router.route} />
      </Provider>
    )
  };
}

export function reportWebVitals(metric) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}
