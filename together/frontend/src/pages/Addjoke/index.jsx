import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addJoke } from '../../api/joke';
import { toast } from 'react-toastify';

export default function AddJoke() {
  const [joke, setJoke] = useState('');
  const [type, setType] = useState('');
  const [setup, setSetup] = useState('');
  const [delivery, setDelivery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addJoke({ joke, type, setup, delivery });
      if (response.id) {
        toast('Piada adicionada com sucesso!');
        navigate('/jokes'); // Redireciona para a lista de piadas
      }
    } catch (error) {
      toast('Erro ao adicionar piada, tente novamente mais tarde!');
      console.error('Erro ao adicionar piada:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Piada</h1>
      <form onSubmit={handleSubmit}>
        <label>Tipo:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        <label>Piada:</label>
        <input type="text" value={joke} onChange={(e) => setJoke(e.target.value)} required />
        <label>Setup:</label>
        <input type="text" value={setup} onChange={(e) => setSetup(e.target.value)} />
        <label>Delivery:</label>
        <input type="text" value={delivery} onChange={(e) => setDelivery(e.target.value)} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
