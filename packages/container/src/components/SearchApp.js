import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'search/SearchApp';

// Component responsible for creating a placeholder div and calling the
// ``mount`` function to inject the SearchApp MFE into the div.
export default () => {
  const ref = useRef();
  const history = useHistory();
  const [, setSearchApp] = useState({});
  
  useEffect(
    () => {
      const app = mount(ref.current, {
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;

          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      });
      const { onPageNavigate } = app;

      if (onPageNavigate) {
        history.listen(onPageNavigate);
      }

      setSearchApp(app);
    },
    [],
  );

  return (
    <div ref={ref} />
  );
};
