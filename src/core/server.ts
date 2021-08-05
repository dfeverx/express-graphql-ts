import express from 'express';
import errorhandler from 'errorhandler';
import http from 'http';
import { ApolloServer, ApolloServerExpressConfig, ServerRegistration } from 'apollo-server-express';
import { allSchema } from '../graphql/rootShcema';

import bodyParser from 'body-parser'



/* const bodyParser = require('body-parser');
app.use(bodyParser); */
async function runServer() {

  const app = express();
  const port = process.env.PORT || 3000;

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }

  // compression : recommanded to use nginx gzip compression directive
  // response header : recommanded to use nginx add header directive

  // app.use(cookieParser());
  app.use(bodyParser.json());
  // apply middleware
  // app.use("/graphql", authMiddleware)

  applyApollo(app);

  // set API route
  // const test = require("../app/api/test")
  // app.use("/test", test);

  // create server
  const server = http.createServer(app);




  // start server
  server.listen(port, () => {

    console.log(`express server is listening port ${port}`);

  });
}

async function applyApollo(app: any) {
  // applly apollo confing to express app
  const apolloConfig: ApolloServerExpressConfig = {
    schema: allSchema,
    context: async ({ req }: { req: any }) => {
      /* const uid = req.headers.uid || 'user_id123456789';
      const permission = req.headers.permission || 0;
      console.log("token", uid);
      console.log("Permission", permission); */


      /* // try to retrieve a user with the token
      const user = getUser(token);
      
      // optionally block the user
      // we could also check user roles/permissions here
      if (!user) throw new AuthenticationError('you must be logged in');  */

      // add the user to the context
      return ({
        /*  uid: uid,
         permission: permission, */
        loaders: {
          // batchsLoader: batchDataLoader()
        }
      });
    },

    formatError: error => {
      console.log(`[Graphql ERROR] ${error}`);


      return error;
    },
    /*  cacheControl: {
       defaultMaxAge: 0,//in you situation it willbe 2 day=60*60*48
     }, */
    plugins: []
  };

  const apolloRegistration: ServerRegistration = {
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: true,
  };

  const apollo = new ApolloServer(apolloConfig);
  await apollo.start()
  apollo.applyMiddleware(apolloRegistration);
}


export { runServer };
