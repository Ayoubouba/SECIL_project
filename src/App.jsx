import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CoursePage from './CoursePage';
import Home from './Home';
import Login from "./Login.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminpage from "./Adminpage.jsx";
import "./App.css"
import Settingpage from "./Settingpage.jsx";
const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/CoursePage" element={<CoursePage />} />
                    <Route path="/Admin" element={<Adminpage />}/>
                    <Route path="/Settings" element={<Settingpage />} />
                </Routes>
            </Router>
            <ToastContainer position="top-center" autoClose={2500} />
        </>
    )
}
export default App
