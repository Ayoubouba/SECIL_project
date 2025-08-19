import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const HoverProfile = ({ imageSrc, label = "Profile" }) => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

    const name = user?.name || "Guest";
    const email = user?.email || "Not available";
    const id = user?.id || "N/A";
    const department = user?.department || "N/A";
    const role= user?.role || "user";
    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className=" m-2 relative shadow-2xs rounded-lg bg-white">
            {/* Profile Button */}
            <div
                className="flex items-center cursor-pointer overflow-hidden w-[150px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={toggleMenu}
            >
                <img
                    src={
                        imageSrc ||
                        "https://static.vecteezy.com/system/resources/previews/036/744/532/non_2x/user-profile-icon-symbol-template-free-vector.jpg"
                    }
                    alt={label}
                    className={`h-12 w-12 rounded-full object-cover transform transition-all duration-300 
            ${hovered ? "translate-x-[-20px]" : "translate-x-20"}`}
                />
                <span
                    className={`ml-2 text-gray-700 font-medium whitespace-nowrap transition-opacity duration-300 
            ${hovered ? "opacity-100" : "opacity-0"}`}
                >
          {label}
        </span>
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div  className="absolute right-115 top-0 bg-gray-50 text-gray-400
                    translate-x-[486.4px] translate-y-[54.4px]
                min-w-max z-50
                [--radix-popper-available-width:718px]
                [--radix-popper-available-height:607.2624998092651px]
                [--radix-popper-anchor-width:35px]
                [--radix-popper-anchor-height:35px]
                [--radix-popper-transform-origin:100%_0px]"
                >
                    <div data-side="bottom" data-align="end" role="menu" aria-orientation="vertical" data-state="open"
                         data-radix-menu-content="" dir="ltr" id="radix-:r4:" aria-labelledby="radix-:r3:"
                         data-slot="dropdown-menu-content"
                         tabIndex="-1" data-orientation="vertical"
                         className="text-gray-500 outline-none pointer-events-auto bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md w-56
                    [--radix-dropdown-menu-content-transform-origin:var(--radix-popper-transform-origin)]
                    [--radix-dropdown-menu-content-available-width:var(--radix-popper-available-width)]
                    [--radix-dropdown-menu-content-available-height:var(--radix-popper-available-height)]
                    [--radix-dropdown-menu-trigger-width:var(--radix-popper-anchor-width)]
                    [--radix-dropdown-menu-trigger-height:var(--radix-popper-anchor-height)]">
                        <div data-slot="dropdown-menu-label"
                             className="px-2 py-1.5 text-sm data-[inset]:pl-8 font-normal">
                            <div className="flex flex-col space-y-1 items-center"><p
                                className="text-sm font-medium leading-none">{name}</p><p
                                className="text-xs leading-none text-muted-foreground">{email}</p><p
                                className="text-xs leading-none text-muted-foreground">{department}</p></div>
                        </div>
                        <div role="separator" aria-orientation="horizontal" data-slot="dropdown-menu-separator"
                             className="bg-border -mx-1 my-1 h-px"></div>
                        <div role="menuitem" data-slot="dropdown-menu-item" data-variant="default"
                             className="hover:bg-gray-400 hover:text-amber-50 focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 cursor-pointer"
                             tabIndex="-1" data-orientation="vertical" data-radix-collection-item=""
                            onClick={()=>navigate("/Settings")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-user mr-2 h-4 w-4" aria-hidden="true">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Account Settings
                        </div>
                        {role==="admin"&&(
                            <div role="menuitem" data-slot="dropdown-menu-item" data-variant="default"
                                 className="hover:bg-gray-400 hover:text-amber-50 focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 cursor-pointer"
                                 tabIndex="-1" data-orientation="vertical" data-radix-collection-item=""
                                onClick={()=>navigate("/Admin")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-shield mr-2 h-4 w-4"
                                     aria-hidden="true">
                                    <path
                                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                </svg>
                                Admin Dashboard
                            </div>
                        )}
                        <div role="separator" aria-orientation="horizontal" data-slot="dropdown-menu-separator"
                             className="bg-border -mx-1 my-1 h-px"></div>
                        <div role="menuitem" data-slot="dropdown-menu-item" data-variant="default"
                             className="text-red-600 hover:bg-red-600 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&amp;_svg:not([class*='text-'])]:text-muted-foreground relative flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 cursor-pointer   hover:text-amber-50"
                             tabIndex="-1" data-orientation="vertical" data-radix-collection-item=""
                             onClick={()=>navigate("/")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-log-out mr-2 h-4 w-4"
                                 aria-hidden="true">
                                <path d="m16 17 5-5-5-5"></path>
                                <path d="M21 12H9"></path>
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            </svg>
                            Sign Out
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HoverProfile;

