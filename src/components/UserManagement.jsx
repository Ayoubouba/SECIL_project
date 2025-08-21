import React, {useEffect,useState} from 'react'
import "./Usermanagement.css"
import "tailwindcss";
import Usercard from "./Usercard.jsx";
import {toast} from "react-toastify";
import axios from "axios";
const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDeleteUser = async (userId, actualRole) => {
        try {
            if (actualRole === "admin") {
                toast.error("Admin users cannot be deleted!");
                return;
            }

            // Ask for user password
            const password = window.prompt("Please enter your password to confirm deletion:");
            if (!password) return;

            // Optional: You can validate password before sending delete request
            // Example: send { password } along with DELETE request if backend requires it

            const res = await fetch(`http://localhost:3001/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ password }), // send password for confirmation
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("User deleted successfully!");
                // Refresh user list
                setUsers(prev => prev.filter(u => u._id !== userId));
                setTimeout(()=>window.location.reload(), 1500);
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
            // ✅ Update backend (adjust URL to your API route)
            const res = await axios.patch(`http://localhost:3001/users/${id}/role`, { role: newRole });

            // ✅ Update frontend state
            setUsers((prev) =>
                prev.map((user) =>
                    user.employee_id === id ? { ...user, role: res.data.role } : user
                )
            );

            toast.success(`Role updated: ${newRole}`);
            setTimeout(()=>window.location.reload(), 1500);
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
            } catch (err) {
                console.error("Failed to fetch users:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);
    return (
        <div data-slot="card"
             className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border-0 corporate-shadow">
            <div data-slot="card-header"
                 className=" @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex items-center justify-between">
                    <div><h4 data-slot="card-title" className="leading-none">User Management</h4><p
                        data-slot="card-description" className="text-muted-foreground">Manage user accounts,
                        permissions, and view statistics</p></div>
                    <div className="flex space-x-2">
                        <button data-slot="button"
                                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-download h-4 w-4 mr-2"
                                 aria-hidden="true">
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            Export Users
                        </button>
                    </div>
                </div>
            </div>
            <div data-slot="card-content" className="px-6 [&amp;:last-child]:pb-6">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                             aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <input data-slot="input"
                               className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10"
                               placeholder="Search users..." value=""/></div>
                    <button type="button" role="combobox" aria-controls="radix-:rgp:" aria-expanded="false"
                            aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger"
                            data-size="default"
                            className="border-input data-[placeholder]:text-muted-foreground [&amp;_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 w-40">
                        <span data-slot="select-value">All Users</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    {users.map((user) => (
                       <Usercard id={user.id} name={user.first_name+" "+user.last_name} department={user.department} state={user.active} employee_id={user.employee_id} role={user.role} onToggleRole={toggleRole} onDeleteUser={handleDeleteUser} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default UserManagement
