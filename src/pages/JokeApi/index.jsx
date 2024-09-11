import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Card';

export default function Jokes() {
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>);
    const [error, setError] = useState(null);

    async function carregarTodosOsJokes() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any', requestOptions);
            
            if (!response.ok) {
                throw new Error("Erro na requisição");
            }

            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            return { results: [] }; 
        }
    }

    async function listarJokes() {
        const data = await carregarTodosOsJokes();
        console.log(data);  
        
        const results = [];
    
        if (data.type === "twopart") {
            const { setup, delivery, flags } = data;
            if (Object.values(flags).every(flag => !flag)) {
                results.push({ setup, delivery, type: data.type });
            }
        } 
        else if (data.type === "single") {
            const { joke, flags } = data;
            if (Object.values(flags).every(flag => !flag)) {
                results.push({ joke, type: data.type });
            }
        }
    
        return results.map((piada, index) => (
            <Card
                key={index}
                data={piada}
            />
        ));
    }
    

    useEffect(() => {
        async function getConteudo() {
            const jokes = await listarJokes();
            setConteudo(jokes.length > 0 ? jokes : <p>Nenhuma piada encontrada.</p>);
        }
        getConteudo();
    }, []); 

    return (
        <div className='list-principal'>
            {error ? <p>{error}</p> : conteudo}
        </div>
    );
}
