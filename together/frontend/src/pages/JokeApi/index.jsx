import { useContext, useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import AddButton from '../../components/AddButton';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

const JOKES_API_URL = 'https://v2.jokeapi.dev/joke/Any?amount=10'; 

export default function Jokes() {
  const { role } = useContext(AuthContext);
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log("batata",)
    if (role === 'admin') {
      setIsAdmin(true);
    }
  }, [role]);

  const handleAddClick = () => {
    navigate('/joke/add'); 
  };
 
async function getJokes  () {
    try {
      const response = await getContext()

      if(response.id) {
        setCategoria(response.categoria)
        setTipo(response.tipo)
        setPiada(response.piada)
        setResposta(response.resposta)
      } else {
        // Se as piadas vierem do banco de dados, não há paginacao
        setJokes(data);
        setTotalPages(1);
      }
    } catch (error) {
      console.error('Erro ao carregar as piadas:', error);
    }
  };

  useEffect(() => {
    getJokes(page);
  }, [page]);

  return (
    <div>
      <div className="lista-principal">
        {jokes.map((joke, index) => (
          <Card
            key={index}
            data={{
              type: joke.type,
              joke: joke.joke,
              setup: joke.setup,
              delivery: joke.delivery,
            }}
            editable={isAdmin}
            onClick={() =>
              isAdmin
                ? navigate('/joke/edit', { state: { joke } })
                : null
            }
          />
        ))}
      </div>

      {isAdmin && <AddButton onClick={handleAddClick} />}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
} 