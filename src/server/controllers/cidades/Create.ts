import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

/* O "Request" aceita um parâmetro de tipagem, assim, estamos passando para o parâmetro "ReqBody", que é o terceiro parâmetro, a interface "ICidade", que vai tipar a forma que o corpo dessa requisição deverá estar. */
export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const data = req.body;

  res.send("Created!");
};
