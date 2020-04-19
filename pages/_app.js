// pages/_app.js

// Modules
import App from 'next/app';
import UserContext from '../components/UserContext';
import SetProperty from '../components/CustomCssProperties';
import { PageReady } from '../components/Animation';
import { AnimatePresence } from 'framer-motion';

// Global styles
import '../styles/reset.scss';
import '../styles/fonts.scss';
import '../styles/body.scss';

export default class MyApp extends App {
  state = {
    history: [] // Store page history.
  };

  componentDidMount = () => {
    console.log('componentDidMount')
    // Save initial path to history.
    const { asPath } = this.props.router;
    this.setState(prevState => ({ history: [...prevState.history, asPath] }));

    SetProperty(this.props.router.pathname);
    PageReady();
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
    const { history } = this.state;
    const { asPath } = this.props.router;
    // If current path doesn't equal latest item in history, let's save the change.
    if (history[history.length - 1] !== asPath) {
      this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    }

    // SetProperty(this.props.srouter.pathname);
    PageReady();
  };

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <UserContext.Provider value={{ history: this.state.history }}>
      {/*User context passes the state down the tree.*/}
        <AnimatePresence exitBeforeEnter>
        {/*Framer motion animation on mount / dismount.*/}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </UserContext.Provider>
    )
  };
}
