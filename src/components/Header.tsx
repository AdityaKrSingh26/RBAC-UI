import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 border rounded-lg">
            <div className="flex w-full md:ml-0">
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400 " aria-hidden="true" />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  className={`block w-full rounded-md border-0 py-1.5 pl-10 pr-3 ${theme === 'dark'
                    ? 'bg-gray-700 text-white placeholder-gray-400'
                    : 'bg-white text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6`}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mx-2 gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-gray-400" />
              ) : (
                <Moon className="h-6 w-6 text-gray-400" />
              )}
            </button>
            <button className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;