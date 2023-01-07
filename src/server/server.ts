import express from "express";

/* Todas as mensagens de erro do Yup estarão traduzidas. Esse import deverá ficar antes da configuração das rotas para que ele funcione corretamente. */
import "./shared/services/TraducoesYup";

/* Podemos importar diretamente de "routes" pois, quando temos um arquivo chamado "index", o Node já interpreta que estamos chamando o arquivo "index.ts". */
import { router } from "./routes";

import "dotenv/config";

/* Esse arquivo terá o código básico do servidor Express. */

/* Estamos criando uma instância do Express. */
const server = express();

/* Sem informarmos isso, o Express não conseguirá interpretar dados no formato JSON, como, por exemplo, não conseguirá acessar o que está sendo passado no corpo da requisição. */
server.use(express.json());

/* Estamos pedindo para o servidor reconhecer as rotas da aplicação. */
server.use(router);

export { server };
