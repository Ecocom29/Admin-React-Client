import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import {typeDefs} from './data/schema';
import {resolvers} from './data/resolvers';

const app = express();
const server = new ApolloServer({typeDefs, resolvers})


server.applyMiddleware({app});

//Configuracion de ApolloServer
app.listen({port: 4000}, ()=>{
    console.log(`El servidor esta corriendo http://localhost:4000${server.graphqlPath}`)
});

/*app.get('/', (req, res) => {
    res.send('Servidor listo');
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(8000, () => console.log("El servidor esta funcionando"));
*/