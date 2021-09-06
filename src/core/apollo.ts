import { ApolloServer, ApolloServerExpressConfig, ServerRegistration } from 'apollo-server-express';
import { allSchema } from '../graphql/rootShcema';

export async function applyApollo(app: any) {
  // applly apollo confing to express app
  const apolloConfig: ApolloServerExpressConfig = {
    schema: allSchema,
    /*  context: async ({ req }: { req: any; }) => {
     //  const uid = req.headers.uid 
     
       return ({
         //  uid: uid,// add the user to the context
         loaders: {
           // batchsLoader: batchDataLoader()
         }
       });
     }, */

    formatError: error => {
      console.log(`[Graphql ERROR] ${error}`);
      return error;
    },
    /*  cacheControl: {
       defaultMaxAge: 0,// 2 day=60*60*48
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
  await apollo.start();
  apollo.applyMiddleware(apolloRegistration);
}
