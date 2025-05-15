import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import UserManagement from './pages/UserManagement/UserManagement.jsx';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
                    <Route path="/users" element={<PrivateRoute element={UserManagement} />} />
                    <Route path="/" element={<PrivateRoute element={Dashboard} />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;