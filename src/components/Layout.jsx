import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

function Layout({ children }) {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="layout-container">
            <header className="header">
                <nav className="nav-links">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/users">Usuários</Link>
                </nav>
                <button className="logout-button" onClick={handleLogout}>Sair</button>
            </header>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default Layout;
