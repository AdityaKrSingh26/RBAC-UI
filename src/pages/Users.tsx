import React, { useState } from 'react';
import { Edit2, Trash2, UserPlus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Users as UsersData } from '../Data/Data'; // Import Users from data.ts
import CreateNewUser from '../components/CreateNewUser';

const Users: React.FC = () => {
  const { theme } = useTheme();
  const [users, setUsers] = useState(UsersData); // Use local state for users
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isNewUserPopupOpen, setIsNewUserPopupOpen] = useState(false);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1
            className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
          >
            User Management
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={() => setIsNewUserPopupOpen(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div
              className={`overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark'
                      ? 'bg-gray-700 text-white ring-gray-600'
                      : ''
                      }`}
                  />
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={`block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark'
                      ? 'bg-gray-700 text-white ring-gray-600'
                      : ''
                      }`}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Users Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead
                  className={theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}
                >
                  <tr>
                    <th
                      scope="col"
                      className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                        } sm:pl-6`}
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                        }`}
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                        }`}
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className={`px-3 py-3.5 text-left text-sm font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                        }`}
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className={`relative py-3.5 pl-3 pr-4 sm:pr-6`}
                    >
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody
                  className={`divide-y divide-gray-200 ${theme === 'dark'
                    ? 'bg-gray-800 divide-gray-700'
                    : 'bg-white'
                    }`}
                >
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td
                        className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                          } sm:pl-6`}
                      >
                        {user.name}
                      </td>
                      <td
                        className={`whitespace-nowrap px-3 py-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                          }`}
                      >
                        {user.email}
                      </td>
                      <td
                        className={`whitespace-nowrap px-3 py-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                          }`}
                      >
                        {user.roleId}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}
                        >
                          {user.status || 'unknown'}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          className="text-indigo-600 hover:text-indigo-900 mr-2"
                          onClick={() => {
                            /* Handle edit */
                          }}
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Popup */}
      {isNewUserPopupOpen && (
        <CreateNewUser setIsNewUserPopupOpen={setIsNewUserPopupOpen} />
      )}
    </div>
  );
};

export default Users;
