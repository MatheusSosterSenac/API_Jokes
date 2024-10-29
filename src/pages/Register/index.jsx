import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, email, senha });

    // Aqui você pode adicionar lógica para registrar o usuário, se necessário

    navigate('/index'); // Redireciona após o registro
  };

  return (
    <div className="container">
      <h2 className="titulo">Registro</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="campo">
          <label className="label">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
            required
          />
        </div>
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
        <button type="submit" className="botao">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/">Entre aqui</Link></p>
    </div>
  );
};

export default Registro;
