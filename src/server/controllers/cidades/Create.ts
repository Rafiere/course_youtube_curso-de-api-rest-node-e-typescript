import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";

import * as yup from "yup";

interface ICidade {
  nome: string;
  estado: string;
}

/* Estamos criando uma validação para a request que será enviada para esse controlador. O "SchemaOf" obrigará que os atributos a serem validados sejam os que estão sendo declarados na interface que representa a requisição. */
const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  /* Os atributos deverão respeitar essa validação do Yup. */
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

/* Um middleware é uma função que será executada antes que os dados cheguem na rota. Um "RequestHandler" é uma função que retorna "void", e ela tem a tipagem para "req", "res" e "next", sem precisarmos especificar a tipagem dele. */

/* Basicamente, um Middleware é um handler de requests. */

/* O "Next" diz para o Express executar o próximo Handler da fila de Handlers. */

/* Antes de realizarmos qualquer chamada, basicamente, verificaremos se o corpo da chamada está batendo com o Schema de validação. */
export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    /* Abaixo, teremos os dados validados. Se acontecer algum erro na validação, será retornado uma Exception de validação. */

    /* O "abortEarly: false" faz com que a validação não estoure no primeiro campo inválido, e sim, que o Yup valide todos os campos, mesmo que algum falhe, antes de retornar o erro. */
    const validatedData = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });

    /* Se a validação passar, a próxima chamada será executada, que é o "next()". */
    return next();
  } catch (err) {
    /* O "yupError.inner" é uma lista dos erros que aconteceram na validação do Yup. */
    const yupError = err as yup.ValidationError;

    /* O "Record" é um objeto que tem que ser composto por uma chave e um valor. Basicamente, é um "Map" do Java. */
    const validationErrors: Record<string, string> = {};

    /* Para cada erro que aconteceu no Yup, estamos criando uma validação que possui o caminho, ou seja, as propriedades que levam até o campo que deu erro, e a mensagem de erro, que é a mensagem que o Yup informa quando alguma validação falha. */
    yupError.inner.forEach((error) => {
      if (error.path === undefined) {
        return;
      }

      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
  }
};

/* O "Request" aceita um parâmetro de tipagem, assim, estamos passando para o parâmetro "ReqBody", que é o terceiro parâmetro, a interface "ICidade", que vai tipar a forma que o corpo dessa requisição deverá estar. */
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  /* Esse método só será chamado se a validação dos dados for feita com sucesso pelo Yup. */
  console.log(req.body);

  res.send("Created!");
};
