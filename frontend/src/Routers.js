import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { isAuthenticated } from './auth/auth.js';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Post from './components/Post';


const Routers = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={isAuthenticated() ? <Navigate to="/post" /> : <Login />} />
            <Route path="/signup" exact element={isAuthenticated() ? <Navigate to="/post" /> : <Signup />} />
            <Route path="/post" exact element={isAuthenticated() ? <Post /> : <Navigate to="/login" />} />
        </Routes>
    </BrowserRouter>
)

export default Routers;
