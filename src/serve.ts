import express from "express";
import { Agen_consultasController } from "./controller/Agen_consultas";
import { Controller } from "./controller/servico";
import { Controller } from "./controller/";
import { UserController } from "./controller/user";

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
Controller();
Controller();
UserController();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


