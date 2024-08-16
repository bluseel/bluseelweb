import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);
  const toggleTooltip = () => setVisible(!visible);

  return (
    <div className="relative inline-block h-full w-full">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onClick={toggleTooltip}
        className="h-full w-full cursor-pointer"
      >
        {children}
      </div>
      {visible && (
        <div className="absolute -top-12 left-1/2 z-10 mt-2 w-44 -translate-x-1/2 transform rounded-md bg-gray-800 p-2 text-sm text-white shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
