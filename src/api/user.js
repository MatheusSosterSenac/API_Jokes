const User = require('../model/user');
const bcrypt = require('bcrypt');
const UserController = require('../controller/user')

class UserApi {
    async createUser(req, res) {
    const { nome, email, senha, role } = req.body;

    try {
      // const existingUser = await User.findOne({ where: { email } });
      // if (existingUser) {
      //   return res.status(400).json({ message: 'Email já cadastrado' });
      // }

      const hash = bcrypt.hashSync(senha, 10);

      const newUser = await User.create({
        nome,
        email,
        senha: hash,
        role: role || 'viewer',
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
  }

  // Atualiza um usuário existente
  async updateUser(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      user.nome = nome || user.nome;
      user.email = email || user.email;

      if (senha) {
        user.senha = await bcrypt.hash(senha, 10);
      }

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  // Deleta um usuário
  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      await user.destroy();
      res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
    }
  }

  // Bloqueia ou desbloqueia um usuário
  async toggleBlockUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      user.bloqueado = !user.bloqueado;
      await user.save();

      res.status(200).json({ message: 'Status do usuário atualizado', user });
    } catch (error) {
      console.error('Erro ao bloquear usuário:', error);
      res.status(500).json({ message: 'Erro ao bloquear usuário', error: error.message });
    }
  }

  async findContext(req, res) {
    try {
        const user = await UserController.findUser(req?.session?.id || 0)
        return res.status(200).send(user)
    } catch (e) {
        return res.status(400).send({ error: `Erro ao listar usuário ${e.message}`})
    }
}
async login(req, res) {
  const { email, senha } = req.body
  console.log(req.body)
  try {
      const token = await UserController.login(email, senha)

      res.status(200).send({ token })
  } catch (e) {
      res.status(400).send({ error: e.message })
  }
}
async findUsers(req, res) {
  try {
      const users = await UserController.find()
      return res.status(200).send(users)
  } catch (e) {
      return res.status(400).send({ error: `Erro ao listar usuário ${e.message}`})
  }
}

  // Busca um usuário pelo ID
  async findUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }
}

module.exports = new UserApi();
