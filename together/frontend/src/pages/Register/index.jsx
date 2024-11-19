import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from "react-router-dom";
import { createUser } from '../../api/user';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const responseApi = await createUser({ nome, email, senha });
      console.log(responseApi);
      if (responseApi.id) {
        navigate('/');
      } else {
        console.log(responseApi);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        return alert("Sem permissão.");
      }
      if (error.status === 401 || error.status === 404) {
        return alert('Email ou senha inválido, tente novamente!');
      }
      alert('Erro inesperado, tente novamente mais tarde!');
    }
  };

  return (
    <div className="registro-container">
      <h2 className="registro-titulo">Registro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className="registro-campo">
          <label className="registro-label">Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="registro-input"
            required
          />
        </div>
        <div className="registro-campo">
          <label className="registro-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registro-input"
            required
          />
        </div>
        <div className="registro-campo">
          <label className="registro-label">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="registro-input"
            required
          />
        </div>
        <button className="registro-botao" type="submit">Cadastrar-se</button>
      </form>
      <p className="registro-texto">Já tem uma conta? <Link to="/">Entre aqui</Link></p>
    </div>
  );
}
