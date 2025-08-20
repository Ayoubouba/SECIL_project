import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import Cookies from "js-cookie";
const LoginForm = ({Onloginchange}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=> {
        (e).preventDefault()
        axios.post('http://localhost:3001/login', {email: email, password: password})
            .then(res => {console.log(res)
                if(res.data.success){
                    const userData = {
                        email: email,
                        role: res.data.role,
                        name: res.data.name,
                        password: password,
                        department: res.data.department,
                        id: res.data.id,
                    };
                    Cookies.set("user", JSON.stringify(userData));
                    console.log("Saved user cookie:", Cookies.get("user"));
                    toast.success("✅ Login successful!");
                    // Optionally redirect after short delay
                    setTimeout(() => navigate("/home"), 1500);
                }else{
                    toast.error( "❌ Login failed: "+ res.data);
                }
                }
                )
            .catch(error=>{
                if (error.response) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("⚠️ Something went wrong. Please try again.");
                }
            });
    }

    return (
        <>
            <div className=" w-[60%] h-fit flex flex-col justify-center items-left rounded-2xl shadow-2xl  text-black p-7 gap-10">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-gray-500 text-center">Sign in to continue your professional development journey
                        at SECIL</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center  gap-3">
                        <label htmlFor="email"
                               className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium">Email
                            address</label>
                        <input id="email" type="email" placeholder="enter your SECIL email" onChange={(e) => setEmail(e.target.value)}
                                 className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 border-gray-300 focus:shadow-2xl "/>
                        <label htmlFor="password"
                               className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium">Password</label>
                        <input id="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}
                               className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-11 border-gray-300 focus:shadow-2xl"/>
                        <button type="submit"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-4 py-2 has-[>svg]:px-3 w-full h-9 bg-blue-800 hover:bg-blue-950 text-white font-medium ">log
                            in
                        </button>
                    </div>
                </form>
                <div className="flex flex-row justify-center items-center ">
                    <div className="text-center space-y-3 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">Don't have an account? <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9 has-[&gt;svg]:px-3 p-0 text-blue-600 font-medium" onClick={() => Onloginchange(false)}>Create
                            Account</button></p>
                        <p className="text-sm text-gray-500">Need access? <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9 has-[&gt;svg]:px-3 p-0 text-blue-600 font-medium">Contact
                            IT Support</button></p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LoginForm
