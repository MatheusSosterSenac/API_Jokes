import './styles.css'
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Inicial() {
  return (
    <div className="container">
      <h1 className="titulo">Bem-vindo ao Portal das piadas</h1>
      <div className="destaque-container">
        <div className="destaque-item">
          <img
            className="foto"
            src="https://cdn.dicionariopopular.com/imagens/piada-do-google5.jpg"
            alt="Símbolo do Anarcocapitalismo"
          />
          <h3 className="destaque-titulo">O que são piadas</h3>
          <p className="destaque-texto">
          A Anedota ou Piada é um gênero textual humorístico que tem o intuito de levar ao riso. São textos populares que vão sendo contados em ambientes informais, e que normalmente não possuem um autor. Trata-se de um texto narrativo simples em que geralmente há presença de enredo, personagens, tempo, espaço.
          </p>
          <Link to="/sobre" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img
            className="foto"
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
