import { useEffect, useState } from 'react';

export default function Jokes1() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchJoke() {
            setLoading(true);
            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Any');
                if (!response.ok) {
                    throw new Error("Erro na requisição");
                }
                const data = await response.json();
                setJoke(data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchJoke();
    }, []);

    if (loading) return <p>Carregando piada...</p>;
    if (error) return <p>{error}</p>;

    return <p className='piada'>{joke}</p>;
}
