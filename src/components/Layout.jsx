import React from 'react';
import { useAuth } from '../auth/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

function Layout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <header>
                <nav>
                    {user && (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/users">Usuários</Link>
                            <button onClick={handleLogout}>Sair</button>
                        </>
                    )}
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;