import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el,
  );
};

// If we are in development and running in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_search-dev-root');

  if (el) {
    mount(el);
  }
}

// We are running through the container and should
// export the mount function to be called by the container
export { mount };
