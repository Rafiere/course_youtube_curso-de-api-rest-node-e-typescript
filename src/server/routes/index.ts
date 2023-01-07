import { Router } from "express";
import { StatusCodes } from "http-status-codes";

/* Nesse arquivo, colocaremos todas as rotas do projeto. Esse arquivo é um tipo de "middleware", que informa para o servidor as rotas que ele possui. */

const router = Router();

router.get("/", (req, res) => {
  res.status(StatusCodes.ACCEPTED).json(req.body);
});

/* Estamos exportando para utilizar as rotas dentro do arquivo de servidor. */
export { router };
