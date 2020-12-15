import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'dashboard/DashboardApp';

// Component responsible for creating a placeholder div and calling the
// ``mount`` function to inject the DashboardApp MFE into the div.
export default () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return (
    <div className="py-4" ref={ref} />
  );
};
