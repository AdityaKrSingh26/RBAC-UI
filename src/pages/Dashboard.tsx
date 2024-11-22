import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Shield,
  Activity,
  AlertTriangle
} from 'lucide-react';
import { RootState } from '../store';
import { useTheme } from '../contexts/ThemeContext';
import CreateNewRole from '../components/CreateNewRole';
import CreateNewUser from '../components/CreateNewUser';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const users = useSelector((state: RootState) => state.users.users);
  const roles = useSelector((state: RootState) => state.roles.roles);
  const activities = useSelector((state: RootState) => state.activity.logs);

  // State for New User Popup
  const [isNewUserPopupOpen, setIsNewUserPopupOpen] = useState(false);

  // State for New Role Popup
  const [isNewRolePopupOpen, setIsNewRolePopupOpen] = useState(false);


  const stats = [
    { name: 'Total Users', value: users.length, icon: Users },
    { name: 'Active Roles', value: roles.length, icon: Shield },
    { name: 'Recent Activities', value: activities.length, icon: Activity },
    { name: 'Pending Actions', value: 3, icon: AlertTriangle },
  ];

  return (
    <div>
      <h1 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className={`relative overflow-hidden rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } px-4 py-5 shadow sm:px-6 sm:py-6`}
          >
            <dt>
              <div className={`absolute rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                } p-3`}>
                <item.icon
                  className="h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <p className={`ml-16 truncate text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                }`}>
                {item.name}
              </p>
            </dt>
            <dd className={`ml-16 flex items-baseline pb-6 sm:pb-7`}>
              <p className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                {item.value}
              </p>
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className={`overflow-hidden rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
          <div className="p-6">
            <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Recent Activity
            </h3>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                {activities.slice(0, 5).map((activity) => (
                  <li key={activity.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="min-w-0 flex-1">
                        <p className={`truncate text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                          {activity.action}
                        </p>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                          {activity.details}
                        </p>
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        {new Date(activity.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Quick Actions */}
        <div className={`overflow-hidden rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow`}>
          <div className="p-6">
            <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Quick Actions
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <button
                onClick={() => setIsNewUserPopupOpen(true)}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Add New User
              </button>
              <button
                onClick={() => setIsNewRolePopupOpen(true)}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-200"
              >
                Create New Role
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                View System Settings
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Add User Popup */}
      {isNewUserPopupOpen && (
        <CreateNewUser
          setIsNewUserPopupOpen={setIsNewUserPopupOpen}
        />
      )}

      {/* Add Role Popup */}
      {isNewRolePopupOpen && (
        <CreateNewRole
          setIsNewRolePopupOpen={setIsNewRolePopupOpen}
        />
      )}


    </div>
  );
};

export default Dashboard;