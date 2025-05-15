import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../auth/authService.jsx';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        try {
            await authService.register({
                email: formData.email,
                password: formData.password
            });
            navigate('/login');
        } catch (error) {
            setError(error.response?.data?.message || 'Erro ao cadastrar');
        }
    };

    return (
        <div className="auth-container">
            <h2>Criar Conta</h2>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Senha:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>

            <p>
                Já tem uma conta? <a href="/login">Faça login</a>
            </p>
        </div>
    );
}

export default Register;
