import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Carregando...</div>; // espera o carregamento do usuário

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
