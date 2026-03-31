import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 dark:bg-dark bg-light p-32 xl:p-24 lg:p-16 md:p-10 sm:p-6 xs:p-4`}
    >
      {children}
    </div>
  );
};

export default Layout;
