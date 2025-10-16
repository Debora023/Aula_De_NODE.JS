import express from "express";
import { Agen_consultasController } from "./controller/Agen_consultas";
import { Cadastro_pacienteController } from "./controller/Cadastro_paciente";
import { OrcamentoController } from "./controller/Orcamento";
import { Reg_tratamento_ortoController } from "./controller/Reg_tratamento_orto";

export const app = express();

// Configuração de CORS 
app.use((req, res, next) =>) {
    res.header("Access-Control-Allow-Origin", "*"); // Permite todas as origens
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");

    // Responde requisições OPTIONS (preflight)
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

app.use(express.json());

Agen_consultasController();
Cadastro_pacienteController();
OrcamentoController();
Reg_tratamento_ortoControllerr();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


