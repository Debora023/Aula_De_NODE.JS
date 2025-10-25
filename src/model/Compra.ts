export class Servico {
  constructor(
      private id: string,
      private telefone: string,
       private Cpf: string, 
       private NomeCompleto: string,
      private Nomedoplano: string,
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
      throw new Error("");

    if (NomeCompleto.length < 2) throw new Error("nome muito curto");
    if (Cpf.length <= 11) throw new Error("Cpf deve ter 11 caracteres");
    if (telefone.length < 11) throw new Error("telefone deve conter 11 digitos.");
}

  static create(
    telefone: string,
    cpf: string,
    NomeCompleto: string,
    Nomedoplano: string,
    FormaDepagamento: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Boleto"],
    tipoDepagamento: ["À vista", "Parcelado"]

) {









}
}
