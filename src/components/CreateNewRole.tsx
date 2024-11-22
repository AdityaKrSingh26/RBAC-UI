import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Permission } from '../Data/Data';

const CreateNewRole = ({
    setIsNewRolePopupOpen,
}: any) => {

    const { theme } = useTheme();

    // State for new role and its Permission
    const [newRoleName, setNewRoleName] = useState('');
    const [selectedPermission, setSelectedPermission] = useState<string[]>([]);

    const handleAddRole = () => {
        if (newRoleName && selectedPermission.length > 0) {
            console.log(`New Role: ${newRoleName}, Permission: ${selectedPermission}`);
            setNewRoleName('');
            setSelectedPermission([]);
            setIsNewRolePopupOpen(false);
        } else {
            alert('Please fill in all fields and select at least one permission.');
        }
    };

    // Function to toggle permission selection
    const handlePermissionChange = (permissionId: string) => {
        setSelectedPermission((prev) => {
            if (prev.includes(permissionId)) {
                return prev.filter((id) => id !== permissionId); // Deselect permission
            } else {
                return [...prev, permissionId]; // Select permission
            }
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg w-96`}>
                <h2 className="text-lg font-medium mb-4">Create New Role</h2>

                {/* Role Name Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Role Name</label>
                    <input
                        type="text"
                        value={newRoleName}
                        onChange={(e) => setNewRoleName(e.target.value)}
                        className={`w-full rounded-md border-0 px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                        placeholder="Enter role name"
                    />
                </div>

                {/* Permission Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Permission</label>
                    <div className="space-y-2">
                        {Permission.map((permission) => (
                            <div key={permission.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={permission.id}
                                    checked={selectedPermission.includes(permission.id)}
                                    onChange={() => handlePermissionChange(permission.id)}
                                    className="mr-2"
                                />
                                <label htmlFor={permission.id} className="text-sm">
                                    {permission.title}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setIsNewRolePopupOpen(false)}
                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddRole}
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Add Role
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewRole;
