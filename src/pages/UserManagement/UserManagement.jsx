import React, { useState, useEffect } from 'react';
import api from '../../services/api.jsx';

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const { data } = await api.get('/users');
        setUsers(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/users', formData);
        loadUsers();
        setFormData({ name: '', email: '' });
    };

    const handleDelete = async (id) => {
        await api.delete(`/users/${id}`);
        loadUsers();
    };

    return (
        <div>
            <h1>Gerenciar Usuários</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nome"
                />
                <input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    type="email"
                />
                <button type="submit">Adicionar</button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={() => handleDelete(user.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserManagement;