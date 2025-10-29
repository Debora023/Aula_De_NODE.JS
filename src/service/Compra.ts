import { Compra } from "../model/Compra";

export class CompraService {
    listaC: Compra[] = [];

   public Compra (Comprar: {
        telefone: string,
        Cpf: string, 
        NomeCompleto: string,
       Nomedoplano: string,
       FormaDepagamento: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Boleto"],
       tipoDepagamento: ["À vista", "Parcelado"]
     }): Compra | void {
       const CompraFeita = Compra.create(
         Comprar.telefone,
         Comprar.Cpf,
         Comprar.NomeCompleto,
         Comprar.Nomedoplano,
         Comprar.FormaDepagamento,
         Comprar.tipoDepagamento
       );
       this.listaC.push(CompraFeita);
       return CompraFeita;
    } 











}