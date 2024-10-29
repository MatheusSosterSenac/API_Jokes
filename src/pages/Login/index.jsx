import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha });

    navigate('/index');
  };

  return (
    <div className="container">
      <h2 className="titulo">Login</h2>
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
      <p>Não tem uma conta? <Link to="/Register">Cadastre-se aqui</Link></p>
    </div>
  );
};

export default Login;
