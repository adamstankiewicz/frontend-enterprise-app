import React, { useRef, useEffect } from 'react';

import { mount } from 'dashboard/DashboardApp';

// Component responsible for creating a placeholder div and calling the
// ``mount`` function to inject the DashboardApp MFE into the div.
export default () => {
  const ref = useRef();

  useEffect(() => {
    mount(ref.current)
  });

  return (
    <div className="py-4" ref={ref} />
  );
};
