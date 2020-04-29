// pages/_app.js

// Modules
import App from 'next/app';
import { Provider } from '../components/UserContext';
import SetProperty from '../components/CustomCssProperties';
import { AnimatePresence } from 'framer-motion';

// Global styles
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/body.scss';

export default class MyApp extends App {
  state = {
    history: [], // Store page history.
    menuOpen: false
  };

  componentDidMount = () => {
    console.log('componentDidMount')
    // Save initial path to history.
    const { asPath } = this.props.router;
    this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    // Set css properties on load.
    SetProperty(this.props.router.pathname);
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
    const { history } = this.state;
    const { asPath } = this.props.router;
    // If current path doesn't equal latest item in history, let's save the change.
    if (history[history.length - 1] !== asPath) {
      this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    }
  };

  render() {
    const { Component, pageProps, router } = this.props;

    // Handle menu toggling, and pass through context provider.
    const toggleMenu = () => {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    };

    return (
      <Provider value={{
        state: this.state,
        toggleMenu: toggleMenu
      }}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Provider>
    )
  };
}
