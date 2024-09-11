import './styles.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Comedians() {
  return (
    <div className="container">
      <h1 className="titulo">Humoristas</h1>
      <div className="destaque-container">
        <div className="destaque-item">
          <img
            className="foto1"
            src="https://pbs.twimg.com/media/FePicKoXwAEG7IF.jpg"
            alt="Símbolo do Anarcocapitalismo"
          />
          <h3 className="destaque-titulo">Danilo Gentili</h3>
          <p className="destaque-texto">
          Danilo Gentili Júnior (Santo André, 27 de setembro de 1979) é um comediante, apresentador, escritor, cartunista, repórter, publicitário, ator e empresário brasileiro. Gentili é reconhecido como um dos precursores e idealizadores do movimento do stand-up comedy no Brasil. Atualmente apresenta o programa The Noite no SBT.          </p>
          <Link to="/sobre" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img
            className="foto1"
            src="https://ofuxico.com.br/wp-content/uploads/2022/08/eduardo-sterblitch.jpg"
            alt="Capitalismo de Livre Mercado"
          />
          <h3 className="destaque-titulo">Eduardo Sterblitch</h3>
          <p className="destaque-texto">
          Luiz Eduardo Sterblitch Páschoa (Rio de Janeiro, 15 de janeiro de 1987) é um humorista, ator, roteirista, cantor e apresentador de televisão brasileiro que se tornou conhecido nacionalmente quando se juntou ao Pânico na TV, exibido de 2003 a 2012 pela RedeTV! e posteriormente pela Rede Bandeirantes, exibido entre 2012 e 2017.           </p>
          <Link to="/principios" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img
            className="foto1"
            src="https://s2-oglobo.glbimg.com/yCI-A6fPm8Jn_DPf5PPi6vonbf4=/0x0:3411x2233/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/b/7/6qORwGRLyyTcVY7FQOVg/defante.jpg"
            alt="Capitalismo de Livre Mercado"
          />
          <h3 className="destaque-titulo">Diogo Defante</h3>
          <p className="destaque-texto">
          Diogo Defante Rodrigues (Rio de Janeiro, 27 de setembro de 1988) é um humorista, youtuber e músico brasileiro, mais conhecido por seu estilo de humor nonsense, pelo quadro Repórter Doidão e pelo programa Rango Brabo. Em 2023, lançou seu primeiro EP, intitulado Robson.  
          </p>    
         <Link to="/principios" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img
            className="foto1"
            src="https://www.clickfozdoiguacu.com.br/wp-content/uploads/2023/07/marcos-castro.jpeg"
            alt="Capitalismo de Livre Mercado"
          />
          <h3 className="destaque-titulo">Marcos Castro</h3>
          <p className="destaque-texto">
          Marcos Castro Chagas Teixeira de Azevedo (Rio de Janeiro, 26 de fevereiro de 1986), é um ator, comediante, roteirista, cantor, músico, compositor, youtuber, apresentador de televisão e desenvolvedor de jogos de videogame brasileiro.[1] Possui mestrado em matemática aplicada e, apesar de não exercer a profissão atualmente, a matéria é recorrente em seus vídeos. Começou sua carreira artística em 2007 no Rio de Janeiro, fazendo stand-up.          </p>    
         <Link to="/principios" className="saiba-mais-link">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}
