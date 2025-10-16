export class Agendamento {
    constructor(
        private id: String,
        private nome: String,
        private email: String,
        private especialidade: String,
        private dataConsulta: Date,
        private horario: String,
        private telefone: String
        
    ) {
    if (!nome) throw new Error("Insira o nome do paciente.");
    if (!especialidade) throw new Error("Insira o tipo Plano.");
    if (!email) throw new Error("Insira seu email");
    if (!telefone) throw new Error("Insira seu número de telefone.");
    if (!dataConsulta) throw new Error("Insira data da consulta.");      
    if (!horario) throw new Error("Insira o Horário.");  

    }

    static create(nome: String, email: String, especialidade: String, dataConsulta: Date, horario: String, telefone: String) {
        const id = crypto.randomUUID();0

        return new Agendamento(id, nome, email, especialidade, dataConsulta, horario, telefone);
    }

    getId(): String {
        return this.id;
    }

    getNome(): String {
        return this.nome;
    }
    
    geteEmail(): String {
        return this.email;
    }

    getdataConsulta(): Date {
        return this.dataConsulta;
    }

    gethorario(): String {
        return this.horario;
    }

    getEmail(): String {
        return this.email;
    }

     getEspecialidade(): String {
        return this.especialidade;
    }

}