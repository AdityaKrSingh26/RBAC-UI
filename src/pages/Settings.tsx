import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Sun, 
  Moon
} from 'lucide-react';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1 className={`text-2xl font-semibold mb-6 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        Settings
      </h1>

      <div className="space-y-6">
        {/* Theme Settings */}
        <div className={`p-6 rounded-lg shadow ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-lg font-medium mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Theme Preferences
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-gray-400 mr-2" />
              ) : (
                <Sun className="h-5 w-5 text-gray-400 mr-2" />
              )}
              <span className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Toggle theme</span>
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Language Settings
        <div className={`p-6 rounded-lg shadow ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-lg font-medium mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Language Settings
          </h2>
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-gray-400 mr-2" />
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ${
                theme === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-900'
              } focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default Settings;