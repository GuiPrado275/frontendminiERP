import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Carregando...</div>;

    return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;