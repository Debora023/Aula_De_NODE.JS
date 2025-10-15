export class Agendamento {
    constructor(
        private id: string,
        private nome: String,
        private plano: String,
        private consulta: String,
        private dataHora: String

    ) {
    if (!Cliente) throw new Error("paciente ");
    if (!Plano) throw new Error("plano");
    if (!Consulta) throw new Error("consulta");
    if (!datahora) throw new Error("datahora obrigatória");
    }

    static create(nome: String, plano: Plano, consulta: Consulta, dataHora: Date) {
        const id = crypto.randomUUID();
        return new Agendamento(id, nome, plano, consulta, dataHora);
    }

    getId(): string {
        return this.id;
    }

    getNome(): string {
        return this.cliente;
    }
    
    getPlano(): String {
        return this.plano;
    }

    getConsulta(): String {
        return this.consulta;
    }

    getDataHora(): String {
        return this.dataHora
    }
}