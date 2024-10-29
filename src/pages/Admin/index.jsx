import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha });

    // Aqui você pode adicionar a lógica de autenticação do admin

    navigate('/admin/dashboard'); // Redireciona após o login
  };

  return (
    <div className="container">
      <h2 className="titulo">Login Admin</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="campo">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="campo">
          <label className="label">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="botao">Entrar</button>
      </form>
      <p>Não tem uma conta? <Link to="/Register/index">Cadastre-se aqui</Link></p>
    </div>
  );
};

export default LoginAdmin;
