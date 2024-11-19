import api from './api';


export const getPiadas = async (page = 1) => {
  const response = await api.get('/api/v1/piada', {
    params: {
      page: page,
    }
  });
  return response.data;
};

export const getpiadaById = async (id) => {
  const response = await api.get(`/api/v1/piada/${id}`);
  return response.data;
};


export const createPiada = async (piada) => {
  const response = await api.post('/api/v1/piada', piada);
  return response.data;
};

export const updatePiada = async (id, piada) => {
  const response = await api.put(`/api/v1/piada/${id}`, piada);
  return response.data;
};

export const deletePiada = async (id) => {
  return api.delete(`/api/v1/piada/${id}`);
};
const registerAllPiadas = async () => {
  let page = 1;
  const piadas = [];

  // Obtenha todas as piadas da API
  while (true) {
    const response = await getPiadas(page);
    piadas.push(...response);

    // Verifique se há mais páginas
    if (!response.length || response.length < 10) {
      break;
    }

    page++;
  }

  // Insira as piadas no banco de dados
  db.piadas.insertMany(piadas)
    .then(() => console.log('Piadas cadastradas com sucesso!'))
    .catch((err) => console.error('Erro ao cadastrar piadas:', err));
};

registerAllPiadas();