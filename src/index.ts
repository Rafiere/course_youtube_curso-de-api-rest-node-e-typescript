import { server } from "./server/server";

/* Esse será o arquivo principal da aplicação. */

/* Aqui teremos a porta que rodará a aplicação. */
server.listen(3333, () => console.log("App Rodando!"));
