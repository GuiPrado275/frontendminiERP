import React from 'react';
import { useAuth } from '../../auth/AuthContext.jsx';
import Layout from '../../components/Layout.jsx';

function Dashboard() {
    const { user } = useAuth();

    return (
        <Layout>
            <div className="dashboard-container">
                <h1>Bem-vindo, {user?.name}!</h1>

                <div className="dashboard-cards">
                    <div className="card">
                        <h3>Resumo do Sistema</h3>
                        <p>Você está logado como: {user?.email}</p>
                        <p>Perfil: {user?.role || 'Usuário'}</p>
                    </div>

                    <div className="card">
                        <h3>Atividades Recentes</h3>
                        <ul>
                            <li>Último login: {new Date().toLocaleString()}</li>
                            <li>Total de usuários: --</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
