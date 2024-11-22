const Users = [
    {
        id: "5001",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        roleId: "1",
        status: "active",
    },
    {
        id: "5002",
        name: "Bob Smith",
        email: "bob.smith@example.com",
        roleId: "2",
        status: "inactive",
    },
    {
        id: "5003",
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        roleId: "3",
        status: "active",
    },
    {
        id: "5004",
        name: "David Lee",
        email: "david@david.com",
    }
];

const Roles = [
    {
        id: "1",
        name: "Admin",
        permissionIds: ["101", "102", "103", "104"],
    },
    {
        id: "2",
        name: "Editor",
        permissionIds: ["105", "106", "107"],
    },
    {
        id: "3",
        name: "Viewer",
        permissionIds: ["108"],
    },
];

const Activity = [
    {
        id: "101",
        type: "login",
        userId: "5001",
        timestamp: "2024-11-22T10:15:30Z",
    },
    {
        id: "102",
        type: "create_content",
        userId: "5002",
        timestamp: "2024-11-22T10:20:00Z",
    },
    {
        id: "103",
        type: "logout",
        userId: "5001",
        timestamp: "2024-11-22T11:00:00Z",
    },
    {
        id: "104",
        type: "delete_user",
        userId: "5003",
        timestamp: "2024-11-22T11:30:00Z",
    }
];

const Permission = [
    {
        id: "101",
        name: "create_user",
        title: "Create User",
        description: "Allows the user to create new user accounts",
    },
    {
        id: "102",
        name: "delete_user",
        title: "Delete User",
        description: "Allows the user to delete existing user accounts",
    },
    {
        id: "103",
        name: "view_reports",
        title: "View Reports",
        description: "Grants access to view system reports and analytics",
    },
    {
        id: "104",
        name: "edit_settings",
        title: "Edit Settings",
        description: "Allows the user to modify system configuration settings",
    },
    {
        id: "105",
        name: "create_content",
        title: "Create Content",
        description: "Grants permission to create new content entries",
    },
    {
        id: "106",
        name: "edit_content",
        title: "Edit Content",
        description: "Allows the user to edit existing content",
    },
    {
        id: "107",
        name: "publish_content",
        title: "Publish Content",
        description: "Grants permission to publish content to the live system",
    },
    {
        id: "108",
        name: "view_content",
        title: "View Content",
        description: "Allows the user to view content without editing rights",
    },
];


export {
    Users,
    Roles,
    Activity,
    Permission
};