const axios = require('axios');
const Piada = require('../model/Piada');

class PiadasApi {

  
  async fetchAndSaveJoke(req, res) {
    try {
      const { data } = await axios.get('https://v2.jokeapi.dev/joke/Any?amount=10');

      const piada = {
        categoria: data.category,
        tipo: data.type,
        piada: data.joke || data.setup,
        resposta: data.delivery || null,
      };

      const novaPiada = await Piada.create(piada);

      res.status(201).json(novaPiada);
    } catch (error) {
      console.error('Erro ao buscar piada:', error);
      res.status(500).json({ message: 'Erro ao buscar piada', error: error.message });
    }
  }

  async getJokes(req, res) {
    try {
      const piadas = await Piada.findAll();
      res.status(200).json(piadas);
    } catch (error) {
      console.error('Erro ao listar piadas:', error);
      res.status(500).json({ message: 'Erro ao listar piadas', error: error.message });
    }
  }

  async updateJoke(req, res) {
    const { id } = req.params;
    const { categoria, tipo, piada, resposta } = req.body;

    try {
      const joke = await Piada.findByPk(id);

      if (!joke) {
        return res.status(404).json({ message: 'Piada não encontrada' });
      }

      joke.categoria = categoria || joke.categoria;
      joke.tipo = tipo || joke.tipo;
      joke.piada = piada || joke.piada;
      joke.resposta = resposta || joke.resposta;

      await joke.save();
      res.status(200).json(joke);
    } catch (error) {
      console.error('Erro ao atualizar piada:', error);
      res.status(500).json({ message: 'Erro ao atualizar piada', error: error.message });
    }
  }
  async getJokeById(req, res) {
    const { id } = req.params;

    try {
      const piada = await Piada.findByPk(id);

      if (!piada) {
        return res.status(404).json({ message: 'Piada não encontrada' });
      }

      res.status(200).json(piada);
    } catch (error) {
      console.error('Erro ao buscar piada específica:', error);
      res.status(500).json({ message: 'Erro ao buscar piada específica', error: error.message });
    }
  }
  async deleteJoke(req, res) {
    const { id } = req.params;

    try {
      const joke = await Piada.findByPk(id);

      if (!joke) {
        return res.status(404).json({ message: 'Piada não encontrada' });
      }

      await joke.destroy();
      res.status(200).json({ message: 'Piada deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar piada:', error);
      res.status(500).json({ message: 'Erro ao deletar piada', error: error.message });
    }
  }
  
}

module.exports = new PiadasApi();
