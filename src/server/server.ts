import express from "express";

/* Esse arquivo terá o código básico do servidor Express. */

/* Estamos criando uma instância do Express. */
const server = express();

server.get("/", (req, res) => {
  res.send({ message: "Olá, dev!" });
});

export { server };
