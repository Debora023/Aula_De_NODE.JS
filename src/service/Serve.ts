import express from "express";
import { AgendamentoController } from "./controller/Agendamento";
import { CompraController } from "./controller/Compra";
import { OrcamentoController } from "./controller/Orcamento";
import { PacienteController } from "./controller/Paciente";


export const app = express();


app.use((req, res, next) =>) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");

 
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }

    next();
});

app.use(express.json());

AgendamentoController();
CompraController();
OrcamentoController();
PacienteControllar();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


