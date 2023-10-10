//criar mensagens de erro personalizada(middlewares) pois o padrão express é uma pagina html
//middlewares para receber os erros em obj json

//pega os erros das rotas que n existem, que nao tem um controlador
//next é apenas o callbakc (retoro da chamada) que disparamos quando terminamos diznedo execute a proxima func da middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404); //not found
  next(error);
};

//pega todos os erros das rotas
const errorHandller = (err, req, res, next) => {
  //200 é que ocorreu tudo bem, mas se essa funcao pegou o erro entao verifica se o codigo é 200 e muda pra 500, seo cogido não for 200 deixa como esta.
  let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    //erro especifico do mongoose, pois o padrao é meio confuso.
    statusCode = 404;
    message = "Resource not found";
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandller };
