import { server } from "./server/server";

/* Esse será o arquivo principal da aplicação. */

/* Aqui teremos a porta que rodará a aplicação. */
server.listen(process.env.PORT || 3333, () =>
  console.log(`App rodando na porta ${process.env.PORT}`)
);
