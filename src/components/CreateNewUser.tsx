import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
    // Users, 
    Roles 
} from '../Data/Data'; 

const CreateNewUser = ({ setIsNewUserPopupOpen }: any) => {
    const { theme } = useTheme(); 

    const [newUserName, setNewUserName] = useState(''); 
    const [newUserEmail, setNewUserEmail] = useState(''); 
    const [newUserRole, setNewUserRole] = useState<string>(''); 

    const handleAddUser = () => {
        if (newUserName && newUserEmail && newUserRole) {
            console.log(`New User: ${newUserName}, Email: ${newUserEmail}, Role: ${newUserRole}`);
            setNewUserName('');
            setNewUserEmail('');
            setNewUserRole('');
            setIsNewUserPopupOpen(false);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className={`rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg w-96`}>
                <h2 className="text-lg font-medium mb-4">Add New User</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        className={`w-full rounded-md border-0 px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                        placeholder="Enter user name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.target.value)}
                        className={`w-full rounded-md border-0 px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                        placeholder="Enter user email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Role</label>
                    <select
                        value={newUserRole}
                        onChange={(e) => setNewUserRole(e.target.value)}
                        className={`w-full rounded-md border-0 px-3 py-2 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                    >
                        <option value="">Select Role</option>
                        {Roles.map((role) => (
                            <option key={role.id} value={role.id}>{role.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setIsNewUserPopupOpen(false)}
                        className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddUser}
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Add User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewUser;
