import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import CreateNewRole from '../components/CreateNewRole';
import {
  Shield,
  Plus,
  Edit2,
  Trash2
} from 'lucide-react';

// Importing data from data.ts
import {
  Roles as RolesData,
  Permission
} from '../Data/Data';



const Roles: React.FC = () => {
  const { theme } = useTheme();

  // State for Add Role Popup
  const [isNewRolePopupOpen, setIsNewRolePopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mapping roles with their permissions
  const rolesWithPermissions = RolesData.map((role) => ({
    ...role,
    permissions: role.permissionIds.map(
      (id) => Permission.find((permission) => permission.id === id) || {}
    ),
  }));

  // Filtering roles based on search term
  const filteredRoles = rolesWithPermissions.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete role
  const handleDeleteRole = (roleId: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      console.log(`Role with ID ${roleId} deleted`);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1
            className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
          >
            Roles
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={() => setIsNewRolePopupOpen(true)}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark' ? 'bg-gray-700 text-white ring-gray-600' : ''
            }`}
        />
      </div>

      {/* Roles List */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRoles.map((role) => (
          <div
            key={role.id}
            className={`relative rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } p-6 shadow`}
          >
            {/* Role Header */}
            <div className="flex items-center">
              <div
                className={`rounded-md ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  } p-3`}
              >
                <Shield className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <h3
                  className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  {role.name}
                </h3>
              </div>
            </div>

            {/* Permissions */}
            <div className="mt-4">
              <h4
                className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                  }`}
              >
                Permissions
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission.id}
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${theme === 'dark'
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    {permission.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => {
                  console.log(`Edit role with ID ${role.id}`);
                }}
              >
                <Edit2 className="h-4 w-4" />
              </button>
              <button
                className="text-red-600 hover:text-red-900"
                onClick={() => handleDeleteRole(role.id)}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Role Popup */}
      {isNewRolePopupOpen && (
        <CreateNewRole setIsNewRolePopupOpen={setIsNewRolePopupOpen} />
      )}
    </div>
  );
};

export default Roles;