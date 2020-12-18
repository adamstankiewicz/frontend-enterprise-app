import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory } = {}) => {
  const history = defaultHistory || createMemoryHistory();
  
  // ensure the MFE has the correct initial path from the container/host, without
  // adding it to the router history.
  history.replace(global.location.pathname)

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  };
};

// If we are in development and running in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_admin-subscriptions-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through the container and should
// export the mount function to be called by the container
export { mount };
