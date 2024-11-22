import React from 'react';
import {
  MenuIcon
} from 'lucide-react';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '../contexts/ThemeContext';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <header className='md:hidden bg-white pl-4 flex items-center justify-start'>
      <div>
        <button
          onClick={toggleDrawer(true)}
          className={`md:hidden mr-2 p-2 rounded-md ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
        >
          <MenuIcon className="h-6 w-6 text-gray-400" />
        </button>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          anchor="left"
          classes={{
            paper: `w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`,
          }}
        >
          <Sidebar isDrawer={true} />
        </Drawer>
      </div>
      <div className="flex h-16 items-center justify-center border-gray-200 dark:border-gray-700">
        {/* <Shield className="h-8 w-8 text-indigo-600" /> */}
        <span className={`ml-2 text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Admin
        </span>
      </div>
    </header>
  );
};

export default Header;
