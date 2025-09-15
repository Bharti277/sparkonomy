import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-6 bg-white dark:bg-secondary-dark-bg rounded-lg text-center shadow-md flex flex-col items-center justify-center gap-2 md:gap-1 md:flex-row md:justify-between md:text-left transition-all">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Sparkonomy
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-300">
        Sparking the creator economy
      </span>
    </footer>
  );
};

export default Footer;
