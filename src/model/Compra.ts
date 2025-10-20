export class Servico {
  constructor(
    private id: string,
     private telefone: string,
      private cpf: string,
    private nome: string,
    private formaDepagamento: string,
  ) {
    if (!nome) throw new Error("nome obrigatório");
    if (telefone === undefined || telefone === null)
      throw new Error("telefone obrigatório");
    if (formaDepagamento === undefined || formaDepagamento === null)
      throw new Error("forma de pagamento obrigatório");

    if (nome.length < 3) throw new Error("nome muito curto");
    if (telefone.length <= 13) throw new Error("Telefone deve ter 13 caracteres");
    if (formaDepagamento.length <= 0) throw new Error("");
  }
}
