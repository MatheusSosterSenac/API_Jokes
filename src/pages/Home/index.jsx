import './styles.css';
import React from "react";
import { Link } from "react-router-dom";

export default function Inicial() {
  return (
    <div className="container">
      <h1 className="titulo">Bem-vindo ao Portal das Piadas</h1>
      
      {/* Engrenagem para acessar a página do ADM */}
      <Link to="/admin" className="admin-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-settings"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3v1" />
          <path d="M12 20v1" />
          <path d="M4.22 4.22l.707 .707" />
          <path d="M18.36 18.36l.707 .707" />
          <path d="M4.22 19.78l.707 -.707" />
          <path d="M18.36 5.64l.707 -.707" />
          <path d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0 -8" />
        </svg>
      </Link>

      <div className="destaque-container">
        <div className="destaque-item">
          <img
            className="foto3"
            src="https://cdn.dicionariopopular.com/imagens/piada-do-google5.jpg"
            alt="Símbolo do Anarcocapitalismo"
          />
          <h3 className="destaque-titulo">O que são piadas?</h3>
          <p className="destaque-texto">
            A Anedota ou Piada é um gênero textual humorístico que tem o intuito de levar ao riso. São textos populares que vão sendo contados em ambientes informais, e que normalmente não possuem um autor. Trata-se de um texto narrativo simples em que geralmente há presença de enredo, personagens, tempo, espaço.
          </p>
          <Link to="/sobre" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img
            className="foto3"
            src="https://pbs.twimg.com/media/FPBPJVdXEA8_vp-.jpg"
            alt="Capitalismo de Livre Mercado"
          />
          <h3 className="destaque-titulo">Liberdade de expressão</h3>
          <p className="destaque-texto">
            Quais os limites da piada? Como estabelecer a tênue linha divisória entre a hipersensibilidade e a brincadeira que ofende, discrimina ou estimula a violência? O humor está relacionado à criatividade para explorar situações esdrúxulas do cotidiano e provocar o riso, trazendo diversão e entretenimento, por meio de piadas, comédias, sátiras etc. É a expressão da inteligência humana a desafiar padrões de comportamento culturais, sociais, políticos e até jurídicos, satirizando autoridades, expondo as hipocrisias da sociedade e criando reflexões críticas.
          </p>
          <Link to="/principios" className="saiba-mais-link">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}
