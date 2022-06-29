import 'reflect-metadata'; //tem que ser importado antes de tudo, e no arquivo principal 'server.ts'
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm'; //só essa importação com a conexão já basta pra iniciar a aplicação aqui

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

//esse seria um middleware, pq dado um erro em routes, ele vai ainda executar o que houver depois, e nisso, aqui é capturado esse erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log(`Listening on port 3333! 👂`);
});
