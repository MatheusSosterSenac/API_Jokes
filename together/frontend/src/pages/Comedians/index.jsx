import './styles.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../auth/context';

const useIsAdmin = () => {
  const { role } = useContext(AuthContext);
  return role === 'admin';
};

export default function Comedians() {
  const isAdmin = useIsAdmin();
  const [comedians, setComedians] = useState([
    {
      id: 1,
      name: "Danilo Gentili",
      description: "Danilo Gentili Júnior (Santo André, 27 de setembro de 1979) é um comediante, apresentador, escritor, cartunista, repórter, publicitário, ator e empresário brasileiro.",
      imageUrl: "https://pbs.twimg.com/media/FePicKoXwAEG7IF.jpg",
      link: "/sobre",
    },
    {
      id: 2,
      name: "Eduardo Sterblitch",
      description: "Luiz Eduardo Sterblitch Páschoa (Rio de Janeiro, 15 de janeiro de 1987) é um humorista, ator, roteirista, cantor e apresentador de televisão brasileiro.",
      imageUrl: "https://ofuxico.com.br/wp-content/uploads/2022/08/eduardo-sterblitch.jpg",
      link: "/principios",
    },
    {
      id: 3,
      name: "Diogo Defante",
      description: "Diogo Defante Rodrigues (Rio de Janeiro, 27 de setembro de 1988) é um humorista, youtuber e músico brasileiro.",
      imageUrl: "https://s2-oglobo.glbimg.com/yCI-A6fPm8Jn_DPf5PPi6vonbf4=/0x0:3411x2233/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/b/7/6qORwGRLyyTcVY7FQOVg/defante.jpg",
      link: "/principios",
    },
    {
      id: 4,
      name: "Marcos Castro",
      description: "Marcos Castro Chagas Teixeira de Azevedo (Rio de Janeiro, 26 de fevereiro de 1986), é um ator, comediante, roteirista, cantor, músico, compositor, youtuber, apresentador de televisão.",
      imageUrl: "https://www.clickfozdoiguacu.com.br/wp-content/uploads/2023/07/marcos-castro.jpeg",
      link: "/principios",
    }
  ]);

  const handleEdit = (id) => {
    if (!isAdmin) return;
    // Aqui você pode exibir um formulário ou redirecionar para uma página de edição
    alert(`Editar humorista com id: ${id}`);
    // Exemplo de lógica para editar (você pode adicionar mais campos se necessário)
    const updatedComedians = comedians.map(comedian =>
      comedian.id === id
        ? { ...comedian, description: "Descrição atualizada" }
        : comedian
    );
    setComedians(updatedComedians);
  };

  return (
    <div className="container">
      <h1 className="titulo">Humoristas</h1>
      <div className="destaque-container">
        {comedians.map((comedian) => (
          <div className="destaque-item1" key={comedian.id}>
            <img
              className="foto1"
              src={comedian.imageUrl}
              alt={`Foto de ${comedian.name}`}
            />
            <h3 className="destaque-titulo">{comedian.name}</h3>
            <p className="destaque-texto">{comedian.description}</p>
            <Link to={comedian.link} className="saiba-mais-link">Saiba mais</Link>
            {isAdmin && (
              <button onClick={() => handleEdit(comedian.id)} className="edit-button">
                Editar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}