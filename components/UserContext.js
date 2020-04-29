// components/UserContext.js
// Use React Context to pass data through the component tree without having to pass props down manually at every level.

// Modules
import { createContext } from 'react';

const UserContext = createContext();

export const Provider = UserContext.Provider;
export const Consumer = UserContext.Consumer;

export default UserContext;
