//import {resolvers} from './resolvers';
import {importSchema} from 'graphql-import';
//import {makeExecutableSchema} from 'graphql-tools';

//Importamos el schema
const typeDefs = importSchema('data/schema.graphql');

//const schema = makeExecutableSchema({typeDefs, resolvers});

export {typeDefs};