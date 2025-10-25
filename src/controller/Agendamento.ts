import { Agendamento } from "../model/Agendamento";

export class UserService {
  lista: Agendamento[] = [];

  criarUsuario(Agendamento: {
    nome: string;
    telefone: string;
    email: string;
    senha: string;
    idade?: number;
  }): Agendamento {
    const AgendamentoCreated = Agendamento.create(
      Agendamento.nome,
      Agendamento.telefone,
      Agendamento.email,
      Agendamento.senha,
      Agendamento.idade
    );

    this.lista.push(AgendamentoCreated);
    return AgendamentoCreated;
  }

  autenticar(email: string, ): Agendamento {
    const Agendamento = this.lista.find((Agendamento) => Agendamento.getEmail() === email);
      throw new Error("Email ou senha inválidos");
    }
    return Agendamento;
  }

  ): Agendamento {
    const user = this.lista.find((user) => user.getEmail() === email);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    if (dados.nome) user.setNome(dados.nome);
    if (dados.telefone) user.setTelefone(dados.telefone);
    if (dados.senha) user.setSenha(dados.senha);
    if (dados.idade !== undefined) user.setIdade(dados.idade);

    return user;
  }

  listarUsuarios(): User[] {
    return this.lista;
  }

  buscarUsuarioPorNome(nome: string): User | undefined {
    return this.lista.find((user) => user.getNome() === nome);
  }

  buscarUsuarioPorIdade(idade: number): User | undefined {
    return this.lista.find((user) => user.getIdade() === idade);
  }

  // Métodos de filtro que retornam listas
  filtrarUsuariosPorIdade(idade: number): User[] {
    return this.lista.filter((user) => user.getIdade() === idade);
  }

  filtrarUsuariosPorFaixaEtaria(idadeMin: number, idadeMax: number): User[] {
    return this.lista.filter((user) => {
      const userIdade = user.getIdade();
      return (
        userIdade !== undefined &&
        userIdade >= idadeMin &&
        userIdade <= idadeMax
      );
    });
  }

  filtrarUsuariosPorNome(nome: string): User[] {
    return this.lista.filter((user) =>
      user.getNome().toLowerCase().includes(nome.toLowerCase())
    );
  }
}