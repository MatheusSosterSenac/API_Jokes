import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateJoke } from '../../api/joke';
import { toast } from 'react-toastify';

export default function EditJoke() {
  const { state } = useLocation();
  const { joke } = state || {};
  const [type, setType] = useState(joke?.type || '');
  const [jokeText, setJoke] = useState(joke?.joke || '');
  const [setup, setSetup] = useState(joke?.setup || '');
  const [delivery, setDelivery] = useState(joke?.delivery || '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateJoke(joke.id, { type, joke: jokeText, setup, delivery });
      if (response.id) {
        toast('Piada atualizada com sucesso!');
        navigate('/jokes');
      }
    } catch (error) {
      toast('Erro ao atualizar piada, tente novamente mais tarde!');
      console.error('Erro ao atualizar piada:', error);
    }
  };

  return (
    <div>
      <h1>Editar Piada</h1>
      <form onSubmit={handleSubmit}>
        <label>Tipo:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        <label>Piada:</label>
        <input type="text" value={jokeText} onChange={(e) => setJoke(e.target.value)} required />
        <label>Setup:</label>
        <input type="text" value={setup} onChange={(e) => setSetup(e.target.value)} />
        <label>Delivery:</label>
        <input type="text" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
