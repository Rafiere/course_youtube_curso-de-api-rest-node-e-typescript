import express from "express";

/* Esse arquivo terá o código básico do servidor Express. */

const server = express();

server.get("/", (req, res) => {
  res.send("Olá, dev!");
});

export { server };
