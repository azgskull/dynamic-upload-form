import React from 'react';

function PageWrapper({ children }) {
  return <div className="h-screen w-full flex justify-center items-center">{children}</div>;
}

export default PageWrapper;
