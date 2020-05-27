/**
 * USER CONTEXT
 * components/UserContext.js
 * React Context helps pass data / props through component tree without
 * having to traverse the component tree manually.
 * {@link https://reactjs.org/docs/context.html}
 */

import { createContext } from 'react';

const UserContext = createContext();

export const { Provider, Consumer } = UserContext;

export default UserContext;
