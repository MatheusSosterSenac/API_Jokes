import './styles.css'
import React from "react";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div className='container'>
            <h1 className='titulo'>Sobre</h1>
                <p className='texto'>
                    Esta é uma página que pretende trazer piadas utilizando uma API, buscamos promover uma identidade que promova a liberdade de expressão, o que é essencial para o humor e para livre circulação e fomento de ideias.
                </p>
            <div className='container-sub'>      
            <h2 className='subtitulo'> "Se você proibir alguém de falar bobagem, como saberá o que ele pensa?"</h2>
            </div> 
            <img className='foto2' src="https://www.folhadedourados.com.br/wp-content/uploads/2024/05/x-82.jpg" alt="Liberdade de expressao" />
            <h3>Página criada por: <a href = "https://github.com/1aufer" >Gabriel Antônio Laufer</a> e Matheus Henrique Soster ("Software") </h3>
        </div>
    )
}