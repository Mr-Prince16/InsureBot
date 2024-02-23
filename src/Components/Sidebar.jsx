import React from 'react';

function Sidebar() {
  // Array of sidebar elements
  const sidebarItems = [
    { text: 'Dashboard In React asdmaskjdaskdladlaskdlaskdlassssssssssssssssssssssdasdasdas' },
    { text: 'Kanban' },
    { text: 'Inbox' },
    { text: 'Users' },
    { text: 'Products' },
    { text: 'Sign In' },
    { text: 'Sign Up' },
    { text: 'Users' },
    { text: 'Products' },
    { text: 'Sign In' },
    { text: 'Sign Up' },
    { text: 'Users' },
    { text: 'Products' },
    { text: 'Sign In' },
    { text: 'Sign Up' },
    { text: 'Users' },
    { text: 'Products' },
    { text: 'Sign In' },
    { text: 'Sign Up' },    
  ];

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-[300px] h-screen pt-20 transition-transform -translate-x-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-100 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <button
        className="rounded-lg block w-full py-2 px-4 text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none sticky top-0 bg-transparent border-b border-gray-200"
        onClick={() => {
          // Handle click event
          console.log('Add New Chat button clicked');
        }}
      >
        Add New Chat
      </button>
      <div className="h-full overflow-y-scroll no-scrollbar bg-transparent dark:bg-transparent">
        <ul className="space-y-2 font-medium">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3 overflow-hidden whitespace-nowrap overflow-ellipsis">{item.text}</span>
                {item.badge && (
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
