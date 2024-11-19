import './styles.css';
import React, { useState } from "react";
import Jokes1 from './api';

export default function Liberty() {
    const [mostrarPiada, setMostrarPiada] = useState(false);
    return (
        <div className='container'>
            <h1 className='titulo'>Liberdade de expressão</h1>
            <p className='texto'>
                Liberdade de expressão está intrisicamente ligada a liberdade de reunião, liberdade de ideias, liberdade de imprensa e também é um dos direitos humanos, mas afinal o que é liberdade de expressão?
                Segundo Hélio Beltrão liberdade de expressão é: "Quando um indivíduo se expressa livremente, ele materializa seu pensamento, sentimento, emoções, dúvidas, crenças etc. — trata-se de seu direito intrínseco, garantido pelo simples fato de ele existir e ser o proprietário de suas cordas vocais, membros e cérebro. Nenhuma proibição pode revogar isso."
                Na contramão da liberdade de expressão existe a censura, que se caracteriza por uma ação que proibe a difusão de determinada opinião, procurando calar e punir desde uma pessoa, ou até mesmo uma rede social ou um país inteiro como ocorre em ditaduras. O filósofo John Stuart Mill esclarece que silenciar uma determinada opinião é prejudicial não somente à geração atual, mas também à posteridade. Isso porque “se a opinião for correta, ficarão privados da oportunidade de trocar erro por verdade; se estiver errada, perdem uma impressão mais clara e viva da verdade, produzida pela sua confrontação com o erro”.
                Hayek afirma que “a liberdade significa necessariamente que muitas coisas de que não gostamos serão feitas”. Expor uma ideia divergente é uma delas. 
            </p>
            <div className='container-sub'>      
                <h2 className='subtitulo'> "Sem liberdade de pensamento, não pode haver conhecimento; e não há qualquer liberdade pública sem liberdade de expressão." - Benjamin Franklin</h2>
                <h2 className='subtitulo'> "Quando a liberdade de expressão nos é tirada, logo poderemos ser levados, como ovelhas, mudos e silenciosos, para o abate." - George Washington</h2>
            </div> 
            <img className='foto' src="https://pbs.twimg.com/media/GWvrzqcWcAA4dxr.png" alt="Anne Frank" />
            <div className='joke-section'>
                <h2 className='joke-titulo'>Use a liberdade com moderação (Contém piadas ofensivas, clique apenas se não for se ofender):</h2>
                <button className='botao-piada' onClick={() => setMostrarPiada(!mostrarPiada)}>Gerar Piada</button>
                { mostrarPiada && (
                    <Jokes1 /> 
                )}
    
            </div>
        </div>
    );
}
