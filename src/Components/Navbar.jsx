import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r  from-gray-800 via-gray-600 to-gray-100 border-r  border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-start">
          <a href="https://insuregpt.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="InsureGPT Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
              InsureGPT
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
