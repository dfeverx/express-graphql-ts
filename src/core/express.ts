import http from 'http';
import express from 'express';
import { applyApollo } from './apollo';
import errorhandler from 'errorhandler';
import chalk from 'chalk';
import { samleMiddleware } from '../middleware/sampleMiddleware';


async function runServer() {

  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());

  // apply middleware
  // app.use("/graphql", samleMiddleware)

  applyApollo(app);

  // GraphQl playground and error handler only enabled in development only
  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
    app.get('/graphql', require('graphql-playground-middleware-express')
      .default({ endpoint: '/graphql' }));
  }

  // set API route
  // app.use("/test", samleMiddleware);

  // create server
  const server = http.createServer(app);

  // start server
  server.listen(port, () => {
    console.log(chalk.yellow.inverse(` Express graphQL is running on  http://localhost:${port}/graphql `));
  });
}

export { runServer };
