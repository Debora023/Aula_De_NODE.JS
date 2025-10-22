export class Servico {
  constructor(
    private id: string,
     private telefone: string,
<<<<<<< HEAD
      private Cpf: string,
    private NomeCompleto: string,
  private FormaDepagamento: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Boleto"],
  private tipoDepagamento: ["À vista", "Parcelado"]
  ) {
    if (!NomeCompleto) throw new Error("Nome completo obrigatório");
    if (telefone === undefined || telefone === null)
      throw new Error("telefone obrigatório");
    if (FormaDepagamento === undefined || FormaDepagamento === null)
      throw new Error("forma de pagamento obrigatório");
    if (Cpf === undefined || Cpf === null)
      throw new Error("Cpf obrigatório");
    if (tipoDepagamento === undefined || tipoDepagamento === null)
      throw new Error("Cpf obrigatório");

    if (NomeCompleto.length < 3) throw new Error("nome muito curto");
    if (Cpf.length <= 11) throw new Error("Cpf deve ter 11 caracteres");

=======
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
>>>>>>> 94896a271caaff70ba7c0b55b67d33b58a3fd878
  }
}
