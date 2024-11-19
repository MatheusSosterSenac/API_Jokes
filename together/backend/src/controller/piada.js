const Piada = require('../model/Piada');
const axios = require('axios');
const JOKES_API_URL = 'https://v2.jokeapi.dev/joke/Any?amount=10'; 
const currentPage = 1;
class PiadasController {
  
  async criarPiadas(categoria, tipo, piada, resposta) {
    try {
      if (!categoria || !tipo || !piada) {
        throw new Error("Dados obrigatórios não preenchidos.");
      }

      const novaPiada = await Piada.create({
        categoria,
        tipo,
        piada,
        resposta: resposta || null,
      });

      return novaPiada;
    } catch (error) {
      console.error('Erro ao criar piada:', error);
      throw new Error('Erro ao criar piada: ' + error.message);
    }
  }

  async listarPiadas() {
    try {
      const piadas = await Piada.findAll();
      if(piadas.length == 0){
        const response = await fetch(`${JOKES_API_URL}&page=${currentPage}`);
        const data = await response.json();
        this.criarPiadas(categoria, tipo, piada, resposta)
      }
      return piadas;
    } catch (error) {
      console.error('Erro ao listar piadas:', error);
      throw new Error('Erro ao listar piadas: ' + error.message);
    }
  }

  async atualizarPiada(id, categoria, tipo, piada, resposta) {
    try {
      const joke = await Piada.findByPk(id);
      if (!joke) {
        throw new Error('Piada não encontrada');
      }

      joke.categoria = categoria || joke.categoria;
      joke.tipo = tipo || joke.tipo;
      joke.piada = piada || joke.piada;
      joke.resposta = resposta || joke.resposta;

      await joke.save();
      return joke;
    } catch (error) {
      console.error('Erro ao atualizar piada:', error);
      throw new Error('Erro ao atualizar piada: ' + error.message);
    }
  }

  async deletarPiada(id) {
    try {
      const joke = await Piada.findByPk(id);
      if (!joke) {
        throw new Error('Piada não encontrada');
      }

      await joke.destroy();
      return { message: 'Piada deletada com sucesso' };
    } catch (error) {
      console.error('Erro ao deletar piada:', error);
      throw new Error('Erro ao deletar piada: ' + error.message);
    }
  }
}

module.exports = new PiadasController();
