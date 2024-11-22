import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Shield, Activity, Settings, Layout as LayoutIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();

  const navigation = [
    { name: 'dashboard', href: '/', icon: LayoutIcon },
    { name: 'users', href: '/users', icon: Users },
    { name: 'roles', href: '/roles', icon: Shield },
    { name: 'activity', href: '/activity', icon: Activity },
    { name: 'settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } border-r ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <Shield className="h-8 w-8 text-indigo-600" />
        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
          Admin
        </span>
      </div>
      <nav className="mt-5 space-y-1 px-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${isActive
                ? 'bg-indigo-600 text-white'
                : `text-gray-600 hover:bg-gray-50 hover:text-gray-900 ${theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }`
            }
          >
            <item.icon
              className={`mr-3 h-5 w-5 flex-shrink-0`}
              aria-hidden="true"
            />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;