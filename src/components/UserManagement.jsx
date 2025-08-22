import React, { useEffect, useState } from 'react';
import "./Usermanagement.css";
import "tailwindcss";
import Usercard from "./Usercard.jsx";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all"); // ✅ track selected filter
    const [searchTerm, setSearchTerm] = useState(""); // ✅ for search
    const [filtredusers, setFilteredusers] = useState([]);

    const handleDeleteUser = async (userId, actualRole) => {
        const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
        const password = user ? user.password : "null";
        const id = user.id;
        try {
            if (actualRole === "admin") {
                toast.error("Admin users cannot be deleted!");
                return;
            }

            const enterpassword = window.prompt("Please enter your password to confirm deletion:");
            if (!(password === enterpassword)) return;

            const res = await fetch(`http://localhost:3001/users/${userId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, enterpassword }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("User deleted successfully!");
                setUsers(prev => prev.filter(u => u._id !== userId));
                setTimeout(() => window.location.reload(), 1500);
            } else {
                toast.error(data.error || "Failed to delete user");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error deleting user");
        }
    };

    const toggleRole = async (id, newRole) => {
        try {
            const res = await axios.patch(`http://localhost:3001/users/${id}/role`, { role: newRole });
            setUsers((prev) =>
                prev.map((user) =>
                    user.employee_id === id ? { ...user, role: res.data.role } : user
                )
            );
            toast.success(`Role updated: ${newRole}`);
            setTimeout(() => window.location.reload(), 1500);
        } catch (err) {
            console.error("Error updating role:", err);
            toast.error("Failed to update role");
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:3001/users");
                const data = await res.json();
                setUsers(data);
                setFilteredusers(data);
            } catch (err) {
                console.error("Failed to fetch users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


// ✅ Debounced search filter
    useEffect(() => {
        const handler = setTimeout(() => {
            if (!searchTerm.trim()) {
                setFilteredusers(users);
            } else {
                const lower = searchTerm.toLowerCase();
                setFilteredusers(
                    users.filter(user =>
                        `${user.first_name}+" "+${user.last_name}`.toLowerCase().includes(lower) ||
                        user.email?.toLowerCase().includes(lower) ||
                        user.department?.toLowerCase().includes(lower)
                    )
                );
            }
        }, 500); // debounce delay (500ms feels natural)

        return () => clearTimeout(handler); // cleanup if user keeps typing
    }, [searchTerm, users]);


    // ✅ Apply filter
    const filteredUsers = users.filter((user) => {
        if (filter === "all") return true;
        if (filter === "active") return user.active === true;
        if (filter === "inactive") return user.active === false;
        if (filter === "admin") return user.role === "admin";
        if (filter === "user") return user.role === "user";
        return true;
    });

    return (
        <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 corporate-shadow"
        >
            <div
                data-slot="card-header"
                className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h4 data-slot="card-title" className="leading-none">
                            User Management
                        </h4>
                        <p
                            data-slot="card-description"
                            className="text-muted-foreground"
                        >
                            Manage user accounts, permissions, and view statistics
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white"
                        >
                            Export Users
                        </button>
                    </div>
                </div>
            </div>

            <div data-slot="card-content" className="px-6 [&:last-child]:pb-6">
                <div className="flex items-center space-x-4 mb-6">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-sm">
                        <input
                            data-slot="input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border-input flex h-9 w-full rounded-md border px-3 pl-10 py-1 text-sm"
                            placeholder="Search users..."
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.34-4.34" />
                        </svg>
                    </div>

                    {/* ✅ Filter Dropdown */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border rounded-md px-3 py-2 text-sm bg-input-background"
                    >
                        <option value="all">All Users</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {filtredusers.map((user) => (
                        <Usercard
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            name={user.first_name + " " + user.last_name}
                            department={user.department}
                            state={user.active}
                            employee_id={user.employee_id}
                            role={user.role}
                            onToggleRole={toggleRole}
                            onDeleteUser={handleDeleteUser}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
